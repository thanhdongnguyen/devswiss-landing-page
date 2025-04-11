import { createContext, useContext, useState } from "react";

export type Language = "en" | "vi";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navbar
    "nav.changelog": "Change logs",
    "nav.tools": "Tools",
    "nav.download": "Download",
    
    // Hero
    "hero.title": "DevSwiss For Developer",
    "hero.subtitle": "Supercharge your development workflow with powerful offline tools designed to maximize productivity and efficiency.",
    "hero.download": "Download for macOS",
    "hero.macos-only": "macOS Only",
    "hero.free": "100% Free",
    
    // Features
    "features.title": "All Tools You Need",
    "features.subtitle": "A toolbox with essential utilities for developers, works completely offline on macOS.",
    "features.base64": "Base64 Encode/Decode",
    "features.base64.desc": "Quickly encode and decode Base64 for your strings and files.",
    "features.qrcode": "QR Code Generator",
    "features.qrcode.desc": "Create QR codes for URLs, text, business cards and other data types.",
    "features.uuid": "UUID/ULID Generator",
    "features.uuid.desc": "Generate unique UUIDs and ULIDs for your applications and databases.",
    "features.json": "JSON Formatter",
    "features.json.desc": "Format and validate JSON with customizable options.",
    "features.snippets": "Code Snippets",
    "features.snippets.desc": "Library of code snippets for various programming languages.",
    "features.hash": "Hash Generator",
    "features.hash.desc": "Generate MD5, SHA-1, SHA-256 and other hashes.",
    "features.more.title": "And Many More Productivity Tools",
    "features.more.desc": "DevSwiss includes dozens of additional tools to boost your productivity. New tools are regularly added based on developer needs.",
    "features.more.button": "Explore All Tools",
    "features.why": "Why Choose DevSwiss?",
    "features.offline": "Works Offline",
    "features.offline.desc": "Work anytime, anywhere without internet connection.",
    "features.time": "Save Time",
    "features.time.desc": "All necessary tools in a single application.",
    "features.security": "High Security",
    "features.security.desc": "Your data is always processed locally, never sent anywhere.",
    
    // Download
    "download.title": "Download DevSwiss Now",
    "download.subtitle": "Experience the complete toolset for developers running on macOS. Download and use it today!",
    "download.button": "Download v1.0.0",
    "download.source": "Source Code",
    "download.macos": "macOS 10.15+",
    "download.size": "Size: 15MB",
    
    // Footer
    "footer.slogan": "Essential toolbox for developers.",
    "footer.copyright": "© 2025 DevSwiss",
    "footer.made": "Made with love by Developer, for Developers"
  },
  vi: {
    // Navbar
    "nav.changelog": "Lịch sử cập nhật",
    "nav.tools": "Công cụ",
    "nav.download": "Tải xuống",
    
    // Hero
    "hero.title": "DevSwiss For Developer",
    "hero.subtitle": "Tăng tốc quy trình phát triển của bạn với các công cụ offline mạnh mẽ được thiết kế để tối đa hóa năng suất và hiệu quả làm việc.",
    "hero.download": "Tải xuống cho macOS",
    "hero.macos-only": "Chỉ hỗ trợ macOS",
    "hero.free": "Hoàn Toàn Miễn Phí",
    
    // Features
    "features.title": "Tất Cả Công Cụ Bạn Cần",
    "features.subtitle": "Bộ công cụ tích hợp các tiện ích cần thiết cho developer, hoạt động hoàn toàn offline trên macOS.",
    "features.base64": "Base64 Encode/Decode",
    "features.base64.desc": "Mã hóa và giải mã Base64 nhanh chóng cho chu���i và tập tin của bạn.",
    "features.qrcode": "QR Code Generator",
    "features.qrcode.desc": "Tạo mã QR cho URLs, văn bản, danh thiếp và nhiều loại dữ liệu khác.",
    "features.uuid": "UUID/ULID Generator",
    "features.uuid.desc": "Tạo UUID và ULID độc nhất cho ứng dụng và cơ sở dữ liệu của bạn.",
    "features.json": "JSON Formatter",
    "features.json.desc": "Định dạng và xác thực JSON với các tùy chọn tùy chỉnh.",
    "features.snippets": "Code Snippets",
    "features.snippets.desc": "Thư viện code snippets cho nhiều ngôn ngữ lập trình khác nhau.",
    "features.hash": "Hash Generator",
    "features.hash.desc": "Tạo các hash MD5, SHA-1, SHA-256 và nhiều loại khác.",
    "features.more.title": "Và Nhiều Công Cụ Tăng Năng Suất Khác",
    "features.more.desc": "DevSwiss bao gồm hàng chục công cụ bổ sung để tăng năng suất của bạn. Các công cụ mới được thêm vào thường xuyên dựa trên nhu cầu của developer.",
    "features.more.button": "Khám Phá Tất Cả Công Cụ",
    "features.why": "Tại Sao Chọn DevSwiss?",
    "features.offline": "Hoạt Động Offline",
    "features.offline.desc": "Làm việc mọi lúc, mọi nơi không cần kết nối internet.",
    "features.time": "Tiết Kiệm Thời Gian",
    "features.time.desc": "Tất cả công cụ cần thiết trong một ứng dụng duy nhất.",
    "features.security": "Bảo Mật Cao",
    "features.security.desc": "Dữ liệu của bạn luôn được xử lý cục bộ, không gửi đi đâu cả.",
    
    // Download
    "download.title": "Tải DevSwiss Ngay",
    "download.subtitle": "Trải nghiệm bộ công cụ hoàn chỉnh cho developer chạy trên macOS. Tải về và sử dụng ngay hôm nay!",
    "download.button": "Tải xuống v1.0.0",
    "download.source": "Source Code",
    "download.macos": "macOS 10.15+",
    "download.size": "Dung lượng: 15MB",
    
    // Footer
    "footer.slogan": "Bộ công cụ không thể thiếu cho developer.",
    "footer.copyright": "© 2025 DevSwiss",
    "footer.made": "Made with love by Developer, for Developers"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
