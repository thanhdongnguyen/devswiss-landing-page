
import { useLanguage } from "@/providers/LanguageProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Demo screenshots array for easier management
  const demoScreenshots = [
    {
      src: "/lovable-uploads/719d5f6f-5b3e-49e4-bacd-9fc8bfefb15e.png",
      alt: "DevSwiss Interface - Dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "DevSwiss Interface - Code Tools"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "DevSwiss Interface - Encoding Tools"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "DevSwiss Interface - Generator Tools"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "DevSwiss Interface - Development Environment"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "DevSwiss Interface - Circuit Tools"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "DevSwiss Interface - Remote Work"
    }
  ];
  
  // Auto-slide effect with hover pause
  useEffect(() => {
    const carousel = carouselRef.current;
    let interval: NodeJS.Timeout;
    
    const startAutoSlide = () => {
      interval = setInterval(() => {
        if (!isPaused && carousel) {
          const nextButton = carousel.querySelector('[data-carousel-next]') as HTMLButtonElement;
          if (nextButton) nextButton.click();
        }
      }, 2000); // Slide every 2 seconds
    };
    
    startAutoSlide();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-gradient-text leading-tight mt-16">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-12 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        
        <div 
          className="relative w-full max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          <div className="glass-card rounded-2xl overflow-hidden p-1 shadow-xl">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
                direction: "rtl" // Right to left direction
              }}
              className="w-full"
            >
              <CarouselContent>
                {demoScreenshots.map((screenshot, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt} 
                        className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full h-auto max-h-[450px] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="left-4 bg-background/70 hover:bg-background/90 border-white/10" data-carousel-prev />
              <CarouselNext className="right-4 bg-background/70 hover:bg-background/90 border-white/10" data-carousel-next />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
