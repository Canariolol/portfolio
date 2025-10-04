"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';

type EmblaOptionsType = {
  loop?: boolean;
  align?: 'start' | 'center' | 'end';
  duration?: number;
  [key: string]: unknown;
};
import Autoplay from 'embla-carousel-autoplay';
import '../app/embla.css';

const colorMap: { [key: string]: string } = {
  'text-purple-600': 'from-purple-500 via-purple-500/50 to-transparent',
  'text-green-600': 'from-green-500 via-green-500/50 to-transparent',
  'text-orange-600': 'from-orange-500 via-orange-500/50 to-transparent',
  'text-blue-600': 'from-blue-500 via-blue-500/50 to-transparent',
  'text-teal-600': 'from-teal-500 via-teal-500/50 to-transparent',
};

interface Slide {
  icon: React.ReactElement; // Using any to avoid deep prop typing issues for now
  titulo: string;
  descripcion: string;
}

interface ExpertiseCarouselProps {
  slides: Slide[];
}

const ExpertiseCarousel: React.FC<ExpertiseCarouselProps> = ({ slides }) => {
  const options: EmblaOptionsType = { 
    loop: true, 
    align: 'center',
    duration: 55,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    emblaApi.on('pointerDown', () => setIsDragging(true));
    emblaApi.on('pointerUp', () => setIsDragging(false));
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((habilidad, index) => {
            const isSelected = selectedIndex === index;
            const iconColorClass = (habilidad.icon.props as { className?: string })?.className?.split(' ').find((c: string) => c.startsWith('text-')) || '';
            const gradientClass = colorMap[iconColorClass] || 'from-gray-500';

            return (
              <div 
                className={`embla__slide ${isSelected ? 'is-selected' : ''}`}
                key={index}
              >
                <div className="embla__slide__transformer">
                  <div className="relative h-full">
                    <div
                      className={`absolute -inset-2.5 rounded-3xl bg-gradient-to-b ${gradientClass} opacity-0 blur-xl transition-opacity duration-500`}
                      style={{ opacity: isSelected ? 0.4 : 0 }}
                    />
                    <div className="relative bg-gray-900 p-8 rounded-2xl h-full overflow-hidden">
                      <div className="mb-4">{habilidad.icon}</div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {habilidad.titulo}
                      </h4>
                      <p className="text-gray-300">
                        {habilidad.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="embla__button embla__button--prev" 
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        className="embla__button embla__button--next" 
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Drag indicator for mobile */}
      <div className="embla__drag-indicator">
        <Hand className="w-3 h-3" />
        <span>{isDragging ? 'Suelta para ver' : 'Arrastra para explorar'}</span>
      </div>
    </div>
  );
};

export default ExpertiseCarousel;
