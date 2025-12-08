import styles from "./ServicesBlock.module.css";
import { servicesData } from "@/constant/servicesData";
import Link from "next/link";

export default function ServicesBlock() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Послуги</h2>

        <div className={styles.grid}>
          {servicesData.map(({ id, title, description, slug, icon: Icon }) => (
            <Link key={id} href={`/services/${slug}`} className={styles.card}>
              <Icon className={styles.icon} />

              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
