const LOGO_URL = '/manus-storage/WhatsAppImage2026-06-16at13.32.50_eeccecc8.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src={LOGO_URL} 
                alt="Qbee" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">Qbee</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium cooking technology that brings warmth and excellence to every kitchen.
            </p>
            <p className="text-primary font-semibold text-sm">Always The Best</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Professional Series</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Luxury Elite</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compact Range</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex gap-6 text-gray-300 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Qbee. All rights reserved. Always The Best.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>Crafted with passion for premium cooking experiences worldwide</p>
        </div>
      </div>
    </footer>
  );
}
