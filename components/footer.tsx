import { LeLoLogo } from "./lelo-logo"

export function Footer() {
  return (
    <footer className="bg-red-950 border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <LeLoLogo className="mb-4" />
            <p className="text-white/70 mb-4 max-w-md">
              منصة مرشد قانون تساعد طلبة الحقوق على الوصول إلى أكثر من 5000 وثيقة قانونية تونسية، وتسهيل المراجعة والتحضير للامتحانات.
            </p>
            <p className="text-sm text-white/50 italic">
              "ابدأ رحلتك في إتقان القانون التونسي مع مرشد قانون"
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">المنصة</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                   الاشتراك
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  الأسئلة 
                </a>
              </li>
              <li>
                <a href="https://wa.me/+21628888612?text=مرحباً، أريد التواصل معكم" className="hover:text-white transition-colors">
                  تواصل 
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">عن المنصة</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  الوظائف
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2026 مرشد قانون. جميع الحقوق محفوظة. </p>
          <p>&copy; Powered by AIBC </p>

        </div>
      </div>
    </footer>
  )
}
