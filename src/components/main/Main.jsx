import Cart from "./cart/Cart.jsx"
import Register from "./register/Register.jsx"
import ProgressControl from "./progressControl/ProgressControl.jsx"
import styles from "./../styles/Main.module.scss"
import {useState, useContext} from "react"
import {Context} from "./Context.jsx"
import {CartContext} from "./cart/CartContext.jsx"


export default function Main() {
  // 控制點擊下一個/上一個步驟
  const [step, setStep] = useState(0)
  function handleNextClick() {
    setStep(step + 1);
  }

  function handlePrevClick() {
    setStep(step - 1);
  }

  // 控制Step3裡面輸入欄改變
  const [cardInfo, setCardInfo] = useState({})
  const cardData = cardInfo

  function handleCardChange(e) {
    setCardInfo(() => {
      if(e.target.className.includes("cardName")) {
        return {...cardInfo, cardName: e.target.value}
      }
      else if (e.target.className.includes("cardNum")) {
        return {...cardInfo, cardNum: e.target.value}
      }
      else if (e.target.className.includes("cardExpDate")) {
        return {...cardInfo, cardExpDate: e.target.value}
      }
      else if (e.target.className.includes("cardCCV")) {
        return {...cardInfo, cardCCV: e.target.value}
      }
    })
  }

  // 控制每當購物籃商品數量增加時
  // 將cartData裡的資料儲存到useState
  const cartData = useContext(CartContext)
  const [productData, setProductData] = useState(cartData)
  const cartInfo = productData

  function handleMinusClick(productId) {
    setProductData(productData.map(data => {
      if(data.id === productId) {
        return {...data, quantity: data.quantity === 0? 0 : data.quantity - 1}
      }
      return {...data}
    }))
  }
  function handlePlusClick(productId) {
     setProductData(productData.map(data => {
      if(data.id === productId) {
        return {...data, quantity: data.quantity + 1}
      }
      return {...data}
    }))
  }
  return (
    <main className={styles.siteMain}>
      <Context.Provider value={cardData}>
        <CartContext.Provider value={cartInfo}>
          <div className={styles.mainContainer}>
            <Register step={step} onCardChange={handleCardChange}/>
            <Cart onMinusClick={handleMinusClick} onPlusClick={handlePlusClick} />
            <ProgressControl step={step} onNextClick={handleNextClick} onPrevClick={handlePrevClick}/>
          </div>
        </CartContext.Provider>
      </Context.Provider>
    </main>
  )
}