
import { Button } from "@/components/ui/button";
import { Download, Apple, Check } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-gradient-text leading-tight mt-16">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex flex-col items-center">
            <Button size="lg" className="bg-dev-accent hover:bg-dev-accent/90 text-white px-8 py-6 h-auto">
              <Download size={20} className="mr-2" />
              {t("hero.download")}
            </Button>
            <Badge variant="outline" className="mt-2 bg-green-500/10 text-green-400 border-green-500/30">
              <Check size={12} className="mr-1" /> {t("hero.free")}
            </Badge>
          </div>
          <div className="text-gray-400 flex items-center">
            <Apple size={20} className="mr-1" />
            <span>{t("hero.macos-only")}</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          <div className="glass-card rounded-2xl overflow-hidden animate-float p-1 shadow-xl">
            <img 
              src="https://placehold.co/1200x675/0A1929/FFFFFF?text=DevSwiss+Screenshot" 
              alt="DevSwiss Interface" 
              className="rounded-xl border border-white/10 dark:border-white/10 light:border-black/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
