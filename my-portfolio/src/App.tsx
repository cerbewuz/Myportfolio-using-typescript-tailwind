import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16 scroll-smooth">
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    </div>
  );
}
