import "./App.css";
import StepProgress from "./components/step/StepProgress.js";
import Step1 from "./components/step/Step1.js";
import Step2 from "./components/step/Step2.js";
import Step3 from "./components/step/Step3.js";
import ProgressControl from "./components/step/ProgressControl.js";
import styled from "styled-components";

const Description = styled.p`
  :root {
    --white: #fff;
    --pink: #f67599;
    --grey-800: #2a2a2a;
    --grey-700: #333;
    --grey-400: #808080;
    --grey-300: #999;
    --site-edge-margin: 15px;
    --main-font-family: "Noto Sans TC", sans-serif;
  }
  body {
    background-color: #fff;
    --footer-background-color: #f6f7f8;
    --nav-icon: #2a2a2a;
    --social-icon: #808080;
    --main-text: #2a2a2a;
    --secondary-text: #808080;
    --active-color: lightblue;
    --undone-progress-border: #f0f0f5;
    --done-progress-border: #000;
    --progress-current-color: #2a2a2a;
    --progress-done-color: #fff;
    --progress-undone-color: #afb1bd;
    --pg-addr-color: #fff;
    --pg-addr-bg-color: #2a2a2a;
    --input-label: #808080;
    --input-border: #4a4a4a;
    --input-text: #999;
    --select-arrow: #2a2a2a;
    --select-true: #2a2a2a;
    --select-false: #999;
    --product-action-text: #000;
    --product-action-bg: #f0f0f5;
    --left-arrow: #000;
    background-color: var(--background-color);
    color: var(--main-text);
    font-family: var(--main-font-family);
    font-size: 16px;
    user-select: none;
  }
  ul,
  ol,
  li {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  .container {
    margin: 0px 15px;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mr-auto {
    margin-right: auto !important;
  }
  .cursor-point {
    cursor: pointer;
  }
  .col.col-1 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 8.3333333333%;
    align-content: flex-start;
    max-width: 8.3333333333%;
  }
  .col.col-2 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 16.6666666667%;
    align-content: flex-start;
    max-width: 16.6666666667%;
  }
  .col.col-3 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 25%;
    align-content: flex-start;
    max-width: 25%;
  }
  .col.col-4 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 33.3333333333%;
    align-content: flex-start;
    max-width: 33.3333333333%;
  }
  .col.col-5 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 41.6666666667%;
    align-content: flex-start;
    max-width: 41.6666666667%;
  }
  .col.col-6 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 50%;
    align-content: flex-start;
    max-width: 50%;
  }
  .col.col-7 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 58.3333333333%;
    align-content: flex-start;
    max-width: 58.3333333333%;
  }
  .col.col-8 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 66.6666666667%;
    align-content: flex-start;
    max-width: 66.6666666667%;
  }
  .col.col-9 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 75%;
    align-content: flex-start;
    max-width: 75%;
  }
  .col.col-10 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 83.3333333333%;
    align-content: flex-start;
    max-width: 83.3333333333%;
  }
  .col.col-11 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 91.6666666667%;
    align-content: flex-start;
    max-width: 91.6666666667%;
  }
  .col.col-12 {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;
    align-content: flex-start;
    max-width: 100%;
  }
  @media screen and (min-width: 749.5px) {
    .col.col-lg-1 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 8.3333333333%;
      align-content: flex-start;
      max-width: 8.3333333333%;
    }
    .col.col-lg-2 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 16.6666666667%;
      align-content: flex-start;
      max-width: 16.6666666667%;
    }
    .col.col-lg-3 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 25%;
      align-content: flex-start;
      max-width: 25%;
    }
    .col.col-lg-4 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 33.3333333333%;
      align-content: flex-start;
      max-width: 33.3333333333%;
    }
    .col.col-lg-5 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 41.6666666667%;
      align-content: flex-start;
      max-width: 41.6666666667%;
    }
    .col.col-lg-6 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      align-content: flex-start;
      max-width: 50%;
    }
    .col.col-lg-7 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 58.3333333333%;
      align-content: flex-start;
      max-width: 58.3333333333%;
    }
    .col.col-lg-8 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 66.6666666667%;
      align-content: flex-start;
      max-width: 66.6666666667%;
    }
    .col.col-lg-9 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 75%;
      align-content: flex-start;
      max-width: 75%;
    }
    .col.col-lg-10 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 83.3333333333%;
      align-content: flex-start;
      max-width: 83.3333333333%;
    }
    .col.col-lg-11 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 91.6666666667%;
      align-content: flex-start;
      max-width: 91.6666666667%;
    }
    .col.col-lg-12 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 100%;
      align-content: flex-start;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 749.5px) {
    .col.col-sm-1 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 8.3333333333%;
      align-content: flex-start;
      max-width: 8.3333333333%;
    }
    .col.col-sm-2 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 16.6666666667%;
      align-content: flex-start;
      max-width: 16.6666666667%;
    }
    .col.col-sm-3 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 25%;
      align-content: flex-start;
      max-width: 25%;
    }
    .col.col-sm-4 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 33.3333333333%;
      align-content: flex-start;
      max-width: 33.3333333333%;
    }
    .col.col-sm-5 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 41.6666666667%;
      align-content: flex-start;
      max-width: 41.6666666667%;
    }
    .col.col-sm-6 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 50%;
      align-content: flex-start;
      max-width: 50%;
    }
    .col.col-sm-7 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 58.3333333333%;
      align-content: flex-start;
      max-width: 58.3333333333%;
    }
    .col.col-sm-8 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 66.6666666667%;
      align-content: flex-start;
      max-width: 66.6666666667%;
    }
    .col.col-sm-9 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 75%;
      align-content: flex-start;
      max-width: 75%;
    }
    .col.col-sm-10 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 83.3333333333%;
      align-content: flex-start;
      max-width: 83.3333333333%;
    }
    .col.col-sm-11 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 91.6666666667%;
      align-content: flex-start;
      max-width: 91.6666666667%;
    }
    .col.col-sm-12 {
      display: flex;
      flex-wrap: wrap;
      flex: 0 0 100%;
      align-content: flex-start;
      max-width: 100%;
    }
  }
`;

function App() {
  return (
    <>
      <Description>
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
      </Description>
    </>
  );
}

export default App;
