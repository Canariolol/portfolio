const { onRequest } = require("firebase-functions/v2/https");
const { Resend } = require("resend");
const logger = require("firebase-functions/logger");

exports.sendEmail = onRequest(
  { 
    cors: ["*"], // Permitir todos los orígenes
    secrets: ["RESEND_API_KEY"],
    invoker: "public" // Permitir acceso público sin autenticación
  },
  async (req, res) => {
    // Inicializar Resend con la API key desde el secreto de Firebase
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Configurar CORS headers adicionales
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, OPTIONS, GET");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Max-Age", "3600");

    if (req.method === "OPTIONS") {
      return res.status(200).send();
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
      const { name, email, message, subject } = req.body;

      // Validar campos requeridos
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      logger.info(`Sending email from ${name} (${email})`);

      const data = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["rodrigo.iyagar@gmail.com"],
        subject: subject || `New message from ${name} from your portfolio`,
        html: `
          <h1>New message from contact form</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      logger.info("Email sent successfully:", data);
      return res.status(200).json({ 
        message: "Email sent successfully", 
        data 
      });

    } catch (error) {
      logger.error("Error sending email:", error);
      return res.status(500).json({ 
        error: "There was an error sending the email",
        details: error.message 
      });
    }
  }
);
