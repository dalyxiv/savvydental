import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Shield, Crown, Smile } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Treatment Planning",
    description: "Collaborative reviews to reduce surgical surprises and improve predictability.",
  },
  {
    icon: Shield,
    title: "Surgical Guides",
    description: "Tooth, tissue, and bone-supported guides (including All-on-X).",
  },
  {
    icon: Crown,
    title: "Crown Design",
    description: "Ideal contacts and occlusion with minimal chairside adjustments.",
  },
  {
    icon: Smile,
    title: "Denture Design",
    description: "Digital complete and implant-supported overdentures for fewer patient visits.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 px-6 bg-secondary/30">
      <div ref={ref} className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-semibold text-center mb-4"
        >
          Digital Precision.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-[2px] bg-primary mx-auto mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
