import Footer from "./Footer";
import Articles from "./Articles";
import Features from "./Features";
import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative overflow-hidden">
        <h1 className="sr-only">
          Easybank landing page - Frontend Mentor Challenge - Solution by Viet
          An
        </h1>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
