import pgComplete from "../../icons/pg-complete.svg";
import styled from "styled-components";
const Description = styled.p`
  .register-title {
    margin: 1rem;
  }

  .progress-container {
    position: relative;
    margin: 2rem 1rem;
  }

  .progress-group {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 1.2rem;
    color: #e5e5e5;
  }

  .progress-bar {
    width: 50px;
    flex-grow: 1;
    max-width: 60px;
    height: 1px;
    margin: 0px 8px;
    border-width: 2px;
    border-style: solid;
    margin-top: 12px;
    color: #e5e5e5;
  }

  .progress-icon,
  .progressGroup {
    color: #e5e5e5;
    font-size: 1.2rem;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-size: 12px;
    text-align: center;
    border: solid #e5e5e5 0.1rem;
    border-radius: 50%;
  }

  .cursor-point {
    display: none;
  }

  .progress-label {
    line-height: 24px;
  }
`;

function Step(props) {
  return (
    <div className="progress-group" data-phase={props.phase}>
      <div className="progress-icon">
        <div className="text">{props.text}</div>
        <img className="cursor-point" src={pgComplete} alt="pg-complete.svg" />
      </div>
      <span className="progress-label">{props.step}</span>
    </div>
  );
}

export default function StepProgess() {
  return (
    <>
      <Description>
        <h2 class="register-title col col-12">結帳</h2>
        <section className="progress-container col col-12">
          <Step phase={"address"} text={1} step={"寄送地址"} />
          <span className="progress-bar"></span>
          <Step phase={"shipping"} text={2} step={"運送方式"} />
          <span className="progress-bar"></span>
          <Step phase={"credit-card"} text={3} step={"付款資訊"} />
        </section>
      </Description>
    </>
  );
}
