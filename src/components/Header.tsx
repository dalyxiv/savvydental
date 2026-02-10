import { useState, useEffect } from "react";
import savvyLogo from "@/assets/savvy-logo-white.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="#" className="flex items-center">
          <img src={savvyLogo} alt="Savvy Dental" className="h-8" />
        </a>
        <ul className="hidden md:flex items-center gap-10 font-body text-sm tracking-widest uppercase">
          <li>
            <a href="#workflow" className="text-muted-foreground hover:text-foreground transition-colors">
              Workflow
            </a>
          </li>
          <li>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
