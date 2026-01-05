import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 text-gray-300 border-t-4 border-blue-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-center flex items-center gap-2">
            © {new Date().getFullYear()} Your Name. Built with
            <Heart size={16} className="text-pink-400 fill-current" />
            and React
          </p>
        </div>
      </div>
    </footer>
  );
}