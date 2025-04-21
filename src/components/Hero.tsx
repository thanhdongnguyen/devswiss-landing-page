import { useLanguage } from "@/providers/LanguageProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Demo screenshots array for easier management
  const demoScreenshots = [
    {
      src: "/lovable-uploads/1.png",
      alt: "DevSwiss Interface - Home"
    },
    {
      src: "/lovable-uploads/2.png",
      alt: "DevSwiss Interface - Base 64 encode/decode"
    },
    {
      src: "/lovable-uploads/3.png",
      alt: "DevSwiss Interface - JWT Tools"
    },
    {
      src: "/lovable-uploads/4.png",
      alt: "DevSwiss Interface - Cron Tools"
    },
    {
      src: "/lovable-uploads/5.png",
      alt: "DevSwiss Interface - PGP Tools"
    },
    {
      src: "/lovable-uploads/6.png",
      alt: "DevSwiss Interface - Text Diff Tools"
    },
    {
      src: "/lovable-uploads/7.png",
      alt: "DevSwiss Interface - Image Tools"
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
    <div className="pt-24 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-gradient-text leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-6 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        
        {/* Product Hunt Badge */}
        <div className="flex justify-center items-center mb-6">
          <a 
            href="https://www.producthunt.com/posts/devswiss?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-devswiss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=956063&theme=light&t=1745256305635" 
              alt="DevSwiss - Offline toolkit for developers | Product Hunt" 
              width="250" 
              height="54" 
              className="w-[250px] h-[54px]"
            />
            <ExternalLink size={16} className="ml-2 text-muted-foreground" />
          </a>
        </div>
        
        <div 
          className="relative w-full max-w-4xl mx-auto mt-8"
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
              }}
              className="w-full"
            >
              <CarouselContent>
                {demoScreenshots.map((screenshot, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="p-1">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt} 
                        className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full h-[500px] object-contain"
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
