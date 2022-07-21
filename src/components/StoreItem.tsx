import { useShoppingCart } from "../context/ShopCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {
  const {
    removeFromCart,
    decreaseCartQuantity,
    increaseCartQuantity,
    getItemQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="product-box">
      <h1>{name}</h1>
      <img src={imgUrl} alt="" />
      <h3>{formatCurrency(price)}</h3>
      {quantity === 0 ? (
        <div className="add-btn">
          <button onClick={() => increaseCartQuantity(id)}>
            Add To The cart
          </button>
        </div>
      ) : (
        <>
          <div className="product-controls">
            <button onClick={() => increaseCartQuantity(id)}>+</button>
            <div>{quantity}</div>
            <button onClick={() => decreaseCartQuantity(id)}>-</button>
          </div>
          <div className="remove-btn">
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        </>
      )}
    </div>
  );
}
