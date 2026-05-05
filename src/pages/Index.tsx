import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Foundation from "@/components/sections/Foundation";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Foundation />
        <Contact />
      </main>
      <footer className="border-t border-primary/20 py-8 text-center text-sm text-muted-foreground">
        © 2026 Prithviraj Bhatia. Built with intent.
      </footer>
    </div>
  );
};

export default Index;
