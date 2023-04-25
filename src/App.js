import logo from "./logo.svg";
import "./App.css";
import StepProgress from "./components/step/StepProgress.js";
import Step1 from "./components/step/Step1.js";
import Step2 from "./components/step/Step2.js";
import Step3 from "./components/step/Step3.js";
import ProgressControl from "./components/step/ProgressControl.js";

function App() {
  return (
    <>
      <section className="progress-container col col-12">
        <StepProgress />
      </section>
      <section className="form-container col col-12">
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <ProgressControl />
      </section>
    </>
  );
}

export default App;
