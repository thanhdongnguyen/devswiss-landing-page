
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/Download";
import Footer from "@/components/Footer";
import { useTheme } from "@/providers/ThemeProvider";
import { useEffect } from "react";

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
