import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Clock, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: MapPin,
      title: "მისამართი",
      content: "თბელ-აბუსერიძის 3, ბათუმი",
      link: "https://maps.google.com/?q=3+Tbel-Abuseridze+Street+Batumi"
    },
    {
      icon: Phone,
      title: "ტელეფონი",
      content: "+995 558 70 00 80",
      link: "tel:+995558700080"
    },
    {
      icon: Clock,
      title: "სამუშაო საათები",
      content: "ორშ-შაბ: 09:00 - 19:00",
      link: null
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "მოინახულეთ ჩვენ Facebook-ზე",
      link: "https://facebook.com"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            დაგვიკავშირდით
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
            მოინახულეთ ჩვენი{" "}
            <span className="text-gradient-primary">კლინიკა</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ჩვენ ვართ ბათუმის ცენტრში. მოინახულეთ ან დაგვირეკეთ!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:+995558700080" className="flex-1">
                <Button variant="default" size="lg" className="w-full">
                  <Phone className="w-5 h-5" />
                  დარეკეთ
                </Button>
              </a>
              <a href="#booking" className="flex-1">
                <Button variant="gold" size="lg" className="w-full">
                  შეხვედრის დაჯავშნა
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.1234567890!2d41.6397!3d41.6447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067857c1b3e1bcf%3A0x1234567890abcdef!2sTbel-Abuseridze%20St%2C%20Batumi!5e0!3m2!1sen!2sge!4v1234567890123!5m2!1sen!2sge"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="კლინიკის მისამართი"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
