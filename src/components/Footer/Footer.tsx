import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.stars}></div>

      <div className={styles.inner}>
        <h3 className={styles.title}>Астролог Ольга Романова</h3>

        <p className={styles.text}>
          Консультації, що допомагають зрозуміти свій шлях, і знайти внутрішній
          баланс.
        </p>

        <div className={styles.contacts}>
          <a href="mailto:astroua74@gmail.com" className={styles.contactItem}>
            <MdEmail className={styles.icon} />
            astroua74@gmail.com
          </a>

          <a href="tel:+380968934202" className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            +38 (096) 893-42-02
          </a>

          <a
            href="https://www.instagram.com/olharomanova/"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
            @olharomanova
          </a>
          <a
            href="https://t.me/Olha2874"
            className={styles.contactItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className={styles.icon} />
            @Olha2874
          </a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Astrology. Усі права захищено
          <br />
          Розробка сайту:{" "}
          <a
            href="https://github.com/Ded-Goit"
            className={styles.dev}
            target="_blank"
            rel="noopener noreferrer"
          >
            Creativ studio DED production
          </a>
        </p>
      </div>
    </footer>
  );
}
