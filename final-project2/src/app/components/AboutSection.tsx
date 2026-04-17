import { ImageWithFallback } from './figma/ImageWithFallback';
import { Brain, Zap, Shield } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768400730810-5c4398d58ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMEFJJTIwYXNzaXN0YW50fGVufDF8fHx8MTc3NjQzMjA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Assistant"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Tentang Layanan AI Kami
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kami menyediakan solusi Artificial Intelligence yang dirancang khusus untuk membantu bisnis 
              Anda berkembang di era digital. Dengan teknologi machine learning dan deep learning terkini, 
              kami menghadirkan otomasi cerdas yang meningkatkan produktivitas hingga 10x lipat.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Dipercaya oleh lebih dari 500+ perusahaan di berbagai industri, platform AI kami telah 
              memproses jutaan data dan memberikan insight yang mengubah cara kerja bisnis modern.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg text-center space-y-4 border border-blue-100">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">Machine Learning Canggih</h3>
            <p className="text-gray-700">
              Algoritma pembelajaran mesin yang terus berkembang dan beradaptasi dengan data Anda
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg text-center space-y-4 border border-blue-100">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">Pemrosesan Real-Time</h3>
            <p className="text-gray-700">
              Analisis dan respons instan untuk kebutuhan bisnis yang dinamis
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg text-center space-y-4 border border-blue-100">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">Keamanan Terjamin</h3>
            <p className="text-gray-700">
              Enkripsi tingkat enterprise dan compliance dengan standar internasional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}