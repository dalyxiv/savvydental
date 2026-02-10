import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6">
      <div ref={ref} className="container mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-semibold mb-8"
        >
          Confidence Delivered.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-[2px] bg-primary mx-auto mb-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-lg leading-relaxed text-muted-foreground"
        >
          We are your local digital dental partner serving Maryland, DC, and Virginia.
          Our workflow is rooted in real clinical understanding—not just design, but
          thoughtful treatment planning to simplify complex cases.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
