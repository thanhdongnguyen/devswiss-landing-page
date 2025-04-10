
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dev-blue/80 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">DevToolbox</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-dev-accent hover:bg-white/5">
            Tính năng
          </Button>
          <Button variant="ghost" className="text-white hover:text-dev-accent hover:bg-white/5">
            Công cụ
          </Button>
          <Button className="bg-dev-accent hover:bg-dev-accent/90" size="sm">
            <Download size={16} className="mr-2" />
            Tải xuống
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
