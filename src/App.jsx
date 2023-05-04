import "./App.css";
import StepProgress from "./components/main/register/step/StepProgress.jsx";
import Step1 from "./components/main/register/step/Step1.jsx";
import Step2 from "./components/main/register/step/Step2.jsx";
import Step3 from "./components/main/register/step/Step3.jsx";
import ProgressControl from "./components/main/progressControl/ProgressControl.jsx";
import Cart from "./components/main/cart/Cart.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import styled from "styled-components";


const Description = styled.div`
  .site-main {
    margin-bottom: 120px;
  }
  .main-container {
    margin: 5rem auto 0;
    padding: 0 2rem 0 2rem;
    max-width: 1100px;
    font-family: 'Noto Sans TC', sans-serif;
  }

  .cart-container {
    border: 1px solid #f0f0f5;
    border-radius: 8px;
    padding: 2rem 1.5rem;
    flex: 1;
    font-family: 'Noto Sans TC', sans-serif;
  }

  .progress-control-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-family: 'Noto Sans TC', sans-serif;
  }

  .input-label {
    color: #808080;
    font-size: 12px;
  }

  h3 {
    font-size: 23px;
    margin: 1.2rem 0;
  }

  .progress-control-container {
    margin-top: 50px;
    width: 100%;
    font-family: 'Noto Sans TC', sans-serif;
  }

  :root {
    --white: #fff;
    --pink: #f67599;
    --grey-800: #2a2a2a;
    --grey-700: #333;
    --grey-400: #808080;
    --grey-300: #999;
    --site-edge-margin: 15px;
  }
  body {
    background-color: #000000;
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
    max-width: 700px;
  }
  @media screen and (min-width: 749.5px) {
    .main-container {
      display: grid;
      grid-template-columns: 1.5fr 1.2fr;
      grid-template-rows: auto auto;
      gap: 4rem;
      justify-content: space-between;
    }

    .cart-container {
      margin-top: calc(93px + 3rem + 2rem);
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }

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

    .col.col-12 {
      width: 100%;
      max-width: 500px;
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

    .main-container {
      margin: 3rem auto 0;
      width: 100%;
      padding: 1.5rem;
    }
  }
`;

function App() {
  return (
    <div>
      <Description>
        <Header />
        <main className="site-main">
          <div className="main-container">
            <section className="register-container">
              <section className="progress-cointainer">
                <StepProgress />
              </section>
              <section className="form-container">
                <Step1 />
                <Step2 />
                <Step3 />
              </section>
            </section>
            <section className="cart-container">
              <Cart />
            </section>
            <section className="progress-control-container">
              <ProgressControl />
            </section>
          </div>
        </main>
        <Footer />
      </Description>
    </div>
  );
}

export default App;
