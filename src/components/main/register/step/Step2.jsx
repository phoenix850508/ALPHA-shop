import styles from "../../../styles/Step2.module.scss";

export default function Step2() {
  return (
    <form className="d-none col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className={`form-body col col-12 ${styles.formBody}`}>
        <label className={styles.radioGroup} data-price={0}>
          <input
            className={styles.input}
            id="shipping-standard"
            type="radio"
            name="shipping"
            defaultChecked=""
          />
          <div className={styles.radioInfo}>
            <div className={styles.shipInfo}>
              <div className={styles.shipMethod}>標準運送</div>
              <div className={styles.price} />
              免費
            </div>
            <div className="period col col-12">約 3~7 個工作天</div>
          </div>
          <div className={styles.radioboxBorder} />
        </label>
        <label className={styles.radioGroup} data-price={500}>
          <input
            className={styles.input}
            id="shipping-dhl"
            type="radio"
            name="shipping"
          />
          <div className={styles.radioInfo}>
            <div className={styles.shipInfo}>
              <div className={styles.shipMethod}>DHL 貨運</div>
              <div className={styles.price} />
              $500
            </div>
            <div className="period col col-12">48 小時內送達</div>
          </div>
          <div className={styles.radioboxBorder} />
        </label>
      </section>
    </form>
  );
}
