import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Stethoscope, Sun, Puzzle, AlignHorizontalDistributeCenter, Smile } from "lucide-react"

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Sparkles,
      title: "თეთრების წმენდა",
      description: "პროფესიონალური წმენდა ნადების და კარების მოსაშორებლად, თქვენი კბილების ჯანმრთელობისა და ბრწყინვალების დასანარჩუნებლად.",
      price: "დან $50"
    },
    {
      icon: Stethoscope,
      title: "კარების მკურნალობა",
      description: "ტკივილგამორიცხავი კარების შევსება უახლესი მასალებით და ტექნიკებით, შედეგის შესანარჩუნებლად.",
      price: "დან $80"
    },
    {
      icon: Sun,
      title: "თეთრყა",
      description: "პროფესიონალური კბილების გათეთრება, ერთი ვიზიტით ბრწყინვალე და თავდაჯერებული ღიმილისთვის.",
      price: "დან $150"
    },
    {
      icon: Puzzle,
      title: "სტომატოლოგიური იმპლანტები",
      description: "მუდმივი კბილების ჩანაცვლების გადაწყვეტილებები ბუნებრივი და მდგრადი იმპლანტებით.",
      price: "დან $800"
    },
    {
      icon: AlignHorizontalDistributeCenter,
      title: "ორთოდონტია",
      description: "ბრეკეტები და ალაინერები კბილების გასწორებისა და ნაფლეთების პრობლემების გამოსასწორებლად ყველა ასაკში.",
      price: "დან $1,500"
    },
    {
      icon: Smile,
      title: "ღიმილის დიზაინი",
      description: "სრული ღიმილის მაკოავერი, მრავალმხრივი მკურნალობის კომბინაციით, თქვენი იდეალური ღიმილისთვის.",
      price: "პერსონალური ფასის გამოთვლა"
    }
  ]

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            ჩვენი სერვისები
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
            ყოვლისმომცველი{" "}
            <span className="text-gradient-primary">სტომატოლოგიური მოვლა</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            პროფილაქტიკური მომსახურებიდან კოსმეტიკურ პროცედურებამდე, ჩვენ გთავაზობთ სრულ ასორტიმენტს სტომატოლოგიური სერვისების, თქვენი პირის ჯანმრთელობის ყველა საჭიროებისთვის.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-accent font-semibold">{service.price}</span>
                <a
                  href="#booking"
                  className="text-primary text-sm font-medium hover:underline underline-offset-4"
                >
                  დაჯავშნა →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
