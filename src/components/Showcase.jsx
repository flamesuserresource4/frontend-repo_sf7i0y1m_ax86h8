import { motion } from 'framer-motion'

const projects = [
  {
    title: 'حملة اطلاق منتج',
    tags: ['تصميم', 'موشن', 'إعلانات'],
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'براندينغ مطعم',
    tags: ['هوية بصرية', 'سوشيال ميديا'],
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'انفوجرافيك تفاعلي',
    tags: ['موشن', 'تحريك'],
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'تصميم حزمة منصات',
    tags: ['تصميم', 'إعلانات'],
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">اعمالنا</h2>
          <p className="mt-3 text-slate-600">عرض بصري متحرك يُظهر مستوى التصميم</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"
                />
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-4 inset-x-4"
                >
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-white/90 text-xs rounded-full bg-white/10 px-2 py-1 border border-white/20">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-t from-slate-200/60 to-transparent" />
    </section>
  )
}
