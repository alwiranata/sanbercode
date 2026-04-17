import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'AI Chatbot',
    description: 'Layanan customer service otomatis 24/7 dengan natural language processing',
    price: 'Mulai dari Rp 2.5 juta/bulan',
    image: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlJTIwc2NyZWVufGVufDF8fHx8MTc3NjQzMjA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Analisis Prediktif',
    description: 'Prediksi trend dan pola bisnis dengan akurasi tinggi menggunakan machine learning',
    price: 'Mulai dari Rp 5 juta/bulan',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NjMxNzI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Computer Vision',
    description: 'Pengenalan gambar dan video otomatis untuk keamanan dan quality control',
    price: 'Mulai dari Rp 4 juta/bulan',
    image: 'https://images.unsplash.com/photo-1655272427565-c64fd73298df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NDMyMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Natural Language Processing',
    description: 'Analisis sentimen, ekstraksi informasi, dan pemrosesan teks otomatis',
    price: 'Mulai dari Rp 3.5 juta/bulan',
    image: 'https://images.unsplash.com/photo-1763568258177-4ea94966595a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlJTIwZGF0YXxlbnwxfHx8fDE3NzY0MzIwODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Recommendation Engine',
    description: 'Sistem rekomendasi personal untuk meningkatkan engagement dan penjualan',
    price: 'Mulai dari Rp 4.5 juta/bulan',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NjMxNzI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Automasi Proses',
    description: 'Otomasi workflow dan proses bisnis dengan AI untuk efisiensi maksimal',
    price: 'Mulai dari Rp 6 juta/bulan',
    image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzc2NDAwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Layanan AI yang Kami Tawarkan
          </h2>
          <p className="text-gray-700 text-lg">
            Pilih solusi AI yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-slate-200">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-blue-900">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-bold text-blue-600">{item.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition shadow">
                    <span>Pelajari</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}