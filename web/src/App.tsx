import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Documentation from './components/Documentation';
import Community from './components/Community';
import Download from './components/Download';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home" className="min-h-screen bg-black">
          <Hero />
        </section>
        <section id="download" className="min-h-screen bg-white text-neutral-900">
          <Download />
        </section>
        <section id="docs" className="min-h-screen bg-black">
          <Documentation />
        </section>
        <section id="community" className="min-h-screen bg-white text-neutral-900">
          <Community />
        </section>
      </main>
      <Footer />
    </div>
  );
}