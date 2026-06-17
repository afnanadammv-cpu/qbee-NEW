import { Button } from '@/components/ui/button';
import { ChefHat, Heart, Sparkles } from 'lucide-react';

const LIFESTYLE_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663760524040/c5QtYtBenegtepVkWopyYZ/cooking-lifestyle-bhFKh4U6QMv7BQWoVAj8Gq.webp';

export default function Lifestyle() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={LIFESTYLE_IMAGE}
                alt="Premium Cooking Experience"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs border-l-4 border-primary">
              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                Customer Testimonial
              </p>
              <p className="text-foreground mt-2 font-medium">
                "Qbee transformed my cooking. The precision and reliability are unmatched."
              </p>
              <p className="text-primary font-bold text-sm mt-3">— Chef Marcus</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                The Qbee Experience
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                More Than Just Cooking
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every Qbee stove is engineered to inspire culinary excellence. From the moment you light the burners to the final presentation, experience premium quality in every detail.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: ChefHat,
                  title: 'Professional Grade',
                  description: 'Built to the standards of professional kitchens worldwide',
                },
                {
                  icon: Heart,
                  title: 'Handcrafted Excellence',
                  description: 'Each stove is carefully assembled with premium materials',
                },
                {
                  icon: Sparkles,
                  title: 'Lifetime Support',
                  description: '24/7 customer support and comprehensive warranty coverage',
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-8 border-y border-border">
              <div>
                <p className="text-3xl font-bold text-primary">99.8%</p>
                <p className="text-sm text-muted-foreground mt-1">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10 Yrs</p>
                <p className="text-sm text-muted-foreground mt-1">Average Lifespan</p>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-primary hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 w-full sm:w-auto">
              Discover Your Perfect Stove
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
