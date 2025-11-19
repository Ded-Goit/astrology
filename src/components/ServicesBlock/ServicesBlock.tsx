import styles from "./ServicesBlock.module.css";

export default function ServicesBlock() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Послуги</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>☽</span>
            <h3>Натальна карта</h3>
            <p>
              Глибоке розшифрування вашої природи, ресурсів та життєвого
              потенціалу.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>✦</span>
            <h3>Сумісність</h3>
            <p>
              Аналіз партнерства: любов, сім`я, бізнес, енергетична взаємодія.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>☉</span>
            <h3>Прогноз</h3>
            <p>Ваші найближчі тенденції, цикли та можливості розвитку.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>✹</span>
            <h3>Астропсихологія</h3>
            <p>Розуміння внутрішніх блоків, страхів і природних дарів.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
