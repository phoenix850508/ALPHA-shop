import Cart from "./cart/Cart.jsx"
import Register from "./register/Register.jsx"
import ProgressControl from "./progressControl/ProgressControl.jsx"
import styles from "./../styles/Main.module.scss"
import {useState} from "react";


export default function Main() {
  const [step, setStep] = useState(0);
  function handleNextClick() {
    setStep(step + 1);
  }

  function handlePrevClick() {
    setStep(step - 1);
  }
  return (
     <main className={styles.siteMain}>
          <div className={styles.mainContainer}>
            <Register step={step}/>
            <Cart />
            <ProgressControl step={step} onNextClick={handleNextClick} onPrevClick={handlePrevClick}/>
          </div>
      </main>
  )
}