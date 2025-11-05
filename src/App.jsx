import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blue-950 text-slate-100">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(30,64,175,0.35),transparent),radial-gradient(800px_400px_at_90%_30%,rgba(251,191,36,0.22),transparent)]" aria-hidden />
      <Header />
      <main>
        <Hero />
        <UpcomingEvents />
        {/* Vendors and other sections can be added later */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
