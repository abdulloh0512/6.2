import styles from "./card.module.css";

function Card({ img, title, order, number, color }) {
  return (
    <div className={styles.card}>
      <div className={styles.cards}>
        <img width={20} height={20} src={img} alt="" />
        <h2 className={`${styles.title} ${styles[color]}`}>{title}</h2>
      </div>
      <div className={styles.cards}>
        <h2 className={styles.order}>{order}</h2>
        <h2 className={styles.number}>{number}</h2>
      </div>
    </div>
  );
}

export default Card;
