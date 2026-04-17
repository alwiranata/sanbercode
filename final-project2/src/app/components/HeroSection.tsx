import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transformasi Bisnis dengan Kekuatan Artificial Intelligence
          </h1>
          <p className="text-lg text-blue-100">
            Solusi AI terdepan untuk meningkatkan efisiensi, otomasi proses, dan menghadirkan insight data yang powerful untuk bisnis Anda.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition shadow-lg">
              Coba Gratis Sekarang
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition">
              Lihat Demo
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzc2NDAwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="AI Technology"
            className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}