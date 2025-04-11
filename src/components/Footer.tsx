
import { Heart } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gradient">DevSwiss</span>
            <p className="text-gray-400 mt-2">{t("footer.slogan")}</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end text-gray-400 mb-2">
              <span>{t("footer.copyright")}</span>
            </div>
            <div className="flex items-center justify-center md:justify-end text-gray-400">
              <span className="flex items-center">
                {t("footer.made")} <Heart size={14} className="text-red-500 mx-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
