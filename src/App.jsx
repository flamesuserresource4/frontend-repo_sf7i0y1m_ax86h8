import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-right">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl p-6 text-center text-slate-500">
            © {new Date().getFullYear()} انيميشن — جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
