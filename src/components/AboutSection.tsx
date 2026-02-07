import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Award, Heart, Clock } from "lucide-react"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Shield,
      title: "უსაფრთხო & სტერილური",
      description: "ჰოსპიტალური სტანდარტის სტერილიზაციის პროტოკოლები თქვენი სიმშვიდისთვის"
    },
    {
      icon: Award,
      title: "სერტიფიცირებული ექსპერტები",
      description: "საერთაშორისო დონეზე მომზადებული სტომატოლოგები მრავალწლიანი გამოცდილებით"
    },
    {
      icon: Heart,
      title: "პაციენტზე ორიენტირებული",
      description: "პერსონალიზებული მოვლა თქვენი საჭიროებებისთვის"
    },
    {
      icon: Clock,
      title: "მომსახურების მოქნილი საათები",
      description: "მოიცავს საღამოს შეხვედრებსაც"
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
              ჩვენი კლინიკის შესახებ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mt-3 mb-4 sm:mb-6">
              სადაც გამოცდილება შეხვდება <span className="text-gradient-primary">ზრუნვას</span>
            </h2>
            <p className="text-muted-foreground lg:text-xl text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              ჩვენი თანამედროვე სტომატოლოგიური კლინიკა ბათუმში აერთიანებს უახლეს ტექნოლოგიას თბილ, სტუმართმოყვარე გარემოში. გვჯერა, რომ მაღალი ხარისხის სტომატოლოგიური მომსახურება უნდა იყოს ხელმისაწვდომი, კომფორტული და მორგებული თითოეული პაციენტის საჭიროებებზე.
            </p>
            <p className="text-muted-foreground lg:text-xl text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              რუტინული შემოწმებებიდან რთულ პროცედურებამდე, ჩვენი გამოცდილი სპეციალისტების გუნდი მზადაა დაგეხმაროთ ჯანმრთელი და ლამაზი ღიმილის მიღებასა და შენარჩუნებაში.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-card rounded-xl shadow-card">
                <p className="font-display text-2xl sm:text-3xl text-accent font-bold">10+</p>
                <p className="text-muted-foreground text-xs sm:text-sm">წელი გამოცდილება</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-card rounded-xl shadow-card">
                <p className="font-display text-2xl sm:text-3xl text-accent font-bold">5000+</p>
                <p className="text-muted-foreground text-xs sm:text-sm">კმაყოფილი პაციენტი</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-card rounded-xl shadow-card">
                <p className="font-display text-2xl sm:text-3xl text-accent font-bold">15+</p>
                <p className="text-muted-foreground text-xs sm:text-sm">სპეციალისტი</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-4 sm:p-6 rounded-2xl shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-semibold font-display text-foreground text-sm sm:text-lg mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-display text-xs sm:text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
