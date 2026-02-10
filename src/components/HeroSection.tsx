import { motion } from "framer-motion";
import heroBox from "@/assets/hero-box.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBox}
          alt="Savvy Premium Surgical Guide Box"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-purple-muted mb-6"
        >
          The Future of Guided Surgery
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Exceptional Vision.
          <br />
          <span className="text-gradient-purple">Precise Execution.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Designed by Dentists, For Dentists.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-block bg-primary hover:bg-accent text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-4 rounded-sm transition-all duration-300 glow-purple"
        >
          Partner With Us
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
