import styles from "../../../styles/Step3.module.scss";

export default function Step3() {
  return (
    <form
      className={`d-none col col-12 ${styles.form}`}
      data-phase="credit-card"
    >
      <h3 className="form-title">付款資訊</h3>
      <section className={`form-body col col-12 ${styles.formBody}`}>
        <div className="col col-12">
          <div className={styles.inputGroup}>
            <div className={`input-label ${styles.inputLabel}`}>持卡人姓名</div>
            <input
              className={styles.input}
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="col col-12">
          <div className={styles.inputGroup}>
            <div className={`input-label ${styles.inputLabel}`}>卡號</div>
            <input
              className={styles.input}
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div className={styles.inputGroupContainer}>
          <div className={styles.inputGroup}>
            <div className={`input-label ${styles.inputLabel}`}>有效期限</div>
            <input className={styles.input} type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.inputGroup}>
            <div className={`input-label ${styles.inputLabel}`}>CVC / CCV</div>
            <input className={styles.input} type="text" placeholder={123} />
          </div>
        </div>
      </section>
    </form>
  );
}
