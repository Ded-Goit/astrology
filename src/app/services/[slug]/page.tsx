"use server";

import { servicesData } from "@/constant/servicesData";
import styles from "./servicePage.module.css";
import Link from "next/link";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

type ServiceItem = (typeof servicesData)[number] | undefined;

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service: ServiceItem = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return <div className={styles.notFound}>Послугу не знайдено.</div>;
  }

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{service.title}</h1>

        <p className={styles.description}>{service.fullDescription}</p>

        <div className={styles.card}>
          <h3>Що входить у послугу:</h3>
          <ul>
            <li>PDF файл з аналізом</li>
            <li>Глибинний опис всіх показників</li>
            <li>30 хв онлайн консультації</li>
          </ul>

          <a href="https://t.me/Olha2874" className={styles.button}>
            Записатися на консультацію
          </a>
        </div>

        <Link href="/#services" className={styles.back}>
          ← Повернутись до списку послуг
        </Link>
      </div>
    </section>
  );
}
