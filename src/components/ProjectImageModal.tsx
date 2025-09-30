"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentImageIndex: number;
  projectName: string;
}

const copy = {
  es: {
    galleryTitle: "Galería",
    closeLabel: "Cerrar",
    previousLabel: "Imagen anterior",
    nextLabel: "Imagen siguiente",
    mainAlt: (name: string, index: number) => `${name} - Imagen ${index}`,
    thumbAlt: (name: string, index: number) => `${name} - Miniatura ${index}`,
  },
  en: {
    galleryTitle: "Gallery",
    closeLabel: "Close",
    previousLabel: "Previous image",
    nextLabel: "Next image",
    mainAlt: (name: string, index: number) => `${name} - Image ${index}`,
    thumbAlt: (name: string, index: number) => `${name} - Thumbnail ${index}`,
  },
};

export default function ProjectImageModal({
  isOpen,
  onClose,
  images,
  currentImageIndex,
  projectName,
}: ProjectImageModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(currentImageIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const text = copy[language];

  useEffect(() => {
    setSelectedImageIndex(currentImageIndex);
  }, [currentImageIndex]);

  const handleClose = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      setIsVisible(true);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else if (isVisible) {
      handleClose();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleClose, isOpen, isVisible]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
        isAnimating ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      } ${isOpen ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"}`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-out transform ${
          isAnimating ? "scale-90 opacity-0 translate-y-5" : "scale-100 opacity-100 translate-y-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {projectName} – {text.galleryTitle}
          </h3>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label={text.closeLabel}
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="relative bg-gray-100 dark:bg-gray-900">
          <div className="aspect-video flex items-center justify-center">
            <img
              key={selectedImageIndex}
              src={images[selectedImageIndex]}
              alt={text.mainAlt(projectName, selectedImageIndex + 1)}
              className="max-w-full max-h-full object-contain transition-opacity duration-200"
              style={{ opacity: isAnimating ? 0 : 1 }}
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label={text.previousLabel}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label={text.nextLabel}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 active:scale-95 ${
                  selectedImageIndex === index
                    ? "border-blue-500 scale-105"
                    : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                }`}
                aria-label={text.thumbAlt(projectName, index + 1)}
              >
                <img
                  src={image}
                  alt={text.thumbAlt(projectName, index + 1)}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
