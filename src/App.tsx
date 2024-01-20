import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <section className="h-80" id="features">
          Features
        </section>
        <section className="h-40" id="articles">
          Articles
        </section>
      </main>
      <footer className="h-20">Footer</footer>
    </div>
  );
}
