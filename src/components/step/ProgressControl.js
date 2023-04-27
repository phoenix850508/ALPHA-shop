import rightArrow from "../../icons/right-arrow.svg";
import leftArrow from "../../icons/left-arrow.svg";
import styles from "../styles/ProgressControl.module.css";

export default function ProgressControl() {
  return (
    <>
      <section className={`${styles.buttonGroup}`} data-phase="address">
        <button className={styles.btnNext}>
          下一步
          <img
            className={`cursor-point ${styles.arrow}`}
            src={rightArrow}
            alt="left-arrow.svg"
          />
        </button>
      </section>
      <section className={`${styles.buttonGroup}`} data-phase="shipping">
        <button className={styles.btnPrevious}>
          <img
            className={`cursor-point ${styles.arrow}`}
            src={leftArrow}
            alt="left-arrow.svg"
          />
          上一步
        </button>
        <button className={styles.btnNext}>
          下一步
          <img
            className={`cursor-point ${styles.arrow}`}
            src={rightArrow}
            alt="right-arrow.svg"
          />
        </button>
      </section>
      <section className={`${styles.buttonGroup}`} data-phase="credit-card">
        <button className={styles.btnPrevious}>
          <img
            className={`cursor-point ${styles.arrow}`}
            src={leftArrow}
            alt="right-arrow.svg"
          />
          上一步
        </button>
        <button className={styles.btnNext}>確認下單</button>
      </section>
    </>
  );
}
