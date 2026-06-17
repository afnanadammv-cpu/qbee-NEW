import { Award, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">About Qbee</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Crafting Excellence Since 1999
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A legacy of innovation, quality, and passion for creating the finest cooking experiences
          </p>
        </div>

        {/* Timeline / Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              year: '1999',
              title: 'Founded',
              description: 'Qbee was born from a passion for premium cooking and engineering excellence',
            },
            {
              year: '2010',
              title: 'Global Expansion',
              description: 'Expanded to 50+ countries, bringing premium stoves to kitchens worldwide',
            },
            {
              year: '2024',
              title: 'Innovation Leader',
              description: 'Recognized as the industry leader in smart cooking technology and design',
            },
          ].map((milestone, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-xl bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              {/* Year Badge */}
              <div className="absolute -top-4 left-8 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">
                {milestone.year}
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>

              {/* Connector Line */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality First',
                description: 'Every component is tested to the highest standards for durability and performance',
              },
              {
                icon: Globe,
                title: 'Sustainable',
                description: 'Committed to eco-friendly manufacturing and reducing our carbon footprint',
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Constantly pushing boundaries to deliver cutting-edge cooking technology',
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '25+', label: 'Years of Excellence' },
            { number: '100K+', label: 'Happy Customers' },
            { number: '50+', label: 'Premium Models' },
            { number: '150+', label: 'Countries Served' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300">
              <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
