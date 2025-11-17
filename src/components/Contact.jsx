import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold text-slate-900">ابدأ مشروعك معنا</h3>
              <p className="mt-3 text-slate-600">سنعود إليك خلال 24 ساعة.</p>
              <form className="mt-8 grid grid-cols-1 gap-4">
                <input type="text" placeholder="الاسم الكامل" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <input type="email" placeholder="البريد الالكتروني" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <input type="text" placeholder="اسم الشركة" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <textarea rows="4" placeholder="اكتب تفاصيل مشروعك" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-violet-500" />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-sky-600 px-6 py-3 text-white font-semibold shadow hover:shadow-lg transition"
                  type="button"
                  onClick={() => alert('تم الإرسال!')}
                >
                  ارسال الطلب
                </motion.button>
              </form>
            </div>
            <div className="relative bg-gradient-to-br from-violet-600 via-fuchsia-600 to-sky-500 p-10 text-white">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%),radial-gradient(circle_at_70%_30%,white,transparent_40%)]" />
              <div className="relative">
                <h4 className="text-xl font-bold">معلومات التواصل</h4>
                <ul className="mt-4 space-y-2 text-white/90">
                  <li>الهاتف: 966-555-555-555+</li>
                  <li>البريد: hello@animation.agency</li>
                  <li>الرياض - المملكة العربية السعودية</li>
                </ul>
                <p className="mt-6 text-sm text-white/80">متاحون من الأحد إلى الخميس، 9 صباحًا - 6 مساءً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
