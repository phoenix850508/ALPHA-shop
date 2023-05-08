import StepProgress from "./step/StepProgress.jsx"
import Step1 from "./step/Step1.jsx"
import Step2 from "./step/Step2.jsx"
import Step3 from "./step/Step3.jsx"
import styled from "styled-components";

const StyleComponents = styled.div`
.input-label {
    color: #808080;
    font-size: 12px;
  }
`


export default function Register() {
  return (
    <section className="register-container">
      <section className="progress-cointainer">
    <StepProgress />
    </section>
    <section className="form-container">
    <StyleComponents>
    <Step1 />
    <Step2 />
    <Step3 />
    </StyleComponents>
    </section>
    </section>
  )
}