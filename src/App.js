import logo from "./logo.svg";
import "./App.css";
import StepProgress from "./components/step/StepProgress.js";
import Step1 from "./components/step/Step1.js";
import Step2 from "./components/step/Step2.js";
import Step3 from "./components/step/Step3.js";

function App() {
  return (
    <>
      <StepProgress />
      <section className="form-container col col-12">
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
    </>
  );
}

export default App;
