import { Cpu, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-8 h-8 text-blue-300" />
          <span className="text-2xl font-bold">AI Solutions</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#hero" className="hover:text-blue-300 transition">Beranda</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition">Tentang</a></li>
          <li><a href="#menu" className="hover:text-blue-300 transition">Layanan</a></li>
          <li><a href="#order" className="hover:text-blue-300 transition">Cara Kerja</a></li>
          <li><a href="#testimonial" className="hover:text-blue-300 transition">Testimoni</a></li>
        </ul>
        
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg flex items-center gap-2 transition shadow-lg">
          <Sparkles className="w-5 h-5" />
          <span>Mulai Gratis</span>
        </button>
      </div>
    </nav>
  );
}