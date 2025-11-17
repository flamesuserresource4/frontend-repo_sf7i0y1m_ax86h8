import { motion } from 'framer-motion'
import { Megaphone, Palette, Video, MousePointerClick, LineChart } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'حملات إعلانية',
    desc: 'استراتيجيات ذكية لإدارة الحملات عبر المنصات المختلفة وتحقيق أفضل عائد.'
  },
  {
    icon: Palette,
    title: 'هوية بصرية',
    desc: 'تصميم شعارات وهوية كاملة تعكس شخصية علامتك بشكل مميز لا يُنسى.'
  },
  {
    icon: Video,
    title: 'موشن جرافيك',
    desc: 'تحريك بصري احترافي يروي قصتك بطريقة جذابة ومؤثرة.'
  },
  {
    icon: MousePointerClick,
    title: 'إعلانات ممولة',
    desc: 'إدارة وإعداد الإعلانات على فيسبوك، انستغرام، سناب، تيك توك وجوجل.'
  },
  {
    icon: LineChart,
    title: 'تحليل وتحسين',
    desc: 'متابعة دقيقة للأداء وتحسين مستمر للوصول إلى أفضل النتائج.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">خدماتنا</h2>
          <p className="mt-3 text-slate-600">حلول متكاملة تُصمم خصيصًا لتلبية أهدافك</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl p-6 shadow hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 opacity-60" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 text-white">
                      <s.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{s.title}</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400"
                >
                  ↗
                </motion.div>
              </div>
              <p className="mt-4 text-slate-600 leading-7">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-400/30 via-violet-400/30 to-sky-400/30 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
