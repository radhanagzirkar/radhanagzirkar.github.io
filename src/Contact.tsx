import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'radha.nagzirkar@gmail.com',
      href: 'mailto:radha.nagzirkar@gmail.com',
      color: 'from-blue-300 to-purple-300'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, ON, Canada',
      href: null,
      color: 'from-pink-300 to-blue-300'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/radhanagzirkar', label: 'GitHub', color: 'hover:bg-blue-100' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/radha-nagzirkar/', label: 'LinkedIn', color: 'hover:bg-purple-100' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[12%] left-[10%] w-2 h-2 bg-blue-200 rounded-full opacity-70 animate-float"></div>
        <div className="absolute top-[30%] right-[15%] w-2.5 h-2.5 bg-purple-200 rounded-full opacity-60 animate-float-delay-1"></div>
        <div className="absolute bottom-[25%] left-[20%] w-2 h-2 bg-pink-200 rounded-full opacity-70 animate-float-delay-2"></div>
        <div className="absolute top-[55%] right-[12%] w-2 h-2 bg-blue-200 rounded-full opacity-60 animate-float-delay-3"></div>
        <div className="absolute top-[40%] left-[30%] text-purple-200 opacity-70 animate-float-delay-2">+</div>
        <div className="absolute bottom-[35%] right-[25%] text-pink-200 opacity-60 animate-float">+</div>
        <div className="absolute top-[20%] right-[8%] w-2 h-2 bg-purple-200 opacity-70 rotate-45 animate-float-delay-1"></div>
        <div className="absolute bottom-[18%] left-[15%] text-blue-200 opacity-70 animate-float-delay-3">✦</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl text-gray-900 text-center mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <p className="text-gray-500 mb-1">{item.label}</p>
                <p className="text-gray-900">{item.value}</p>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href}>
                {content}
              </a>
            ) : (
              <div key={item.label}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl text-gray-900 mb-6">
            Find me on social media
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon size={24} className="text-gray-700" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}