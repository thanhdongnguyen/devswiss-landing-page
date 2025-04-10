
import { 
  Code, Database, QrCode, KeyRound, Codepen, Zap, 
  Wifi, Clock, Shield 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-dev-accent/30">
      <div className="text-dev-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="py-20 px-4 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-dev-blue to-transparent"></div>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Tất Cả Công Cụ Bạn Cần
          </h2>
          <p className="text-lg text-gray-300">
            Bộ công cụ tích hợp các tiện ích cần thiết cho developer, 
            hoạt động hoàn toàn offline trên macOS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Code size={32} />}
            title="Base64 Encode/Decode"
            description="Mã hóa và giải mã Base64 nhanh chóng cho chuỗi và tập tin của bạn."
          />
          <FeatureCard
            icon={<QrCode size={32} />}
            title="QR Code Generator"
            description="Tạo mã QR cho URLs, văn bản, danh thiếp và nhiều loại dữ liệu khác."
          />
          <FeatureCard
            icon={<KeyRound size={32} />}
            title="UUID/ULID Generator"
            description="Tạo UUID và ULID độc nhất cho ứng dụng và cơ sở dữ liệu của bạn."
          />
          <FeatureCard
            icon={<Database size={32} />}
            title="JSON Formatter"
            description="Định dạng và xác thực JSON với các tùy chọn tùy chỉnh."
          />
          <FeatureCard
            icon={<Codepen size={32} />}
            title="Code Snippets"
            description="Thư viện code snippets cho nhiều ngôn ngữ lập trình khác nhau."
          />
          <FeatureCard
            icon={<Zap size={32} />}
            title="Hash Generator"
            description="Tạo các hash MD5, SHA-1, SHA-256 và nhiều loại khác."
          />
        </div>
        
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Tại Sao Chọn DevToolbox?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="bg-dev-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi size={28} className="text-dev-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hoạt Động Offline</h3>
              <p className="text-gray-300">Làm việc mọi lúc, mọi nơi không cần kết nối internet.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-dev-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} className="text-dev-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tiết Kiệm Thời Gian</h3>
              <p className="text-gray-300">Tất cả công cụ cần thiết trong một ứng dụng duy nhất.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-dev-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-dev-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bảo Mật Cao</h3>
              <p className="text-gray-300">Dữ liệu của bạn luôn được xử lý cục bộ, không gửi đi đâu cả.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
