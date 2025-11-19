import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.glow}></div>

      <h2 className={styles.title}>Готові відкрити свою астрологічну карту?</h2>

      <p className={styles.sub}>
        Запишіться на персональну консультацію з Ольгою. Це може змінити ваше
        бачення себе та свого шляху.
      </p>

      <a
        href="https://www.instagram.com/direct/t/104206877645216/"
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        Записатися на консультацію
      </a>
    </section>
  );
}
