import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "./particle-text-effect"
import { InfiniteSlider } from "./ui/infinite-slider"
import { ProgressiveBlur } from "./ui/progressive-blur"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["مرشد", "قانون", "تونس", "مرشد"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
<div className="flex flex-col items-center justify-center text-center px-4">
  {/* The Main Heading */}
  <h2 
    dir="rtl" 
    className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-4xl leading-relaxed"
  >
    مُرشد هو <span dir="ltr" className="text-gray-300">Chat-GPT</span> القانون التونسي المخصّص لطلبة الحقوق، ويضمّ جميع مجلات القانون التونسي ضمن قاعدة بياناته
  </h2>

  {/* The New Stats Style */}
  <div 
    dir="rtl"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
  >
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
    <p className="text-lg font-medium text-white">
      أكثر من <span className="text-red-400 font-bold text-xl">+9000</span> طالب ومستخدم في كامل تراب الجمهورية
    </p>
  </div>
</div>

          <div className="mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-sm text-white-400">لكافة جامعات القانون في تونس</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>

                    <div className="flex">
                      <img
                        className="mx-auto h-17 w-fit invert opacity-150 hover:opacity-150 transition-opacity"
                        src="./images/design-mode/2.svg"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-15 w-fit invert opacity-120 hover:opacity-120 transition-opacity"
                        src="./images/design-mode/3.svg"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-15 w-fit invert opacity-150 hover:opacity-150 transition-opacity"
                        src="./images/design-mode/4.svg"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-15 w-fit invert opacity-150 hover:opacity-150 transition-opacity"
                        src="./images/design-mode/5.svg"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-15 w-fit invert opacity-150 hover:opacity-150 transition-opacity"
                        src="./images/design-mode/6.svg"
                        height="28"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-15 w-fit invert opacity-150 hover:opacity-150 transition-opacity"
                        src="./images/design-mode/7.svg"
                        height="240"
                        width="auto"
                      />
                    </div>
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
