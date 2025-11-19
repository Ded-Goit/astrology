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
            src="/olga.png"
            alt="Астролог Ольга"
            width={420}
            height={420}
            className={styles.photo}
          />
        </div>

        <div className={styles.text}>
          <h2 className={styles.title}>Ольга — астролог</h2>
          <p className={styles.desc}>
            Я допомагаю побачити ваші внутрішні ресурси, таланти і глибинну
            природу. Для цього використовую сучасну астрологію, інтуїцію та
            психологічні підходи.
          </p>
          <p className={styles.desc}>
            Моє завдання — дати вам ясність, впевненість і розуміння того, як
            ваш шлях може розкриватися найбільш природним способом.
          </p>
        </div>
      </div>
    </section>
  );
}
