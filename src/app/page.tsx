import Hero from "@/sections/Hero";
import SobreMi from "@/sections/SobreMi";
import Proyectos from "@/sections/Proyectos";
import Contacto from "@/sections/Contacto";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
    </div>
  );
}
