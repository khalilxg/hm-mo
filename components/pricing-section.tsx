"use client"
 
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Check, X, Phone, MessageCircle } from "lucide-react"
 
// ---------------------------------------------------
// KONNECT API CONFIG
// ---------------------------------------------------
const KONNECT_WALLET_ID = process.env.NEXT_PUBLIC_KONNECT_WALLET_ID
const KONNECT_API_KEY = process.env.NEXT_PUBLIC_KONNECT_API_KEY
const KONNECT_API_URL =
  process.env.NEXT_PUBLIC_KONNECT_API_URL ||
  "https://api.konnect.network/api/v2/payments/init-payment"
 
// ---------------------------------------------------
// PRICING PLANS
// ---------------------------------------------------
const pricingPlans = [
  {
    name: "خطة الطلبة",
    price: "50 د.ت",
    priceValue: 50000,
    description: "الخطة المثالية لتفوق سريع… مصممة خصيصًا لطلبة الحقوق.",
    features: [
      "اشتراك لمدة 7 أشهر + 5 أشهر مجانية",
      "500 رسالة مع الذكاء الاصطناعي",
      "أكثر من 5000 وثيقة قانونية جاهزة",
    ],
  },
 
  {
    name: "الخطة المتقدمة",
    price: "100 د.ت",
    priceValue: 100000,
    description: "للطلاب المتقدمين… ولمن يريد الوصول الكامل دون حدود.",
    popular: true,
    features: [
      "اشتراك لمدة 7 أشهر + 5 أشهر مجانية",
      "1000 رسالة مع الذكاء الاصطناعي",
      "الوصول الكامل إلى جميع مجلات القانون",
    ],
  },
 
  {
    name: "الخطة المؤسسية – نسخة خاصة",
    price: "حلول مخصّصة",
    priceValue: null,
    enterprise: true,
    description:
      "حل مؤسسي كامل يضمن لمؤسستك نسخة خاصة 100% من النظام وفق الهوية البصرية الخاصة بكم.",
    features: [
      "نسخة Private Instance كاملة",
      "تثبيت عبر Docker",
      "DNS خاص بالمؤسسة",
      "White Label",
      "إدارة المستخدمين (صلاحيات – أدوار)",
      "تكامل API كامل",
      "دمج الشات بوت في أي موقع / تطبيق",
      "التحكم الكامل في نموذج الذكاء الاصطناعي",
      "حماية البيانات داخل خوادمكم",
    ],
  },
]
 
export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [statusMsg, setStatusMsg] = useState(null)
 
  // ---------------------------------------------------
  // CHECK PAYMENT STATUS
  // ---------------------------------------------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const status = params.get("payment_status")
 
    if (status === "success") {
      setStatusMsg({
        type: "success",
        text: "🎉 تم الدفع بنجاح! سيتم إرسال بيانات الدخول عبر SMS.",
      })
    } else if (status === "failed") {
      setStatusMsg({
        type: "error",
        text: "❌ فشلت عملية الدفع، يرجى المحاولة مجددًا.",
      })
    }
 
    window.history.replaceState({}, document.title, window.location.pathname)
  }, [])
 
  // ---------------------------------------------------
  // HANDLE SUBSCRIBE CLICK
  // ---------------------------------------------------
  const handleSubscribeClick = plan => {
    if (plan.enterprise) {
      window.location.href = "tel:+21628888612"
      return
    }
 
    setSelectedPlan(plan)
    setShowModal(true)
  }
 
  // ---------------------------------------------------
  // KONNECT PAYMENT INIT
  // ---------------------------------------------------
  const initiateKonnectPayment = async e => {
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
      id="pricing"
      dir="rtl"
      className="py-20 px-4 bg-gradient-to-b from-red-900 to-red-950 relative text-white"
    >
      {/* ---------------------------------------------------
      PAYMENT STATUS ALERT
  --------------------------------------------------- */}
  <AnimatePresence>
    {statusMsg && (
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className={`fixed top-4 right-1/2 translate-x-1/2 px-6 py-4 rounded-xl shadow-lg font-bold z-50 flex items-center gap-3
          ${statusMsg.type === "success" ? "bg-green-600" : "bg-red-600"}`}
      >
        {statusMsg.text}
        <X
          onClick={() => setStatusMsg(null)}
          className="w-5 h-5 cursor-pointer"
        />
      </motion.div>
    )}
  </AnimatePresence>

  {/* ---------------------------------------------------
  TITLE + NEUROMARKETING MESSAGE
  --------------------------------------------------- */}
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      ذكاء قانوني يجعلك في الصدارة
    </h2>
    <p className="text-lg opacity-90">
      استثمر اليوم في وقتك… واجعل مستواك يرتفع تلقائيًا مع أقوى نظام ذكاء
      اصطناعي قانوني في تونس.
    </p>
  </div>

  {/* ---------------------------------------------------
  PLANS GRID
  --------------------------------------------------- */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
    {pricingPlans.map((plan, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.04 }}
        className={`rounded-2xl p-8 border backdrop-blur-xl transition shadow-lg
          ${
            plan.enterprise
              ? "border-red-300 bg-white/10 shadow-red-500/40"
              : "border-white/20 bg-white/10"
          }`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-red-700 px-3 py-1 rounded-full text-sm font-bold shadow">
            الأكثر اختيارًا
          </div>
        )}

        {plan.enterprise && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow">
            Enterprise
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-4xl font-extrabold text-red-200 mb-4">
          {plan.price}
        </p>
        <p className="opacity-90 mb-6">{plan.description}</p>

        <ul className="space-y-3 mb-6">
          {plan.features.map((f, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-300 ml-1" /> {f}
            </li>
          ))}
        </ul>

        <Button
          className="w-full bg-white text-red-700 font-bold py-3 rounded-xl hover:bg-red-100 transition"
          onClick={() => handleSubscribeClick(plan)}
        >
          {plan.enterprise ? "اتصل بنا الآن" : "اشترك الآن"}
        </Button>
      </motion.div>
    ))}
  </div>

  {/* ---------------------------------------------------
  PAYMENT MODAL
  --------------------------------------------------- */}
  {showModal && selectedPlan && (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black p-6 rounded-2xl max-w-md w-full shadow-xl"
      >
        <h3 className="text-xl font-bold mb-4">
          إتمام الدفع – {selectedPlan.name}
        </h3>

        <form onSubmit={initiateKonnectPayment}>
          <input
            type="text"
            placeholder="رقم الهاتف"
            className="w-full p-3 border rounded-lg mb-4"
            onChange={e => setPhoneNumber(e.target.value)}
          />

          <Button
            disabled={loading}
            className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700"
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
      </motion.div>
    </div>
  )}

  {/* ---------------------------------------------------
  FLOATING CTA BUTTONS
  --------------------------------------------------- */}
  <a
    href="tel:+21628888612"
    className="fixed bottom-5 left-5 bg-white text-red-700 p-4 rounded-full shadow-xl hover:bg-red-100 transition"
  >
    <Phone className="w-6 h-6" />
  </a>

  <a
    href="https://wa.me/21628888612"
    className="fixed bottom-20 left-5 bg-white text-red-700 p-4 rounded-full shadow-xl hover:bg-red-100 transition"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
</section>
)

}
