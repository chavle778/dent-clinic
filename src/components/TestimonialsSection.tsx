import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "მარია კ.",
      location: "ბათუმი",
      text: "შედეგმა ჩემი მოლოდინები გადააჭარბა ❤️ ძალიან პროფესიონალი ექიმები. 100% რეკომენდირებული!",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "ალექს ტ.",
      location: "თბილისი",
      text: "სერვისი შესანიშნავი, პერსონალი მეგობრული და ფასები კარგი. მთელი ოჯახი ახლა აქ ჩამოდის!",
      rating: 5,
      avatar: "👨"
    },
    {
      name: "ელენა ს.",
      location: "ბათუმი",
      text: "კბილების იმპლანტის გაკეთება მეშინოდა, მაგრამ გუნდი ძალიან კომფორტულად შემაყვარა თავი. შედეგი საოცარია!",
      rating: 5,
      avatar: "👩‍🦰"
    },
    {
      name: "დავიდ მ.",
      location: "ქუთაისი",
      text: "საუკეთესო სტომატოლოგიური კლინიკა საქართველოში! თანამედროვე აღჭურვილობა, სუფთა გარემო და ზრუნვადი პერსონალი. ძლიერ რეკომენდირებულია!",
      rating: 5,
      avatar: "👨‍🦱"
    },
    {
      name: "ნინო ბ.",
      location: "ბათუმი",
      text: "კბილების გათეთრების შედეგი საოცარი იყო. ყველა ახლა ჩემი ღიმილით კმაყოფილებას გამოხატავს! მადლობა!",
      rating: 5,
      avatar: "👩‍🦳"
    },
    {
      name: "გიორგი ლ.",
      location: "ბათუმი",
      text: "პროფესიონალური, პუნქტუალური და უკუტკივილი! ორთოდონტიული მკურნალობა მთლიანად შეცვალა ჩემი თავდაჯერებულობა.",
      rating: 5,
      avatar: "🧑"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            პაციენტების შეფასებები
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
            რას ამბობენ ჩვენი{" "}
            <span className="text-gradient-primary">პაციენტები</span>
          </h2>
          
          {/* Overall Rating */}
          <div className="inline-flex flex-col items-center gap-3 bg-card rounded-2xl px-8 py-6 shadow-card">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-4xl text-foreground font-bold">4.9</span>
              <span className="text-muted-foreground text-lg">/ 5</span>
            </div>
            <p className="text-muted-foreground">341 შეფასების საფუძველზე</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
