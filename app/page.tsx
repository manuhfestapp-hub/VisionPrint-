import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickStart from '@/components/QuickStart';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FreeTools from '@/components/FreeTools';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuickStart />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FreeTools />
      <FinalCTA />
      <Footer />
    </main>
  );
}
