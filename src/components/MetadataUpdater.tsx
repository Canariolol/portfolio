"use client";

import { useMetadata } from "@/hooks/useMetadata";

export function MetadataUpdater() {
  useMetadata();
  
  // Este componente no renderiza nada visualmente
  // Solo se encarga de actualizar los metadatos cuando cambia el idioma
  return null;
}
