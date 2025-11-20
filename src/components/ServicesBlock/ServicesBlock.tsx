import styles from "./ServicesBlock.module.css";
import { servicesData } from "@/constant/servicesData";

export default function ServicesBlock() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Послуги</h2>

        <div className={styles.grid}>
          {servicesData.map(({ id, title, description, icon: Icon }) => (
            <div key={id} className={styles.card}>
              <Icon className={styles.icon} />

              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
