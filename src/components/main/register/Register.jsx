import StepProgress from "./step/StepProgress.jsx"
import Step1 from "./step/Step1.jsx"
import Step2 from "./step/Step2.jsx"
import Step3 from "./step/Step3.jsx"
import styled from "styled-components"

const StyleComponents = styled.div`
form {
  margin-top: 64px;
}

.input-label {
    color: #808080;
    font-size: 12px;
  }

.nav-link {
    outline: solid red 2px;
    height: 100%;
    display: flex;
    align-items: center;
}
`


export default function Register({step, onCardChange}) {
  return (
    <section className="register-container">
      <section className="progress-cointainer">
    <StepProgress step={step} />
    </section>
    <section className="form-container">
    <StyleComponents>
    <Step1 isShown={step === 0? true : false}/>
    <Step2 isShown={step === 1? true : false}/>
    <Step3 isShown={step === 2? true : false} onCardChange={onCardChange}/>
    </StyleComponents>
    </section>
    </section>
  )
}