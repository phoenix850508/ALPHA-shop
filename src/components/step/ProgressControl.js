import leftArrow from "../../icons/left-arrow.svg";
import rightArrow from "../../icons/right-arrow.svg";

export default function ProgressControl() {
  return (
    <>
      <section className="button-group col col-12" data-phase="address">
        <button className="next">
          下一步
          <img className="cursor-point" src={leftArrow} />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev">
          <img className="cursor-point" src={leftArrow} />
          上一步
        </button>
        <button className="next">
          下一步
          <img className="cursor-point" src={rightArrow} />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev">
          <img className="cursor-point" src={rightArrow} />
          上一步
        </button>
        <button className="next">確認下單</button>
      </section>
    </>
  );
}
