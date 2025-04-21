import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Navbar = () => {
  const { t } = useLanguage();
  const [changelogOpen, setChangelogOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            alt="DevSwiss Logo" 
            width={36} 
            height={36} 
            className="rounded-lg object-cover shadow-md" 
            src="/lovable-uploads/719d5f6f-5b3e-49e4-bacd-9fc8bfefb15e.png" 
          />
          <span className="text-2xl font-bold text-gradient">DevSwiss</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hover:text-dev-accent hover:bg-background/5" onClick={() => setChangelogOpen(true)}>
            {t("nav.changelog")}
          </Button>
          <ThemeLanguageSwitcher />
          <Button className="bg-dev-accent hover:bg-dev-accent/90" size="sm">
            <Download size={16} className="mr-2" />
            {t("nav.download")}
          </Button>
        </div>
      </div>

      <Dialog open={changelogOpen} onOpenChange={setChangelogOpen}>
        <DialogContent className="glass-card max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Change Logs</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                Version 1.0.0 <span className="ml-2 text-xs bg-dev-accent/20 text-dev-accent px-2 py-0.5 rounded-full">Latest</span>
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Initial release with base functionality</li>
                <li>Added Base64 Encode/Decode tool</li>
                <li>Added QR Code Generator</li>
                <li>Added UUID/ULID Generator</li>
                <li>Added JSON Formatter</li>
                <li>Added Hash Generator</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Version 0.9.0 (Beta)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Beta release for testing</li>
                <li>Improved UI/UX design</li>
                <li>Fixed performance issues</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>;
};
export default Navbar;
