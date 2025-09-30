import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada - Tu Nombre",
  description: "La página que buscas no existe o ha sido movida.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida a otra URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
}
