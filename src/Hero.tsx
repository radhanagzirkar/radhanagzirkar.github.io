import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-purple-50 to-blue-50 pt-16 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small circles */}
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-purple-200 rounded-full opacity-30 animate-float-delay-1"></div>
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-float-delay-2"></div>
        <div className="absolute bottom-[25%] right-[10%] w-2.5 h-2.5 bg-purple-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-[45%] right-[25%] w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-float-delay-3"></div>
        <div className="absolute bottom-[40%] left-[15%] w-3 h-3 bg-purple-200 rounded-full opacity-30 animate-float-delay-1"></div>
        
        {/* Plus signs */}
        <div className="absolute top-[30%] left-[10%] text-blue-200 opacity-40 animate-float-delay-2">+</div>
        <div className="absolute top-[70%] right-[20%] text-purple-200 opacity-30 animate-float">+</div>
        <div className="absolute top-[15%] right-[8%] text-blue-200 opacity-40 animate-float-delay-3">+</div>
        <div className="absolute bottom-[30%] left-[25%] text-purple-200 opacity-30 animate-float-delay-1">+</div>
        
        {/* Small squares */}
        <div className="absolute top-[25%] right-[30%] w-2 h-2 bg-blue-200 opacity-40 rotate-45 animate-float-delay-3"></div>
        <div className="absolute top-[55%] left-[8%] w-2.5 h-2.5 bg-purple-200 opacity-30 rotate-45 animate-float"></div>
        <div className="absolute bottom-[20%] right-[35%] w-2 h-2 bg-blue-200 opacity-40 rotate-45 animate-float-delay-2"></div>
        
        {/* Stars */}
        <div className="absolute top-[40%] left-[30%] text-purple-200 opacity-40 animate-float-delay-1">✦</div>
        <div className="absolute bottom-[35%] right-[12%] text-blue-200 opacity-30 animate-float-delay-3">✦</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center bg-[rgba(230,0,0,0)] relative z-10">
        <div className="mb-8 relative z-10">
          <h1 className="text-gray-900 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate developer creating beautiful and functional web experiences. 
            I specialize in building modern applications that make a difference.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12 relative z-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all text-gray-700 hover:text-blue-500"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all text-gray-700 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all text-gray-700 hover:text-purple-500"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 bg-[rgba(119,119,242,0)] relative z-10">
          <a
            href="#projects"
            className="bg-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-all shadow-md hover:shadow-lg inline-block font-[Andika]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="inline-block animate-bounce text-blue-300 hover:text-blue-500 relative z-10">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
}