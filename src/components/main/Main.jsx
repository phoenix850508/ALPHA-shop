import Cart from "./cart/Cart.jsx"
import Register from "./register/Register.jsx"
import ProgressControl from "./progressControl/ProgressControl.jsx"
import styles from "./../styles/main.module.scss"

export default function Main() {
  return (
     <main className={styles.siteMain}>
          <div className={styles.mainContainer}>
            <Register />
            <Cart />
            <ProgressControl />
          </div>
      </main>
  )
}