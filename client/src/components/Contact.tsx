import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Get in Touch</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Ready to Transform Your Kitchen?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contact our team to find the perfect Qbee stove for your needs or schedule a showroom visit.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (800) 555-QBEE',
                  href: 'tel:+18005557233',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'hello@qbee.com',
                  href: 'mailto:hello@qbee.com',
                },
                {
                  icon: MapPin,
                  label: 'Headquarters',
                  value: '123 Premium Lane, Culinary City, CC 12345',
                  href: '#',
                },
              ].map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={idx}
                    href={contact.href}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold">{contact.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all duration-300 text-foreground hover:text-primary font-bold text-sm"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Thank you! We'll be in touch soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
