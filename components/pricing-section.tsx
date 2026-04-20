"use client"
 
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Check, X, Phone, MessageCircle } from "lucide-react"
 
const KONNECT_WALLET_ID = process.env.NEXT_PUBLIC_KONNECT_WALLET_ID;
const KONNECT_API_KEY = process.env.NEXT_PUBLIC_KONNECT_API_KEY;
const KONNECT_API_URL =
  process.env.NEXT_PUBLIC_KONNECT_API_URL ||
  "https://api.konnect.network/api/v2/payments/init-payment";
 
// -------------------- PRICING PLANS --------------------
 
const pricingPlans = [
  {
    name: "خطة الطلبة",
    price: "50 د.ت",
    priceValue: 50000,
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
    priceValue: 100000,
    description:
      "للطلاب المتقدمين والمحترفين: دقة أعلى – محتوى أكثر – دعم أسرع.",
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
    priceValue: null,
    description:
      "حل شامل يمنح مؤسستك نسخة خاصة 100% من المنظومة مع هوية بصرية كاملة، حماية متقدمة، واستضافة داخلية.",
    features: [
      "Private Instance كاملة",
      "تثبيت جاهز كصورة Docker",
      "DNS خاص بالمؤسسة",
      "White Label كامل",
      "إدارة مستخدمين وصلاحيات",
      "تكامل API مع أنظمة المؤسسة",
      "دمج الشات بوت في المواقع أو التطبيقات",
      "التحكم الكامل في مزود الذكاء الاصطناعي",
      "حماية كاملة داخل خوادمكم",
    ],
    enterprise: true,
  },
]
 
export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [statusMsg, setStatusMsg] = useState(null)
 
  // Check payment status
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const status = params.get("payment_status")
 
    if (status === "success") {
      setStatusMsg({
        type: "success",
        text: "🎉 تم الدفع بنجاح! سيتم إرسال بيانات الدخول عبر SMS قريباً.",
      })
    } else if (status === "failed") {
      setStatusMsg({
        type: "error",
        text: "❌ فشلت عملية الدفع. يرجى المحاولة مجدداً.",
      })
    }
 
    window.history.replaceState({}, document.title, window.location.pathname)
  }, [])
 
  const handleSubscribeClick = (plan) => {
    if (plan.enterprise) {
      window.location.href = "tel:+21628888612"
      return
    }
    setSelectedPlan(plan)
    setShowModal(true)
  }
 
  // Konnect Payment
  const initiateKonnectPayment = async (e) => {
    e.preventDefault()
 
    if (!phoneNumber || phoneNumber.length < 8) {
      alert("يرجى إدخال رقم هاتف صحيح")
      return
    }
 
    if (!selectedPlan?.priceValue) return
 
    setLoading(true)
 
    try {
      const response = await fetch(KONNECT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": KONNECT_API_KEY,
        },
        body: JSON.stringify({
          receiverWalletId: KONNECT_WALLET_ID,
          token: "TND",
          amount: selectedPlan.priceValue,
          type: "immediate",
          acceptedPaymentMethods: ["wallet", "bank_card", "e-DINAR"],
          checkoutForm: true,
          phoneNumber: phoneNumber,
          successUrl: `${window.location.origin}${window.location.pathname}?payment_status=success`,
          failUrl: `${window.location.origin}${window.location.pathname}?payment_status=failed`,
        }),
      })
 
      const data = await response.json()
      if (data.payUrl) window.location.href = data.payUrl
    } catch (error) {
      alert("حدث خطأ غير متوقع.")
    }
 
    setLoading(false)
  }
 
  return (
    <section
      dir="rtl"
      className="py-16 px-4 bg-gradient-to-b from-red-700 to-red-900 min-h-screen text-white"
    >
 
      {/* PAYMENT STATUS ALERT */}
      <AnimatePresence>
        {statusMsg && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-xl text-white font-bold
            ${statusMsg.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            {statusMsg.text}
            <button onClick={() => setStatusMsg(null)}>
              <X className="w-4 h-4 ml-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Neuromarketing Header */}
<div className="text-center text-2xl md:text-3xl font-extrabold mb-12 leading-relaxed"> قوة القانون… بذكاء اصطناعي يفهمك، يساعدك، ويختصر عليك ساعات طويلة. <br /> لأن مستقبلك يستحق أفضل الأدوات وأسرع الحلول. <br /> لذلك وفرنا لك مرشد قانون. </div>
 
      {/* Pricing Grid */}
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
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                  الأكثر اختياراً
                </div>
              )}
 
              {/* Enterprise Badge */}
              {plan.enterprise && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
                  ENTERPRISE
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
 
      {/* Payment Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full text-black shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              إتمام الدفع – {selectedPlan.name}
            </h3>
 
            <form onSubmit={initiateKonnectPayment}>
              <input
                type="text"
                placeholder="رقم الهاتف"
                className="w-full p-3 border rounded-xl mb-4 focus:ring focus:border-red-500"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
 
              <Button
                disabled={loading}
                className="w-full bg-red-600 text-white font-bold py-3 rounded-xl"
              >
                {loading ? "جاري المعالجة..." : "متابعة الدفع"}
              </Button>
 
              <button
                type="button"
                className="w-full mt-4 text-red-600 font-bold"
                onClick={() => setShowModal(false)}
              >
                إلغاء
              </button>
            </form>
          </div>
        </div>
      )}
 
      {/* Floating Call Button */}
      <a
        href="tel:+21628888612"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-xl font-bold flex items-center gap-2 z-50 transition"
      >
        <Phone /> نسخة مؤسسية؟ اتصل الآن
      </a>
 
      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/21628888612?text=مرحباً، أريد نسخة مؤسسية من النظام"
        target="_blank"
        className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-xl z-50 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
 
    </section>
   <motion.div
              className="mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div dir="rtl" className="space-y-6">

       
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

              
                <div className="relative rounded-2xl border border-red-500/40 bg-red-500/10 px-6 py-6 text-center overflow-hidden">
                  
          
                  <div className="absolute inset-0 bg-red-500/20 blur-2xl opacity-40 pointer-events-none" />

                  <div className="relative space-y-3">
                    <p className="text-lg font-bold text-white">
                      تأكيد الدفع (Quitance de paiement)
                    </p>

                    <p className="text-sm text-gray-200 leading-relaxed">
                      بعد إتمام الدفع، الرجاء إرسال <span className="text-white font-semibold"> وصل / إثبات الدفع </span>
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
  )
}
