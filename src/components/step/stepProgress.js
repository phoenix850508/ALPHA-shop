import complete from "../../icons/pg-complete.svg";

function Step(props) {
  return (
    <span className="progress-group" data-phase={props.phase}>
      <span className="progress-icon">
        <span className="text">{props.text}</span>
        <img src={complete} />
      </span>
      <span className="progress-label">{props.step}</span>
    </span>
  );
}

export default function StepProgess() {
  return (
    <>
      <h2 class="register-title col col-12">結帳</h2>
      <section className="progress-container col col-12">
        <Step phase={"address"} text={1} step={"寄送地址"} />
        <Step phase={"shipping"} text={2} step={"運送方式"} />
        <Step phase={"credit-card"} text={3} step={"付款資訊"} />
      </section>
    </>
  );
}
