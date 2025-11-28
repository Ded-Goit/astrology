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
            Я практикуючий астролог, який спеціалізується на глибинному аналізі
            натальних карт та індивідуальних прогнозах. У своїй роботі опираюся
            на точні методи, структурний підхід і практику. Моє завдання
            допомогти вам побачити себе глибше, зрозуміти свої природні
            здібності, таланти та внутрішні ресурси, а також знайти той шлях, на
            якому ви відчуєте себе реалізованими та гармонійними.
          </p>
          <p className={styles.desc}>
            Астрологія для мене інструмент, який дозволяє побачити внутрішню
            логіку подій та особистих процесів. Працюючи з натальною картою, я
            визначаю зони потенціалу й можливих ризиків, аналізую особливості
            характеру, професійні схильності, моделі поведінки у стосунках та
            ресурси, доступні на різних етапах життя. Це дає можливість робити
            виважені рішення та планувати дії з урахуванням власної природи.
          </p>
          <p className={styles.desc}>
            Я проводжу індивідуальні консультації, створюю персональні прогнози.
            Мій підхід: практичність, ясність і конкретні рекомендації, що
            допомагають клієнтам усвідомлено рухатися вперед і використовувати
            свої можливості максимально ефективно.
          </p>
        </div>
      </div>
    </section>
  );
}
