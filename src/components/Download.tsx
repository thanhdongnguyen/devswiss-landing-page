
import { Button } from "@/components/ui/button";
import { Download, Github, Apple } from "lucide-react";

const DownloadSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-10 sm:p-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Tải DevToolbox Ngay
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Trải nghiệm bộ công cụ hoàn chỉnh cho developer chạy trên macOS. 
            Tải về và sử dụng ngay hôm nay!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-dev-accent hover:bg-dev-accent/90 text-white px-8 py-6 h-auto">
              <Download className="mr-2" size={20} />
              Tải xuống v1.0.0
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 h-auto">
              <Github className="mr-2" size={20} />
              Source Code
            </Button>
          </div>
          
          <div className="flex items-center justify-center text-gray-400 gap-4">
            <div className="flex items-center">
              <Apple className="mr-1" size={16} />
              <span>macOS 10.15+</span>
            </div>
            <span>•</span>
            <span>Dung lượng: 15MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
