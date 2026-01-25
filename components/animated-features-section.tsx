"use client"
import type React from "react"
import { motion } from "framer-motion"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"
import { Scale, Zap, ShieldCheck, BrainCircuit, AlertTriangle } from "lucide-react"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
  icon?: React.ReactNode
  className?: string
}

const BentoCard: React.FC<BentoCardProps> = ({ title, value, subtitle, colors, delay, icon, className }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10 p-5 md:p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white">
            {icon}
          </div>
          <div
            dir="rtl"
            className="text-[10px] md:text-xs font-bold text-white/50 tracking-widest"
          >
            مرشد قانون
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xs md:text-sm text-red-100/80 mb-1 font-medium">{title}</h3>
          <p className="text-xl md:text-3xl font-black text-white leading-tight">{value}</p>
          {subtitle && (
            <p className="text-[11px] md:text-sm text-red-50/70 mt-2 leading-relaxed hidden sm:block">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedFeaturesSection() {
  return (
    <section
      id="features"
      dir="rtl"
      className="py-20 px-4 bg-red-950 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-800 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <motion.span 
            className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-4 inline-block"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          >
            لماذا مرشد قانون؟
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          >
            أذكى من مجرد دردشة
          </motion.h2>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          
          {/* Main Large Card */}
          <BentoCard
            className="col-span-2 row-span-1 md:row-span-2 bg-red-600"
            title="الموسوعة الوطنية"
            value="+5000 وثيقة تونسية"
            subtitle="نصوص قانونية، فقه قضاء، ومجلات محينة لحظة بلحظة وفقاً للرائد الرسمي. تحتوي مرشد قانون على جميع الوثائق من 1980 حتى أكتوبر 2025 ويتم تحديثها عند صدور أي قانون جديد."
            icon={<Scale size={20} />}
            colors={["#cc0000", "#7f1d1d"]}
            delay={0.1}
          />

          {/* Specialization vs Generality Card (ChatGPT Comparison) */}
          <motion.div 
            className="col-span-2 bg-zinc-900 border border-white/10 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          >
             <div className="absolute top-0 right-0 p-8 opacity-10 flex gap-2">
                <BrainCircuit size={80} />
             </div>
             <h3 className="text-red-500 font-bold mb-2 flex items-center gap-2">
               <Zap size={16} />
               <span>
                 مرشد قانون
                 <span dir="ltr" className="mx-1">vs</span>
                 <span dir="ltr">ChatGPT</span>
               </span>
             </h3>
             <p className="text-white text-sm md:text-base font-bold leading-relaxed">
               <span dir="ltr">ChatGPT</span> قد يهلوس بمعلومات عامة، لكن 
               <span className="text-red-500"> مرشد قانون </span>
               مبرمج حصرياً على نصوص القانون التونسي فقط.
             </p>
             <div className="mt-4 flex gap-4 text-[10px] md:text-xs">
                <span className="flex items-center gap-1 text-green-400"><ShieldCheck size={12}/> دقة قانونية 100%</span>
                <span className="flex items-center gap-1 text-red-400"><AlertTriangle size={12}/> لا للهلوة القانونية</span>
             </div>
          </motion.div>

          {/* Speed Card */}
          <BentoCard
            className="col-span-1"
            title="الاستجابة"
            value="فوري"
            icon={<Zap size={18} />}
            colors={["#450a0a", "#991b1b"]}
            delay={0.3}
          />

          {/* Accuracy Card */}
          <BentoCard
            className="col-span-1"
            title="الموثوقية"
            value="دقيق"
            icon={<ShieldCheck size={18} />}
            colors={["#171717", "#262626"]}
            delay={0.4}
          />

          {/* Full Width Bottom Card */}
          <div className="col-span-2 md:col-span-4 bg-gradient-to-r from-red-600 to-red-900 p-6 rounded-3xl flex items-center justify-between border border-white/10 group">
            <div>
               <h4 className="text-white font-black text-lg md:text-2xl">
                 تحديثات <span dir="ltr">1980–2025</span>
               </h4>
               <p className="text-red-100 text-xs md:text-sm">
                 يتم تحديث القاعدة المعرفية آلياً مع كل صدور قانون جديد لضمان وصول أحدث المعلومات القانونية.
               </p>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl group-hover:scale-110 transition-transform">
               <BrainCircuit className="text-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
