import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-xl">🦷</span>
              </div>
              <span className="font-display text-xl font-semibold">Batumi Dental</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              ვთავაზობთ თანამედროვე სტანდარტების შესაბამის პროფესიულ სტომატოლოგიურ მომსახურებას ბათუმში. 
              ჩვენი პრიორიტეტი თქვენი ღიმილია.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@dental.ge"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">საწყისი გვერდის ბმულები</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  ჩვენ შესახებ
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  სერვისები
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  გამოხმაურება
                </a>
              </li>
              <li>
                <a href="#booking" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  შეხვედრის დაჯავშნა
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  კონტაქტი
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">კონტაქტი</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  თბელ-აბუსერიძის 3, ბათუმი
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+995558700080" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +995 558 70 00 80
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  სამუშაო საათები: ორშ-შაბ 09:00 - 19:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} ყველა უფლება დაცულია. პროფესიონალური სტომატოლოგიური მომსახურება ბათუმში.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
