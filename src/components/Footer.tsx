
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-gradient">DevToolbox</span>
            <p className="text-gray-400 mt-2">Bộ công cụ không thể thiếu cho developer.</p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end text-gray-400 mb-2">
              <span>© 2025 DevToolbox</span>
            </div>
            <div className="flex items-center justify-center md:justify-end text-gray-400">
              <span className="flex items-center">
                Made with <Heart size={14} className="text-red-500 mx-1" /> by Developer, for Developers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
