import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import styles from "../../styles/Cart.module.scss";
import {useContext} from 'react';
import {CartContext} from "./CartContext.jsx"

export function Product(props) {
  return (
    <div
      className={`product-container ${styles.productContainer}`}
      data-count={props.quantity}
      data-price={props.price}
      key={props.id} 
    >
      <img
        className={`img-container ${styles.imgContainer}`}
        src={[props.img]}
        alt={props.product}
      />
      <div className={`product-info ${styles.productInfo}`}>
        <div className={`product-name ${styles.productName}`}>{props.name}</div>
        <div className="product-control-container">
          <div className={`product-control ${styles.productControl}`}>
            {/* minus button */}
            <img
              className={`product-action ${styles.productAction}`}
              src={minus}
              alt="minus.svg"
              onClick={() => props.onMinusClick(props.id)}
            />
            <span className={`product-count ${styles.quantity}`}>
              {props.quantity}
            </span>
            {/* plus button */}
            <img
              className={`product-action ${styles.productAction}`}
              src={plus}
              alt="plus.svg"
              onClick={() => props.onPlusClick(props.id)}
            />
          </div>
        </div>
        {/* price show */}
        <div className={`price ${styles.price}`}>${props.price}</div>
      </div>
    </div>
  );
}

export function CartInfo(props) {
  return (
    <section className={`cart-info ${props.info} ${styles.cartInfo}`}>
      <div className="text">{props.text}</div>
      <div className={`cart-price ${styles.cartPrice}`}>
        {props.price === 0 ? '免費' : '$' + props.price}
      </div>
    </section>
  );
}

export default function Cart({onMinusClick, onPlusClick}) {
  // 從cartInfo撈資料 加總所有產品的價錢*數量以及運費
  const cartInfo = useContext(CartContext)
  const deliveryFee = 0
  const addTotal = cartInfo.map(data => data.price * data.quantity).reduce((accum, current) => accum + current, deliveryFee)

  return (
    <div className={`${styles.cartContainer} ${styles.scrollbar}`}>
      <h4 className={`cart-title ${styles.cartTitle}`}>購物籃</h4>
      <section
        className={`product-list col col-12 ${styles.productList}`}
        data-total-price={addTotal}
      >
        {cartInfo.map((data) => (
          <Product key={data.id} {...data} onMinusClick={onMinusClick} onPlusClick={onPlusClick}/>
        ))}
      </section>
      <CartInfo info={"shipping"} text={"運費"} price={deliveryFee} />
      <CartInfo info={"total"} text={"小計"} price={addTotal} />
    </div>
  );
}
