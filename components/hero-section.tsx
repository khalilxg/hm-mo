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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-balance">
             موسوعة مرشد قانون لطلبة الحقوق  <span className="text-gray-300"> تضم جميع مجلات القانون التونسي</span>
          </h2>

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
