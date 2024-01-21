import Articles from "./Articles";
import Features from "./Features";
import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Features />
        <Articles />
      </main>
      <footer className="h-20">Footer</footer>
    </div>
  );
}
