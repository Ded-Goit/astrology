import styles from "./AboutBlock.module.css";
import Image from "next/image";

export default function AboutBlock() {
  return (
    <section className={styles.about}>
      <div className={styles.bgGlow}></div>
      <div className={styles.bgStars}></div>

      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <div className={styles.photoGlow}></div>

          <Image
            src="/olga.webp"
            alt="Астролог Ольга"
            width={420}
            height={420}
            className={styles.photo}
          />

          <div className={styles.photoOverlay}></div>
        </div>

        <div className={styles.text}>
          <h2 className={styles.title}>Про мене</h2>
          <p className={styles.desc}>
            Я практикуючий астролог із системним підходом, який спеціалізується
            на аналізі натальних карт та індивідуальних прогнозів, допомагаючи
            клієнтам чітко зрозуміти свої здібності, природні стратегії
            поведінки, сильні й вразливі зони, а також вибудувати ефективні
            рішення у сферах кар’єри, стосунків, розвитку та ключових життєвих
            виборів.
          </p>
        </div>
      </div>
    </section>
  );
}
