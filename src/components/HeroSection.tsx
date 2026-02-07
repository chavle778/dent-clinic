import { motion } from "framer-motion";
import { Phone, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="მოდერნი სტომატოლოგიური კლინიკა"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */} 
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 5 ? "fill-accent text-accent" : "text-primary-foreground/30"}`}
                />
              ))}
            </div>
            <span className="text-primary-foreground font-semibold">4.9</span>
            <span className="text-primary-foreground/80 text-sm">• 341 მიმოხილვა</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl lg:leading-tight  text-primary-foreground leading-tight mb-6"
          >
            თქვენი იდეალური ღიმილი{" "}
            <span className="text-gradient-gold">იწყება აქ</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-xl"
          >
            პროფესიონალური სტომატოლოგიური მომსახურება ბათუმში, გამოცდილი ექიმების დახმარებით და უახლესი ტექნოლოგიებით.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#booking">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                <Calendar className="w-5 h-5" />
                ჩაეწერეთ ვიზიტზე
              </Button>
            </a>
            <a href="tel:+995558700080">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                დარეკვა
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className=" hidden gap-4 lg:flex flex-row flex-nowrap mt-4 border-t border-primary-foreground/20"
>
  <div className="flex items-center gap-3 md:gap-4 flex-shrink min-w-[100px] sm:min-w-[120px] md:min-w-0">
    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
      <span className="text-2xl">👨‍⚕️</span>
    </div>
    <div>
      <p className="text-primary-foreground font-semibold text-sm md:text-base">გამოცდილი ექიმები</p>
      <p className="text-primary-foreground/70 text-xs md:text-sm">სერტიფიცირებული სპეციალისტები</p>
    </div>
  </div>
  <div className="flex items-center gap-3 md:gap-4 flex-shrink min-w-[100px] sm:min-w-[120px] md:min-w-0">
    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
      <span className="text-2xl">🏥</span>
    </div>
    <div>
      <p className="text-primary-foreground font-semibold text-sm md:text-base">თანამედროვე აღჭურვილობა</p>
      <p className="text-primary-foreground/70 text-xs md:text-sm">ახალი ტექნოლოგიები</p>
    </div>
  </div>
  <div className="flex items-center gap-3 md:gap-4 flex-shrink min-w-[100px] sm:min-w-[120px] md:min-w-0">
    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
      <span className="text-2xl">💎</span>
    </div>
    <div>
      <p className="text-primary-foreground font-semibold text-sm md:text-base">პრემიუმ მომსახურება</p>
      <p className="text-primary-foreground/70 text-xs md:text-sm">პერსონალური მიდგომა</p>
    </div>
  </div>
</motion.div>


        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
