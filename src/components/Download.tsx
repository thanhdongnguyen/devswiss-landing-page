
import { Button } from "@/components/ui/button";
import { Download, Github, Apple } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const DownloadSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-10 sm:p-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            {t("download.title")}
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-700 mb-8 max-w-2xl mx-auto">
            {t("download.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-dev-accent hover:bg-dev-accent/90 text-white px-8 py-6 h-auto">
              <Download className="mr-2" size={20} />
              {t("download.button")}
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 dark:border-white/20 light:border-black/20 text-foreground hover:bg-background/5 px-8 py-6 h-auto">
              <Github className="mr-2" size={20} />
              {t("download.source")}
            </Button>
          </div>
          
          <div className="flex items-center justify-center text-gray-400 gap-4">
            <div className="flex items-center">
              <Apple className="mr-1" size={16} />
              <span>{t("download.macos")}</span>
            </div>
            <span>•</span>
            <span>{t("download.size")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
