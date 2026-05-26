import { useState } from "react"
import { LeLoLogo } from "./lelo-logo"

export function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <footer 
      dir="rtl"
      className="bg-red-950 border-t border-white/10 py-12 px-4 relative"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Partie gauche avec logo et description */}
          <div className="col-span-1 md:col-span-2">
            <LeLoLogo className="mb-4" />
            <p className="text-white/70 mb-4 max-w-md">
              منصة مرشد قانون تساعد طلبة الحقوق على الوصول إلى أكثر من 5000 وثيقة قانونية تونسية، وتسهيل المراجعة والتحضير للامتحانات.
            </p>
            <p className="text-sm text-white/50 italic">
              "ابدأ رحلتك في إتقان القانون التونسي مع مرشد قانون"
            </p>
          </div>

          {/* قسم المنصة */}
          <div>
            <h3 className="font-semibold text-white mb-4" dir="rtl">المنصة</h3>
            <ul className="space-y-2 text-white/70" dir="rtl">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors" dir="rtl">الاشتراك</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors" dir="rtl">المميزات</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors" dir="rtl">الأسئلة</a>
              </li>
              <li>
                <a href="https://wa.me/+21628888612?text=مرحباً، أريد التواصل معكم" className="hover:text-white transition-colors" dir="rtl">تواصل</a>
              </li>
            </ul>
          </div>

          {/* قسم عن المنصة */}
          <div>
            <h3 className="font-semibold text-white mb-4" dir="rtl">عن المنصة</h3>
            <ul className="space-y-2 text-white/70" dir="rtl">
              <li>
                <button 
                  onClick={toggleModal}
                  className="hover:text-white transition-colors underline decoration-white/30" 
                  dir="ltr"
                >
                  Mentions légales
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" dir="rtl">من نحن</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" dir="rtl">المدونة</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors" dir="rtl">اتصل بنا</a>
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر وPowered by */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p dir="rtl">&copy; 2026 مرشد قانون. جميع الحقوق محفوظة.</p>
          <p dir="rtl">&copy; Powered by AIBC</p>
        </div>
      </div>

      {/* Legal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" dir="ltr">
          <div className="bg-white text-slate-900 w-full max-w-2xl max-h-[80vh] rounded-lg shadow-xl flex flex-col">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50 rounded-t-lg">
              <h2 className="text-xl font-bold">Mentions Légales & CGV</h2>
              <button 
                onClick={toggleModal}
                className="text-slate-500 hover:text-black text-2xl px-2"
              >
                &times;
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-sm leading-relaxed whitespace-pre-line">
              <h3 className="font-bold text-lg mb-2">Mentions légales</h3>
              <p>
                <strong>Éditeur du site</strong><br/>
                AIBC SARL<br/>
                Activités informatiques<br/>
                Identifiant fiscal : 1876014/F/M/000<br/>
                Siège social : Pépinière de l’ISTC, Borj Cedria 8020, Tunisie<br/><br/>
                Le site et les applications édités par AIBC proposent des services logiciels et applications SaaS accessibles en ligne.<br/><br/>
                <strong>Contact</strong><br/>
                Pour toute question ou demande d’assistance :<br/>
                Email : contact@aibc.tn
              </p>
              
              <hr className="my-6 border-slate-200" />
              
              <h3 className="font-bold text-lg mb-2">Conditions Générales de Vente (CGV)</h3>
              <p><strong>Article 1 – Objet</strong><br/>Les présentes Conditions Générales de Vente régissent l’utilisation des services numériques proposés par AIBC SARL, notamment ses applications web et SaaS, y compris l’application « Morched ».</p>
              
              <p className="mt-4"><strong>Article 2 – Description des services</strong><br/>AIBC SARL développe et exploite des applications et services numériques accessibles en ligne...</p>
              
              <p className="mt-4"><strong>Article 3 – Modalités de paiement</strong><br/>Les paiements effectués sur les plateformes de AIBC SARL sont réalisés en ligne via la passerelle de paiement sécurisée <strong>Flouci</strong> et les services de <strong>Monétique Tunisie</strong>. AIBC SARL ne stocke aucune donnée bancaire.</p>
              
              <p className="mt-4"><strong>Article 4 – Livraison des services</strong><br/>Les services numériques sont accessibles immédiatement ou dans un délai raisonnable après validation du paiement.</p>
              
              <p className="mt-4"><strong>Article 5 – Comptes utilisateurs</strong><br/>Les utilisateurs sont responsables de la confidentialité de leurs identifiants.</p>
              
              <p className="mt-4"><strong>Article 6 – Politique d’annulation et de remboursement</strong><br/>Tout achat de service numérique est considéré comme ferme et définitif ; aucun remboursement ne sera effectué après activation.</p>
              
              <p className="mt-4"><strong>Article 7 – Responsabilité</strong><br/>AIBC SARL ne pourra être tenue responsable des interruptions temporaires liées à la maintenance.</p>
              
              <p className="mt-4"><strong>Article 8 – Données personnelles</strong><br/>Conformément à la réglementation tunisienne, les données sont protégées et limitées au strict nécessaire.</p>
              
              <p className="mt-4"><strong>Article 9 – Résolution des litiges</strong><br/>En cas de litige, les tribunaux tunisiens seront seuls compétents. Le droit applicable est le droit tunisien.</p>
              
              <hr className="my-6 border-slate-200" />
              
              <h3 className="font-bold text-lg mb-2">Politique de confidentialité</h3>
              <p>
                1. Données collectées : Email, infos techniques.<br/>
                2. Finalité : Amélioration des services et support.<br/>
                3. Conservation : Durée nécessaire aux obligations légales.<br/>
                4. Protection : Sécurisation via Flouci et Monétique Tunisie.<br/>
                5. Droits : Accès, correction et suppression via contact@aibc.tn.
              </p>
            </div>
            
            <div className="p-4 border-t bg-slate-50 rounded-b-lg text-right">
              <button 
                onClick={toggleModal}
                className="bg-red-900 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
