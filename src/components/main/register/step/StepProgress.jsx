import pgComplete from "../../../../assets/icons/pg-complete.svg";
import styled from "styled-components";
const StyleComponent = styled.div`
  .progress-container {
    width: 100%;
    position: relative;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .progress-bar {
    margin-left: 25px;
    margin-right: 25px;
    flex: 1;
    height: 1px;
    border-width: 1px;
    border-style: solid;
    margin-top: 16px;
    color: var(--progress-undone-color);
  }

  .progress-label {
    display: none;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    font-size: 17px;
    text-align: center;
    border: solid #2a2a2a 0.1rem;
    border-radius: 50%;
    background: transparent;
    color: #afb1bd;
    border: solid #afb1bd 0.1rem;
  }

  .step-complete {
      width: 32px;
      height: 32px;
  }

  .active {
    background: var(--progress-current-color);
    color: white;
    border-color: var(--progress-current-color);
  }

  @media screen and (min-width: 749.5px) {
    .register-title {
      margin: 3rem 0 1.5rem 0;
    }

    .progress-container {
      max-width: 700px;
    }

    .progress-icon,
    .progressGroup {
      font-size: 1.2rem;
      display: flex;
    }

    .progress-group {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      gap: 0.3rem;
      font-size: 1.2rem;
    }

    .progress-bar {
      margin: 0 20px 0 0;
      flex: 1;
      border-width: 2px;
      margin-top: 12px;
    }

    .text {
      width: 24px;
      height: 24px;
      font-size: 12px;
    }

    .step-complete {
      width: 24px;
      height: 24px;
    }

    .progress-label {
      display: inline;
      font-size: 16px;
      font-weight: 400;
      width: 80px;
      color: #afb1bd;
    }

    .label-active {
      color: var(--progress-current-color);
    }
  }
`;

// 每個步驟顯示
export function Step(props) {
  function ProgressIcon(text, step) {
    if (props.step === props.text) {
      return <div className={`text text${props.text} active`}>{props.text}</div>
    }
    else if (props.step > props.text) {
      return <img className="step-complete" src={pgComplete} alt="pg-complete.svg" />
    }
    else {
      return <div className={`text text${props.text}`}>{props.text}</div>
    }
  }

  // 步驟字樣
  function ProgressLabel(step) {
    if (props.step >= props.text) {
      return <span className={`progress-label label-active`}>{props.stepperTitle}</span>
    }
    else {
      return <span className={`progress-label`}>{props.stepperTitle}</span>
    }
  }

  return (
    <div className="progress-group" data-phase={props.phase}>
      <div className="progress-icon">
      <ProgressIcon />
      </div>
      <ProgressLabel />
    </div>
  );
}

// 進度條
export function ProgressBar(props) {
  function Bar(step) {
    if(props.step) {
      return <span className="progress-bar active"></span>
    }
    else {
      return <span className="progress-bar"></span>
    }
  }
  return <Bar />
}

export default function StepProgess({step}) {
  return (
    <StyleComponent>
      <h2 className="register-title col col-12">結帳</h2>
      <section className="progress-container">
        <Step phase={"address"} text={1} stepperTitle={"寄送地址"} step={step + 1}/>
        <ProgressBar step={true}/>
        <Step phase={"shipping"} text={2} stepperTitle={"運送方式"} step={step + 1}/>
        <ProgressBar step={step > 0? true : false}/>
        <Step phase={"credit-card"} text={3} stepperTitle={"付款資訊"} step={step + 1}/>
      </section>
    </StyleComponent>
  );
}
