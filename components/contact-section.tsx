"use client"

import { motion } from "framer-motion"
import { Mail, Instagram } from "lucide-react"
import { FloatingElement } from "./floating-element"
import { FluidGlass } from "./fluid-glass"
import { StarButton } from "@/components/ui/star-button"

const contactMethods = [
  {
    icon: Mail,
    label: "Personal Email",
    value: "mahinerfan2860@gmail.com",
    href: "mailto:mahinerfan2860@gmail.com",
    color: "primary",
  },
  {
    icon: Mail,
    label: "Work Email",
    value: "thisisus533@gmail.com",
    href: "mailto:thisisus533@gmail.com",
    color: "secondary",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@erfannoormahin",
    href: "https://instagram.com/erfannoormahin",
    color: "accent",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative responsive-padding">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-title font-rosca font-bold tracking-tight text-white uppercase"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="contact-description text-muted-foreground"
          >
            Have a project in mind? Let's build something amazing together
          </motion.p>
        </motion.div>

        <div className="grid gap-6 responsive-gap md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <FloatingElement key={method.label} delay={index * 0.2} duration={3 + index}>
              <motion.a
                href={method.href}
                target={method.label === "Instagram" ? "_blank" : undefined}
                rel={method.label === "Instagram" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
                className="block"
                style={{ perspective: 1000 }}
              >
                <FluidGlass className="group p-6 transition-all hover:border-accent/50 border-2 hover:shadow-lg hover:shadow-accent/30 bg-card">
                  <div className="relative z-10 space-y-4">
                    <motion.div
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.3 }}
                      transition={{ duration: 0.6 }}
                      className={`mx-auto w-fit rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 p-3 shadow-lg shadow-accent/20`}
                    >
                      <method.icon className={`h-6 w-6 text-foreground`} />
                    </motion.div>
                    <div className="space-y-1 text-center">
                      <p className="contact-label font-medium text-foreground/80">{method.label}</p>
                      <p className="contact-value font-semibold text-foreground">{method.value}</p>
                    </div>
                  </div>
                </FluidGlass>
              </motion.a>
            </FloatingElement>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <FluidGlass className="p-8 border-2 hover:border-accent/50 transition-all bg-card">
            <div className="relative z-10 space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="contact-title font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"
              >
                Ready to start a project?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="contact-description text-foreground"
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>
              <motion.div whileHover={{
                  scale: 1.08,
                  y: -3,
                }} whileTap={{ scale: 0.95 }} className="inline-block">
                <StarButton
                  onClick={() => window.location.href = "mailto:mahinerfan2860@gmail.com"}
                  lightColor="#C47623"
                  backgroundColor="#124B42"
                >
                  Send Me an Email
                </StarButton>
              </motion.div>
            </div>
          </FluidGlass>
        </motion.div>
      </div>
    </section>
  )
}