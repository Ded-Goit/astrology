"use client";

import AboutBlock from "@/components/AboutBlock/AboutBlock";
import styles from "./page.module.css";
import Image from "next/image";
import ServicesBlock from "@/components/ServicesBlock/ServicesBlock";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function HomePage() {
  useFadeIn();
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

        {/* Content */}
        <div className={styles.imageBlock}>
          <Image
            src="/starclock.png"
            alt="Астрологічний годинник"
            width={600}
            height={600}
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Відкрийте свою натальну карту, знайдіть себе справжнього
          </h1>
          <p className={styles.text}>
            Я допомагаю побачити ваші природні таланти, ресурси та потенціал
            розвитку через глибокий астрологічний аналіз. Без містики — лише
            знання, які змінюють життя.
          </p>
        </div>
      </main>
      <div className="fade-in">
        <AboutBlock />
      </div>

      <div className="fade-in">
        <ServicesBlock />
      </div>

      <div className="fade-in">
        <CTA />
      </div>

      <Footer />
    </>
  );
}
