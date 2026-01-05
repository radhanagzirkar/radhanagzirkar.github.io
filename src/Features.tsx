import { Zap, Shield, Users, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Lightning-fast load times and seamless user experience that keeps your audience engaged.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and ensure peace of mind.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together effortlessly with powerful collaboration tools built for modern teams.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Reach audiences worldwide with scalable infrastructure and multi-language support.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you achieve your goals faster and more efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
