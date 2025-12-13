import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
