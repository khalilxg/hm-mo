"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Check, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    name: "خطة الطلبة",
    price: "50 د.ت",
    period: "",
    description: "مناسبة لطلبة الحقوق في جميع المستويات",
    features: [
      "مدة الاشتراك: 7 أشهر + 5 أشهر مجانية",
      "500 رسالة مع الذكاء الاصطناعي",
      "الوصول إلى أكثر من 5000 وثيقة قانونية تونسية",
      "مناسبة للمراجعة والامتحانات",
    ],
    popular: false,
  },
  {
    name: "الخطة المتقدمة",
    price: "100 د.ت",
    period: "",
    description: "الأفضل للطلبة المتقدمين والتكوين المهني",
    features: [
      "مدة الاشتراك: 7 أشهر + 5 أشهر مجانية",
      "1000 رسالة مع الذكاء الاصطناعي",
      "الوصول الكامل إلى جميع مجلات القانون التونسي",
      "دعم أفضل خلال فترات المراجعة",
    ],
    popular: true,
  },
  {
    name: "خطة المحامين",
    price: "حسب الطلب",
    period: "",
    description: "مخصصة للمحامين والمهنيين",
    features: [
      "وصول موسّع للمكتبة القانونية",
      "استخدام مكثف للذكاء الاصطناعي",
      "مناسبة للبحث القانوني المهني",
      "دعم خاص",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            خطط الاشتراك
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            اختر الخطة المناسبة لك وابدأ رحلتك في إتقان القانون التونسي بسهولة
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card border rounded-lg p-8 ${
                plan.popular ? "border-white/30 bg-white/5" : "border-border/20 bg-background/50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                    الأكثر اختيارًا
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

<a
  href={
    plan.name === "خطة المحامين"
      ? "mailto:contact@contact.contact?subject=استفسار%20خطة%20المحامين&body=مرحباً، أريد التواصل بخصوص خطة المحامين"
      : "mailto:contact@contact.contact?subject=اشتراك%20في%20منصة%20مرشد%20Loi&body=مرحباً، أريد الاشتراك الآن"
  }
>
  <Button
    className={`w-full ${
      plan.popular
        ? "bg-white text-black hover:bg-white/90"
        : "bg-transparent border border-white/20 text-white hover:bg-white/10"
    } group`}
    size="lg"
  >
    {plan.name === "خطة المحامين" ? "تواصل معنا" : "اشترك الآن"}
    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</a>

            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">
            الدفع عبر D17 أو تحويل بنكي • يتم إرسال بيانات الدخول بعد تأكيد الدفع
          </p>
        </motion.div>
      </div>
    </section>
  )
}
