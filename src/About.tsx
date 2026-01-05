import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales'
    },
    {
      icon: Palette,
      title: 'Design Focused',
      description: 'Creating beautiful, intuitive user experiences'
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering quality projects on time'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-purple-200 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-[35%] right-[12%] w-2.5 h-2.5 bg-blue-200 rounded-full opacity-30 animate-float-delay-2"></div>
        <div className="absolute bottom-[20%] left-[18%] w-2 h-2 bg-pink-200 rounded-full opacity-40 animate-float-delay-1"></div>
        <div className="absolute top-[60%] right-[15%] text-purple-200 opacity-40 animate-float-delay-3">+</div>
        <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-blue-200 opacity-30 rotate-45 animate-float"></div>
        <div className="absolute bottom-[35%] right-[20%] text-pink-200 opacity-40 animate-float-delay-2">✦</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-gray-900 text-center mb-12">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-gray-900 mb-4">
              Hello! I'm a developer based in [Your Location]
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm passionate about creating intuitive, dynamic user experiences. 
                With a background in both design and development, I bring a unique 
                perspective to every project I work on.
              </p>
              <p>
                My journey in web development started [X] years ago, and since then, 
                I've had the opportunity to work on diverse projects ranging from 
                small business websites to large-scale web applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying [your hobbies]. 
                I'm always eager to take on new challenges and collaborate with 
                creative minds.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/resume.pdf"
                className="inline-block bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all shadow-md hover:shadow-lg"
                download
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-500" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}