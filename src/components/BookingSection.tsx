import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Check, Clock, User, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "@/hooks/use-toast"

type ServiceType = "teeth_cleaning" | "cavities_treatment" | "whitening" | "dental_implants" | "orthodontics" | "smile_design"

const BookingSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    service: "" as ServiceType | "",
    notes: ""
  })

  const services = [
    { value: "teeth_cleaning", label: "კბილების წმენდა" },
    { value: "cavities_treatment", label: "კარების მკურნალობა" },
    { value: "whitening", label: "კბილების გათეთრება" },
    { value: "dental_implants", label: "სტომატოლოგიური იმპლანტები" },
    { value: "orthodontics", label: "ორთოდონტია" },
    { value: "smile_design", label: "ღიმილის დიზაინი" }
  ]

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.fullName || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast({
        title: "გთხოვთ შეავსოთ ყველა აუცილებელი ველი",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      const { error } = await supabase.from("appointments").insert({
        full_name: formData.fullName,
        phone: formData.phone,
        preferred_date: formData.date,
        preferred_time: formData.time,
        service_type: formData.service as ServiceType,
        notes: formData.notes || null
      })

      if (error) throw error

      setIsSuccess(true)
      setFormData({
        fullName: "",
        phone: "",
        date: "",
        time: "",
        service: "",
        notes: ""
      })
    } catch (error) {
      console.error("Error submitting appointment:", error)
      toast({
        title: "შეტყობინების გაგზავნის შეცდომა",
        description: "გთხოვთ სცადოთ ისევ ან დაგვირეკოთ პირდაპირ.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <section id="booking" className="py-24" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card rounded-3xl p-12 shadow-card"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              შეხვედრა მოთხოვნილია!
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              ✅ თქვენი შეხვედრის მოთხოვნა გაგზავნილია! მალე დაგიკავშირდებით დასადასტურებლად.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline" size="lg">
              სხვა შეხვედრის დაჯავშნა
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              შეხვედრის დაგეგმვა
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-6">
              დაჯავშნეთ თქვენი{" "}
              <span className="text-gradient-primary">შეხვედრა</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              შეავსეთ ქვემოთ მოცემული ფორმა და ჩვენ დაგიკავშირდებით შეხვედრის დასადასტურებლად.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  სრული სახელი *
                </label>
                <Input
                  type="text"
                  placeholder="სახელი გვარი..."
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  ტელეფონის ნომერი *
                </label>
                <Input
                  type="tel"
                  placeholder="+995 555 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  სასურველი თარიღი *
                </label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="h-12"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  სასურველი დრო *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">დროის არჩევა</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  სერვისის ტიპი *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceType })}
                  className="flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">სერვისის არჩევა</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  დამატებითი ინფორმაცია (არასავალდებულო)
                </label>
                <Textarea
                  placeholder="სპეციალური მოთხოვნები ან შენიშვნები..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={isSubmitting}
                className="w-full md:w-auto min-w-[250px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    გაგზავნა...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    შეხვედრის დაჯავშნა
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
