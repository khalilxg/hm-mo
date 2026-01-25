"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "ما هي منصة مرشد قانون؟",
    answer:
      "مرشد قانون هي منصة تعليمية مدعّمة بالذكاء الاصطناعي موجهة لطلبة الحقوق، تضم أكثر من 5000 وثيقة من القانون التونسي لمساعدتهم على الفهم، المراجعة، والتحضير للامتحانات.",
  },
  {
    question: "لمن هذه المنصة؟",
    answer:
      "المنصة موجهة لطلبة الحقوق في جميع المستويات الجامعية (الإجازة، الماجستير)، طلبة التكوين المهني، وكذلك المحامين والمهنيين في المجال القانوني.",
  },
  {
    question: "كيف تساعدني المنصة في المراجعة والامتحانات؟",
    answer:
      "توفر مرشد قانون شرحًا مبسّطًا للنصوص القانونية، إجابات ذكية عن أسئلتك، وتنظيمًا واضحًا للمجلات القانونية، مما يجعل الحفظ والفهم أسهل خاصة خلال فترة المراجعة.",
  },
  {
    question: "ما الذي يتضمن الاشتراك؟",
    answer:
      "الاشتراك يتيح لك الوصول إلى مكتبة تضم أكثر من 5000 وثيقة قانونية تونسية، بالإضافة إلى عدد محدد من الرسائل مع الذكاء الاصطناعي حسب الخطة المختارة.",
  },
  {
    question: "ما هي خطط الاشتراك المتوفرة؟",
    answer:
      "تتوفر خطة بـ50 د.ت تشمل 500 رسالة، وخطة بـ100 د.ت تشمل 1000 رسالة. كلتا الخطتين صالحتان لمدة 7 أشهر مع 5 أشهر مجانية.",
  },
  {
    question: "كيف يتم الدفع؟",
    answer:
      "يمكنك الدفع عبر D17 أو عن طريق تحويل بنكي. بعد الدفع، يجب إرسال وصل الدفع عبر واتساب أو البريد الإلكتروني لتأكيد الاشتراك.",
  },
  {
    question: "متى أتحصل على اسم المستخدم وكلمة المرور؟",
    answer:
      "بعد إرسال وصل الدفع والتأكد منه، يقوم فريق الإدارة بإرسال اسم المستخدم وكلمة المرور الخاصة بك في أقرب وقت.",
  },
  {
    question: "هل يمكنني استخدام المنصة من الهاتف أو الحاسوب؟",
    answer:
      "نعم، المنصة تعمل على جميع الأجهزة (هاتف، حاسوب، لوحي) ويمكنك استخدامها في أي وقت ومن أي مكان.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            الأسئلة الشائعة
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            كل ما تحتاج معرفته حول منصة مرشد قانون
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border/20 rounded-lg bg-card/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
