import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Location from '@/components/Location';
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <Location />
    </main>
  );
}