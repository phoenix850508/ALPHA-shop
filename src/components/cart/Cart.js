import minus from "../../icons/minus.svg";
import plus from "../../icons/plus.svg";
import product1 from "../../images/product-1.jpg";
import product2 from "../../images/product-2.jpg";
import styles from "../styles/Cart.module.scss";

//count: 0, price: 3999
//count 0, price: 1299

export function Product(props) {
  return (
    <div
      className={`product-container ${styles.productContainer}`}
      data-count={props.count}
      data-price={props.price}
    >
      <img
        className={`img-container ${styles.imgContainer}`}
        src={[props.productImg]}
        alt={props.product}
      />
      <div className={`product-info ${styles.productInfo}`}>
        <div className={`product-name ${styles.productName}`}>
          破壞補丁修身牛仔褲
        </div>
        <div className="product-control-container">
          <div className={`product-control ${styles.productControl}`}>
            <img
              className={`product-action ${styles.productAction}`}
              minus
              src={minus}
              alt="minus.svg"
            />
            <span className={`product-count ${styles.count}`}>
              {props.count}
            </span>
            <img
              className={`product-action ${styles.productAction}`}
              plus
              src={plus}
              alt="plus.svg"
            />
          </div>
        </div>
        <div className={`price ${styles.price}`}>${props.price}</div>
      </div>
    </div>
  );
}

export function CartInfo(props) {
  return (
    <section className={`cart-info ${props.info} ${styles.cartInfo}`}>
      <div className="text">{props.text}</div>
      <div
        className={`cart-price ${styles.cartPrice}`}
        style={{ color: "bold" }}
      >
        {`${props.price}` === "免費" ? `${props.price}` : `$${props.price}`}
      </div>
    </section>
  );
}

export default function Cart() {
  return (
    <div className={styles.cartContainer}>
      <h4 className={`cart-title ${styles.cartTitle}`}>購物籃</h4>
      <section
        className={`product-list col col-12 ${styles.productList}`}
        data-total-price={0}
      >
        <Product
          count={"0"}
          price={"3999"}
          productImg={product1}
          product={"product-1"}
        />
        <Product
          count={"0"}
          price={"1299"}
          productImg={product2}
          product={"product-2"}
        />
      </section>
      <CartInfo info={"shipping"} text={"運費"} price={"免費"} />
      <CartInfo info={"total"} text={"小計"} price={0} />
    </div>
  );
}
