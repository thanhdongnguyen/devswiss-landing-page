
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";

const Navbar = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">DevToolbox</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hover:text-dev-accent hover:bg-background/5">
            {t("nav.features")}
          </Button>
          <Button variant="ghost" className="hover:text-dev-accent hover:bg-background/5">
            {t("nav.tools")}
          </Button>
          <ThemeLanguageSwitcher />
          <Button className="bg-dev-accent hover:bg-dev-accent/90" size="sm">
            <Download size={16} className="mr-2" />
            {t("nav.download")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
