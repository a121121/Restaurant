import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Divider from '@/components/Divider';
import ScrollingNewsBar from '@/components/ScrollingNewsBar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ScrollingNewsBar
        message="Valentine's Day Sale Now On! - Buy 1 Large Pizza Get 1 Small Free"
        speed={25}
      />
      <About />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </main>
  );
}