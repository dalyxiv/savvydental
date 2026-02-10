import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, CheckCircle, Package } from "lucide-react";

const steps = [
  { icon: Upload, title: "Send Data", desc: "Submit STL + CBCT files." },
  { icon: Cpu, title: "Digital Plan", desc: "We design with clinical intelligence." },
  { icon: CheckCircle, title: "Review", desc: "You approve the plan." },
  { icon: Package, title: "Production", desc: "Fast 48–72 hour turnaround." },
];

const WorkflowSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workflow" className="py-32 px-6">
      <div ref={ref} className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-semibold text-center mb-4"
        >
          Clear. Efficient. No Confusion.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-[2px] bg-primary mx-auto mb-20"
        />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="relative flex-1 text-center z-10"
            >
              <div className="w-16 h-16 rounded-full bg-background border border-primary/30 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
