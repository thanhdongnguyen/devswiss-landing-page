
import { 
  Code, Database, QrCode, KeyRound, Codepen, Zap, 
  Wifi, Clock, Shield, PlusCircle
} from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const FeatureCard = ({ icon, titleKey, descriptionKey }: FeatureCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-dev-accent/30">
      <div className="text-dev-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
      <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{t(descriptionKey)}</p>
    </div>
  );
};

const Features = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 px-4 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            {t("features.title")}
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-700">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Code size={32} />}
            titleKey="features.base64"
            descriptionKey="features.base64.desc"
          />
          <FeatureCard
            icon={<QrCode size={32} />}
            titleKey="features.qrcode"
            descriptionKey="features.qrcode.desc"
          />
          <FeatureCard
            icon={<KeyRound size={32} />}
            titleKey="features.uuid"
            descriptionKey="features.uuid.desc"
          />
          <FeatureCard
            icon={<Database size={32} />}
            titleKey="features.json"
            descriptionKey="features.json.desc"
          />
          <FeatureCard
            icon={<Codepen size={32} />}
            titleKey="features.snippets"
            descriptionKey="features.snippets.desc"
          />
          <FeatureCard
            icon={<Zap size={32} />}
            titleKey="features.hash"
            descriptionKey="features.hash.desc"
          />
        </div>
        
        <div className="mt-12 text-center">
          <div className="glass-card rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <PlusCircle size={32} className="text-dev-accent mr-3" />
              <h3 className="text-xl font-semibold">{t("features.more.title")}</h3>
            </div>
            <p className="text-gray-300 mb-6">{t("features.more.desc")}</p>
            <Button variant="outline" className="border-dev-accent/50 text-dev-accent hover:bg-dev-accent/10">
              {t("features.more.button")}
            </Button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            {t("features.why")}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="bg-dev-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi size={28} className="text-dev-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("features.offline")}</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{t("features.offline.desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-dev-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} className="text-dev-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("features.time")}</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{t("features.time.desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-dev-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={28} className="text-dev-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("features.security")}</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">{t("features.security.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
