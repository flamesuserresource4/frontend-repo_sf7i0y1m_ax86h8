import { motion } from 'framer-motion'

const testimonials = [
  { name: 'مجموعة الراشد', quote: 'عملٌ متقن ونتائج ملموسة. فريق انيميشن قدم نقلة نوعية لحملاتنا.' },
  { name: 'مطاعم البستان', quote: 'الهوية البصرية والموشن كانتا مبهرتين. التفاعل تضاعف بشكل كبير.' },
  { name: 'متجر نِماء', quote: 'فريق محترف ومرن. أوصِي بهم لكل من يبحث عن تأثير حقيقي.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">آراء العملاء</h2>
          <p className="mt-3 text-slate-600">ثقة تُبنى على جودة التنفيذ</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl p-6 shadow"
            >
              <p className="text-slate-700 leading-7">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {t.name}</footer>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-tr from-fuchsia-400/30 via-violet-400/30 to-sky-400/30 blur-2xl" />
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
