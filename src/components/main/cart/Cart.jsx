import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import product1 from "../../../assets/images/product-1.jpg";
import product2 from "../../../assets/images/product-2.jpg";
import styles from "../../styles/Cart.module.scss";
import {useState} from "react";

const cartData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

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

export default function Cart() {
  // 將cartData裡的資料儲存到useState
  const [productData, setProductData] = useState(cartData)
  // 從productData撈資料 先列印出一開始的cart加總金額 initaladdPrice
  let initialAddPrice = 0
  productData.map(data => data.quantity > 0? initialAddPrice += (data.price * data.quantity) : initialAddPrice)
   // 將一開始cart的加總金額儲存到useState
  const [addPrice, setAddPrice] = useState(initialAddPrice)

  function handleMinusClick(productId) {
    setProductData(productData.map(data => {
      if(data.id === productId) {
        setAddPrice((data.quantity === 0)? addPrice : addPrice - data.price)
        return {...data, quantity: data.quantity === 0? 0 : data.quantity - 1}
      }
      return {...data}
    }))
  }
  function handlePlusClick(productId) {
     setProductData(productData.map(data => {
      if(data.id === productId) {
        setAddPrice(addPrice + data.price)
        return {...data, quantity: data.quantity + 1}
      }
      return {...data}
    }))
  }

  return (
    <div className={`${styles.cartContainer} ${styles.scrollbar}`}>
      <h4 className={`cart-title ${styles.cartTitle}`}>購物籃</h4>
      <section
        className={`product-list col col-12 ${styles.productList}`}
        data-total-price={addPrice}
      >
        {productData.map((data) => (
          <Product key={data.id} {...data} onMinusClick={handleMinusClick} onPlusClick={handlePlusClick}/>
        ))}
      </section>
      <CartInfo info={"shipping"} text={"運費"} price={0} />
      <CartInfo info={"total"} text={"小計"} price={addPrice} />
    </div>
  );
}
