import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Lifestyle from '@/components/Lifestyle';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Lifestyle />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
