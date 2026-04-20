"use client"
 
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Check, MessageCircle } from "lucide-react"
import { Phone } from "lucide-react"

const pricingPlans = [
  {
    name: "خطة الطلبة",
    price: "50 د.ت",
    description: "الخيار الأمثل للطلبة الباحثين عن السرعة، الدقة، وتوفير الوقت.",
    features: [
      "مدة الاشتراك: 7 أشهر + 5 أشهر مجانية",
      "500 رسالة مع الذكاء الاصطناعي",
      "أكثر من 5000 وثيقة قانونية",
    ],
  },
  {
    name: "الخطة المتقدمة",
    price: "100 د.ت",
    description: "للطلاب المتقدمين والمحترفين: دقة أعلى – محتوى أكثر – دعم أسرع.",
    features: [
      "مدة الاشتراك: 7 أشهر + 5 أشهر مجانية",
      "1000 رسالة مع الذكاء الاصطناعي",
      "الوصول الكامل إلى جميع مجلات القانون",
    ],
    popular: true,
  },
  {
    name: "الخطة المؤسسية – نسخة خاصة للهيئات والشركات",
    price: "حلول مخصّصة",
    description: "حل شامل يمنح مؤسستك نسخة خاصة 100% من المنظومة.",
    features: [
      "Private Instance كاملة",
      "تثبيت جاهز كصورة Docker",
      "DNS خاص بالمؤسسة",
      "White Label كامل",
      "إدارة مستخدمين وصلاحيات",
      "تكامل API",
      "دمج الشات بوت",
      "التحكم الكامل في مزود الذكاء الاصطناعي",
      "حماية كاملة داخل خوادمكم",
    ],
    enterprise: true,
  },
]
 
export function PricingSection() {
  const showPaymentInfo = true
  const [glow, setGlow] = useState(false)
 
  const paymentSectionRef = useRef(null)
 
  // Smooth scroll + highlight animation
  const handleSubscribeClick = (plan) => {
    if (plan.enterprise) {
      window.location.href = "tel:+21628888612"
      return
    }
 
    setShowPaymentInfo(true)
 
    // Wait for block to render
    setTimeout(() => {
      paymentSectionRef.current?.scrollIntoView({ behavior: "smooth" })
 
      // Glow animation
      setGlow(true)
      setTimeout(() => setGlow(false), 1800)
    }, 200)
  }
 
  return (
    <section
      dir="rtl"
      id="pricing"
      className="py-16 px-4 bg-gradient-to-b from-red-700 to-red-900 min-h-screen text-white relative"
    >
      {/* Floating WhatsApp Button */}
      <a
        href="tel:+21628888612"
        className="fixed bottom-6 right-6 bg-white hover:bg-red-100 text-red-600 rounded-full shadow-xl p-4 z-50 flex items-center justify-center transition transform hover:scale-110"
      >
        <Phone className="w-7 h-7" />
      </a>
 
      <div className="text-center text-2xl md:text-3xl font-extrabold mb-12 leading-relaxed">
        قوة القانون… بذكاء اصطناعي يفهمك، يساعدك، ويختصر عليك ساعات طويلة.
        <br /> لأن مستقبلك يستحق أفضل الأدوات وأسرع الحلول.
        <br /> لذلك وفرنا لك مرشد قانون.
      </div>
 
      {/* PRICING GRID */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                relative rounded-2xl p-8 shadow-xl border border-white/20
                backdrop-blur-xl bg-white/10 hover:bg-white/20 transition
                ${plan.popular ? "shadow-red-300/40 border-white" : ""}
                ${plan.enterprise ? "shadow-yellow-300/40 border-yellow-400" : ""}
              `}
              whileHover={{ scale: 1.04 }}
            >
              {plan.popular && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  الأكثر اختياراً
                </div>
              )}
 
              <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-4">{plan.price}</div>
 
              <p className="opacity-80 mb-6 leading-relaxed">{plan.description}</p>
 
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 opacity-90">
                    <Check className="w-5 h-5 text-white" /> {f}
                  </li>
                ))}
              </ul>
 
              <Button
                className="w-full bg-white text-red-700 font-extrabold py-3 rounded-xl hover:bg-red-100"
                onClick={() => handleSubscribeClick(plan)}
              >
                {plan.enterprise ? "اتصل الآن" : "اشترك الآن"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
 
      {/* PAYMENT INFO SECTION */}
      <AnimatePresence>
        {showPaymentInfo && (
             <motion.div
               ref={paymentSectionRef}
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               className={`
                 mt-16 max-w-3xl mx-auto transition 
                 ${glow ? "ring-4 ring-red-400 ring-opacity-60" : ""}
               `}
             >
            <div dir="rtl" className="space-y-6">
 
              {/* D17 + RIB */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
                <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-6 text-center">
                  <p className="text-lg font-semibold text-white mb-2">
                    الدفع عبر D17
                  </p>
                  <p
                    dir="ltr"
                    className="text-3xl font-mono font-bold text-white tracking-wider"
                  >
                    28888612
                  </p>
                </div>
 
                <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-6 text-center">
                  <p className="text-lg font-semibold text-white mb-2">
                    التحويل البنكي (RIB)
                  </p>
                  <p
                    dir="ltr"
                    className="text-sm sm:text-base font-mono font-bold text-white break-all"
                  >
                    25 072 000 000 1310382 37
                  </p>
                </div>
              </div>
 
              {/* PAYMENT CONFIRMATION */}
              <div className="relative rounded-2xl border border-red-500/40 bg-red-500/10 px-6 py-6 text-center overflow-hidden">
 
                <div className="absolute inset-0 bg-red-500/20 blur-2xl opacity-40 pointer-events-none" />
 
                <div className="relative space-y-3">
                  <p className="text-lg font-bold text-white">
                    تأكيد الدفع (Quitance de paiement)
                  </p>
 
                  <p className="text-sm text-gray-200 leading-relaxed">
                    بعد إتمام الدفع، الرجاء إرسال
                    <span className="text-white font-semibold"> وصل / إثبات الدفع </span>
                    عبر واتساب أو البريد الإلكتروني.
                  </p>
 
                  <div className="space-y-1 text-sm">
                    <p dir="ltr" className="text-white font-medium">
                      📱 WhatsApp: +216 28 888 612
                    </p>
                    <p dir="ltr" className="text-white font-medium">
                      ✉️ Email: contact@aibc.tn
                    </p>
                  </div>
 
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                    بعد التحقق من عملية الدفع، سيقوم فريق الإدارة بإرسال
                    <span className="text-white font-medium"> اسم المستخدم </span>
                    ورابط منصة
                    <span className="text-white font-medium"> مرشد قانون </span>
                    عبر رسالة SMS.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
