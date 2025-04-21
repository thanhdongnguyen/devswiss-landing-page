
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Navbar = () => {
  const { t } = useLanguage();
  const [changelogOpen, setChangelogOpen] = useState(false);
  
  const downloadLink = "https://github.com/thanhdongnguyen/devswiss-landing-page/releases/download/v1.0.0/DevSwiss-1.0.0.dmg";
  const productHuntLink = "https://www.producthunt.com/posts/devswiss";

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
          <Button 
            variant="ghost" 
            className="hover:text-dev-accent hover:bg-background/5" 
            onClick={() => setChangelogOpen(true)}
          >
            {t("nav.changelog")}
          </Button>
          <Button 
            variant="ghost" 
            className="hover:text-dev-accent hover:bg-background/5" 
            onClick={() => window.open(productHuntLink, '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            Product Hunt
          </Button>
          <ThemeLanguageSwitcher />
          <Button 
            className="bg-dev-accent hover:bg-dev-accent/90" 
            size="sm"
            onClick={() => window.open(downloadLink, '_blank')}
          >
            <Download size={16} className="mr-2" />
            {t("nav.download")}
          </Button>
        </div>
      </div>

      <Dialog open={changelogOpen} onOpenChange={setChangelogOpen}>
        <DialogContent className="glass-card max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Change Logs</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                Version 1.0.0 <span className="ml-2 text-xs bg-dev-accent/20 text-dev-accent px-2 py-0.5 rounded-full">Latest</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>Base64:</strong> Encode/Decode Base64 data. Auto-detects content (JSON, JWT, etc.) on decode.</li>
                  <li><strong>JWT:</strong> Decode, verify (demo), and create JSON Web Tokens (HS*, RS*, ES*, PS* algorithms).</li>
                  <li><strong>JSON:</strong> Format (pretty-print), minify, and validate JSON data.</li>
                  <li><strong>Regex Tester:</strong> Test and debug regular expressions.</li>
                  <li><strong>URL Parser:</strong> Parse and analyze URL components (protocol, host, path, query, hash).</li>
                  <li><strong>URI Component:</strong> Encode/Decode URI components safely.</li>
                  <li><strong>UUID Generator:</strong> Generate v4 UUIDs.</li>
                  <li><strong>ULID Generator:</strong> Generate ULIDs.</li>
                  <li><strong>RSA Key Generator:</strong> Generate RSA Public/Private key pairs.</li>
                  <li><strong>AES Encrypt/Decrypt:</strong> Encrypt and decrypt data using AES (various modes/paddings).</li>
                  <li><strong>SHA Hasher:</strong> Generate SHA-1, SHA-256, SHA-512 hashes.</li>
                  <li><strong>MD5 Hasher:</strong> Generate MD5 hashes.</li>
                  <li><strong>HMAC SHA Generator:</strong> Create HMAC signatures using SHA algorithms.</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>SQL Formatter:</strong> Format SQL queries for better readability.</li>
                  <li><strong>Cron Parser:</strong> Parse Cron expressions into human-readable schedules.</li>
                  <li><strong>QR Code Generator:</strong> Create QR codes from text or URLs.</li>
                  <li><strong>JSON Compare:</strong> Compare two JSON objects and highlight differences.</li>
                  <li><strong>HTML Preview:</strong> Live preview of HTML, CSS, and JavaScript code.</li>
                  <li><strong>PGP Tool:</strong> Generate PGP keys, encrypt/decrypt PGP messages.</li>
                  <li><strong>Timestamp Converter:</strong> Convert between Unix timestamps and readable dates.</li>
                  <li><strong>Port Checker:</strong> Check locally open ports.</li>
                  <li><strong>Text Diff:</strong> Compare two blocks of text and show differences.</li>
                  <li><strong>Markdown Preview:</strong> Write Markdown with a real-time preview pane.</li>
                  <li><strong>Curl to Code:</strong> Convert `curl` commands to code snippets (JS, Python, Go, Java, Rust).</li>
                  <li><strong>Certificate Decoder:</strong> Decode and view details of X.509 certificates.</li>
                  <li><strong>Snippet Manager:</strong> Save, organize, and search code snippets with syntax highlighting.</li>
                  <li><strong>Image Converter:</strong> Convert between image formats (PNG, JPG, WebP) and compress images.</li>
                </ul>
              </div>
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
