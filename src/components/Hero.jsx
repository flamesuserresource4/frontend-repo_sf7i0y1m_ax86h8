import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/40 blur-3xl" />
        <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-violet-400/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[80%] rounded-[50%] bg-gradient-to-t from-sky-300/30 to-transparent blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-right">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
            >
              وكالة دعاية وتسويق وإعلان
              <span className="block mt-2 bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">انيميشن</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-slate-600 text-lg leading-8"
            >
              نصمم هويات بصرية متقنة ونُنشئ حملات إعلانية مُبدعة مع تحريك بصري احترافي
              يعكس مستوى التصميم ويُضاعف من تأثير العلامة التجارية.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center justify-end gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-sky-600 px-6 py-3 text-white font-semibold shadow hover:shadow-lg transition">ابدأ مشروعك</a>
              <a href="#showcase" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition">شاهد اعمالنا</a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-white to-slate-50 border border-white shadow-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.2),transparent_40%)]" />
                <motion.div
                  className="absolute inset-0"
                  initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                  animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                >
                  <div className="grid grid-cols-3 gap-2 p-6">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="aspect-square rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow-sm"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-5xl">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 blur opacity-30" />
          <div className="relative rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 text-center divide-x divide-y divide-white/60">
              {[
                { label: 'سنوات خبرة', value: '10+' },
                { label: 'مشاريع مُنجزة', value: '250+' },
                { label: 'عملاء سعداء', value: '120+' },
                { label: 'جوائز تصميم', value: '18' },
              ].map((s, i) => (
                <div key={i} className="px-4 py-6">
                  <div className="text-2xl font-extrabold text-slate-800">{s.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
