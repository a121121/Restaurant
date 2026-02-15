import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Location from '@/components/Location';
import Divider from '@/components/Divider';
import ScrollingNewsBar from '@/components/ScrollingNewsBar';
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ScrollingNewsBar
        message="Valentine's Day Sale Now On! - Buy 1 Large Pizza Get 1 Small Free"
        speed={25}
      />
      <Location />
      <Divider />
    </main>
  );
}