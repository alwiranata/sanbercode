import { MessageSquare, Settings, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Konsultasi Gratis',
    description: 'Diskusikan kebutuhan bisnis Anda dengan tim AI expert kami',
  },
  {
    id: 2,
    icon: Settings,
    title: 'Kustomisasi Solusi',
    description: 'Kami merancang solusi AI yang disesuaikan dengan bisnis Anda',
  },
  {
    id: 3,
    icon: Rocket,
    title: 'Implementasi',
    description: 'Deploy dan integrasi sistem AI ke infrastruktur Anda',
  },
  {
    id: 4,
    icon: BarChart,
    title: 'Monitor & Optimize',
    description: 'Pantau performa dan tingkatkan efektivitas secara berkelanjutan',
  },
];

export function HowToOrderSection() {
  return (
    <section id="order" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Cara Kerja Kami
          </h2>
          <p className="text-gray-700 text-lg">
            Proses implementasi AI yang mudah dan terstruktur
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="text-center space-y-4">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
            Jadwalkan Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}