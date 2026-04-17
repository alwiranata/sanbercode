import { Cpu, MapPin, Phone, Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">AI Solutions</span>
            </div>
            <p className="text-gray-300">
              Platform AI terdepan untuk transformasi digital bisnis Anda.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Navigasi</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-blue-400 transition">Beranda</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">Tentang</a></li>
              <li><a href="#menu" className="hover:text-blue-400 transition">Layanan</a></li>
              <li><a href="#order" className="hover:text-blue-400 transition">Cara Kerja</a></li>
              <li><a href="#testimonial" className="hover:text-blue-400 transition">Testimoni</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Kontak</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Jl. Teknologi No. 88, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+62 21-5678-9000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@aisolutions.co.id</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Dapatkan update terbaru tentang teknologi AI dan penawaran eksklusif
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}