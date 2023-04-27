import pgComplete from "../../icons/pg-complete.svg";
import styled from "styled-components";
const Description = styled.p`
  .register-title {
    margin: 3rem 0 1.5rem 0;
  }

  .progress-container {
    width: 40%;
    position: relative;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .progress-group {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.3rem;
    font-size: 1.2rem;
  }

  .progress-bar {
    margin-right: 17px;
    min-width: 80px;
    flex-grow: 1;
    max-width: 60px;
    height: 1px;
    border-width: 2px;
    border-style: solid;
    margin-top: 12px;
    color: #2a2a2a;
  }

  .bar2 {
    color: #afb1bd;
  }

  .progress-icon,
  .progressGroup {
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
    border: solid #2a2a2a 0.1rem;
    border-radius: 50%;
    background: #2a2a2a;
    color: white;
  }

  .text2,
  .text3 {
    background: transparent;
    color: #afb1bd;
    border: solid #afb1bd 0.1rem;
  }

  .cursor-point {
    display: none;
  }

  .progress-label {
    color: #2a2a2a;
    font-size: 16px;
    font-weight: 400;
    width: 80px;
  }

  .label2,
  .label3 {
    color: #afb1bd;
  }
`;

function Step(props) {
  return (
    <div className="progress-group" data-phase={props.phase}>
      <div className="progress-icon">
        <div className={`text text${props.text}`}>{props.text}</div>
        <img className="cursor-point" src={pgComplete} alt="pg-complete.svg" />
      </div>
      <span className={`progress-label label${props.text}`}>{props.step}</span>
    </div>
  );
}

export default function StepProgess() {
  return (
    <>
      <Description>
        <h2 class="register-title col col-12">結帳</h2>
        <section className="progress-container">
          <Step phase={"address"} text={1} step={"寄送地址"} />
          <span className="progress-bar bar1"></span>
          <Step phase={"shipping"} text={2} step={"運送方式"} />
          <span className="progress-bar bar2"></span>
          <Step phase={"credit-card"} text={3} step={"付款資訊"} />
        </section>
      </Description>
    </>
  );
}
