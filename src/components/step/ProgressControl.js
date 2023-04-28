import rightArrow from "../../icons/right-arrow.svg";
import leftArrow from "../../icons/left-arrow.svg";
import styles from "../styles/ProgressControl.module.css";

export function ControlNext() {
  return (
    <button className={styles.btnNext}>
      下一步
      <img
        className={`cursor-point ${styles.arrow}`}
        src={rightArrow}
        alt="left-arrow.svg"
      />
    </button>
  );
}

export function ControlPrevious() {
  return (
    <button className={styles.btnPrevious}>
      <img
        className={`cursor-point ${styles.arrow}`}
        src={leftArrow}
        alt="left-arrow.svg"
      />
      上一步
    </button>
  );
}

export function ControlSubmit() {
  return <button className={styles.btnNext}>確認下單</button>;
}

export default function ProgressControl() {
  return (
    <>
      <section className={`${styles.buttonGroup}`} data-phase="address">
        <ControlNext />
      </section>
      <section className={`${styles.buttonGroup}`} data-phase="shipping">
        <ControlPrevious />
        <ControlNext />
      </section>
      <section className={`${styles.buttonGroup}`} data-phase="credit-card">
        <ControlPrevious />
        <ControlSubmit />
      </section>
    </>
  );
}
