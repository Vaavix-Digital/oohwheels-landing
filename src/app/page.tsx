import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFDF6] text-[#12261A]">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
