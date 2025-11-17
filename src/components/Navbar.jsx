import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'اعمالنا', href: '#showcase' },
    { label: 'آراء العملاء', href: '#testimonials' },
    { label: 'تواصل معنا', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-0 blur-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 opacity-60" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-400 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <span className="text-lg font-extrabold tracking-wide bg-gradient-to-tr from-fuchsia-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                انيميشن
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-700 hover:text-violet-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <button aria-label="فتح القائمة" onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-white/60">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute top-4 inset-x-4 rounded-2xl bg-white shadow-2xl border border-white/10 p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-lg font-bold">انيميشن</span>
              <button aria-label="اغلاق" onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 space-y-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
