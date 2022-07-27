import { ArrowBackOutlined } from "@material-ui/icons";
import { useShoppingCart } from "../context/ShopCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartProduct } from "./CartProducts";
import storeItems from "../data/items.json";
export function Cart() {
  const { closeCart, cartQuantity, cartItems } = useShoppingCart();
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <div className="head-cart">
          <button
            type="button"
            className="back-cart"
            onClick={() => closeCart()}
          >
            <ArrowBackOutlined />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({cartQuantity} items)</span>
          </button>
        </div>

        <div className="product-container">
          {cartItems.map((item, index) => (
            <CartProduct key={index} {...item} />
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Buy now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
