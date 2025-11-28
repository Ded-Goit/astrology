"use client";

import { motion } from "framer-motion";
import AboutBlock from "@/components/AboutBlock/AboutBlock";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className={`${styles.container} ${styles.fadeAfterHero}`}>
        {/* Nebula layers */}
        <div className={styles.nebula}></div>
        <div className={styles.nebula2}></div>
        <div className={styles.nebulaDust}></div>

        {/* Star layers */}
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.imageBlock}
        >
          <Image
            src="/starclock.webp"
            alt="Астрологічний годинник"
            width={600}
            height={600}
            className={styles.image}
          />
        </motion.div>

        {/* Title and text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={styles.textBlock}
        >
          <h1 className={styles.title}>
            Відкрийте свою натальну карту, знайдіть себе справжнього
          </h1>
          <p className={styles.text}>
            Я допомагаю побачити ваші природні таланти, ресурси та потенціал
            розвитку через глибокий астрологічний аналіз. Без містики, лише
            знання, які змінюють життя.
          </p>
        </motion.div>
      </main>

      {/* Scroll fade-in sections */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <AboutBlock />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <ServicesBlock />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <CTA />
      </motion.div>

      <Footer />
    </>
  );
}
