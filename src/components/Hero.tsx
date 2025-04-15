
import { useLanguage } from "@/providers/LanguageProvider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-gradient-text leading-tight mt-16">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-12 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        
        <div className="relative w-full max-w-4xl mx-auto">
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
                {/* Screenshot 1 */}
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="/lovable-uploads/719d5f6f-5b3e-49e4-bacd-9fc8bfefb15e.png" 
                      alt="DevSwiss Interface - Dashboard" 
                      className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full h-auto"
                    />
                  </div>
                </CarouselItem>
                
                {/* Screenshot 2 */}
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="DevSwiss Interface - Code Tools" 
                      className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full h-auto"
                    />
                  </div>
                </CarouselItem>
                
                {/* Screenshot 3 */}
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="DevSwiss Interface - Encoding Tools" 
                      className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full h-auto"
                    />
                  </div>
                </CarouselItem>
                
                {/* Screenshot 4 */}
                <CarouselItem>
                  <div className="p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                      alt="DevSwiss Interface - Generator Tools" 
                      className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full h-auto"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <CarouselPrevious className="left-4 bg-background/70 hover:bg-background/90 border-white/10" />
              <CarouselNext className="right-4 bg-background/70 hover:bg-background/90 border-white/10" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
