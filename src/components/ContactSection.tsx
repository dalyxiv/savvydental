import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const serviceOptions = ["Surgical Guide", "Crown", "Denture", "Planning"];

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="container mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl font-semibold text-center mb-4"
        >
          Let's Elevate Your Workflow.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-muted-foreground text-center mb-12"
        >
          Submit your inquiry or next case below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Dr. Name"
              className="w-full bg-secondary/50 border border-border rounded-sm px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="text"
              placeholder="Practice Name"
              className="w-full bg-secondary/50 border border-border rounded-sm px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-secondary/50 border border-border rounded-sm px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-secondary/50 border border-border rounded-sm px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Service checkboxes */}
          <div>
            <p className="font-body text-sm text-muted-foreground mb-3">Service Needed</p>
            <div className="flex flex-wrap gap-3">
              {serviceOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`font-body text-sm px-5 py-2.5 rounded-sm border transition-all duration-200 ${
                    services.includes(s)
                      ? "bg-primary/20 border-primary text-foreground"
                      : "bg-secondary/30 border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* File upload */}
          <div className="border border-dashed border-border rounded-sm p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
            <p className="font-body text-sm text-muted-foreground">
              Upload File (Optional) — Attach STL/CBCT
            </p>
          </div>

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full bg-secondary/50 border border-border rounded-sm px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />

          <button
            type="submit"
            className="w-full bg-primary hover:bg-accent text-primary-foreground font-body text-sm tracking-widest uppercase py-4 rounded-sm transition-all duration-300 glow-purple"
          >
            Submit
          </button>
        </motion.form>

        {/* Footer info */}
        <div className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>DrMongy@SavvyDentals.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Serving MD, DC, & VA</span>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8 font-body">
          © 2026 Savvy Dental. The Future of Guided Surgery.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
