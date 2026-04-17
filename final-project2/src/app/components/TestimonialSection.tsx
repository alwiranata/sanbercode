import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rina Wijaya',
    role: 'CEO - TechStart Indonesia',
    rating: 5,
    comment: 'Implementasi AI chatbot dari AI Solutions meningkatkan customer satisfaction kami hingga 85%. Luar biasa!',
    avatar: 'RW',
  },
  {
    id: 2,
    name: 'Bambang Santoso',
    role: 'CTO - RetailMax',
    rating: 5,
    comment: 'Sistem prediksi demand mereka sangat akurat. Membantu kami mengurangi waste hingga 40% dalam 3 bulan.',
    avatar: 'BS',
  },
  {
    id: 3,
    name: 'Diana Kusuma',
    role: 'Head of Operations - LogistiQ',
    rating: 5,
    comment: 'Computer vision untuk quality control menghemat waktu inspeksi kami 70%. ROI tercapai dalam 6 bulan!',
    avatar: 'DK',
  },
  {
    id: 4,
    name: 'Ahmad Hidayat',
    role: 'Marketing Director - EcomPlus',
    rating: 5,
    comment: 'Recommendation engine mereka meningkatkan conversion rate kami 3x lipat. Tim support juga sangat responsif.',
    avatar: 'AH',
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonial" className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dipercaya oleh Perusahaan Terkemuka
          </h2>
          <p className="text-blue-100 text-lg">
            Lebih dari 500+ perusahaan telah menggunakan solusi AI kami
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg space-y-4 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-blue-200">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-blue-100 leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}