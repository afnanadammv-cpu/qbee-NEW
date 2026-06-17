import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Flame, Zap, Wind } from 'lucide-react';

const PRODUCT_1 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663760524040/c5QtYtBenegtepVkWopyYZ/product-showcase-1-JgemB9rKXM34oMArkTJ4U5.webp';
const PRODUCT_2 = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663760524040/c5QtYtBenegtepVkWopyYZ/product-showcase-2-RafAj8nwwysJBheznmxHSX.webp';

const products = [
  {
    id: 1,
    name: 'Professional Series',
    subtitle: 'For the Serious Chef',
    description: 'Our flagship collection featuring dual ovens, precision temperature control, and premium materials.',
    image: PRODUCT_1,
    features: ['Dual Ovens', 'Digital Controls', 'Premium Steel'],
    price: '$4,999',
    badge: 'Most Popular',
  },
  {
    id: 2,
    name: 'Luxury Elite',
    subtitle: 'The Ultimate Experience',
    description: 'Handcrafted excellence with advanced features and stunning aesthetics for premium kitchens.',
    image: PRODUCT_2,
    features: ['6 Burners', 'Smart Controls', 'Warranty'],
    price: '$6,499',
    badge: 'Premium',
  },
];

export default function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Our Collection</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Premium Stoves for Every Kitchen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From professional chefs to home cooking enthusiasts, we have the perfect stove for your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                index === 0 ? 'lg:translate-y-8' : ''
              }`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-muted/50 z-0" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-6 right-6 z-20">
                  <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Content Container */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Image Section */}
                <div className="mb-8 overflow-hidden rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">
                    {product.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-border">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-sm font-semibold text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting at</p>
                      <p className="text-3xl font-bold text-primary">{product.price}</p>
                    </div>
                    <Button className="bg-primary hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Flame,
              title: 'Superior Heat',
              description: 'Precision temperature control for perfect cooking every time',
            },
            {
              icon: Zap,
              title: 'Energy Efficient',
              description: 'Advanced technology reduces energy consumption by 40%',
            },
            {
              icon: Wind,
              title: 'Smart Ventilation',
              description: 'Automatic ventilation system for optimal kitchen air quality',
            },
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
