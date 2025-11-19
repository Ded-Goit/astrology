import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.stars}></div>

      <div className={styles.inner}>
        <h3 className={styles.title}>Астролог Ольга</h3>

        <p className={styles.text}>
          Консультації, що допомагають зрозуміти свій шлях і знайти внутрішній
          баланс.
        </p>

        <a href="mailto:yourmail@gmail.com" className={styles.mail}>
          yourmail@gmail.com
        </a>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Ольга — астролог. Усі права захищено.
        </p>
      </div>
    </footer>
  );
}
