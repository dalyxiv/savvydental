import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import unboxingImg from "@/assets/unboxing.jpg";

const UnboxingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div ref={ref} className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src={unboxingImg}
              alt="Savvy Premium Unboxing Experience"
              className="rounded-lg glow-purple"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Premium Unboxing.
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-8" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Rigid box construction with a soft-touch matte finish. Includes a discreet
              QR code connecting the physical guide to your digital surgical protocol.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnboxingSection;
