import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.glow}></div>

      <h2 className={styles.title}>Готові змінити своє життя на кращє?</h2>

      <p className={styles.sub}>
        Запишіться на персональну консультацію з астрологом. Це може змінити
        ваше бачення себе та свого шляху.
      </p>

      <a
        href="https://t.me/Olha2874"
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        Записатися на консультацію
      </a>
    </section>
  );
}
