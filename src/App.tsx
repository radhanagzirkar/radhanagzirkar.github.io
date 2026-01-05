import { Header } from './Header';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}