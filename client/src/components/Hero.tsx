import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663760524040/c5QtYtBenegtepVkWopyYZ/hero-stove-kitchen-LGSBvE72i3iAPSQ2vQrUsr.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Red Accent Bar */}
      <div className="absolute left-0 top-1/3 w-2 h-48 bg-gradient-to-b from-primary to-transparent rounded-r-full" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Cook with <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
              Experience premium cooking technology that brings warmth and excellence to every kitchen. Where heat meets innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 group"
            >
              Explore Our Range
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100K+</p>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-gray-300 text-sm">Premium Models</p>
            </div>
          </div>
        </div>

        {/* Right side decorative element */}
        <div className="hidden lg:flex justify-end">
          <div className="relative w-full h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-sm font-medium">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
