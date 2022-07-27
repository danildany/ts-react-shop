import { AddOutlined, RemoveOutlined } from "@material-ui/icons";
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
    <div className="card">
      <div className="imgBx">
        <img src={imgUrl} alt="" />
      </div>

      <div className="contentBx">
        <h2>{name}</h2>

        <div className="size">
          <h3>Price :</h3>
          <span>{formatCurrency(price)}</span>
        </div>

        {quantity === 0 ? (
          <a className="add-btn" onClick={() => increaseCartQuantity(id)}>
            Add To The cart
          </a>
        ) : (
          <>
            <div className="product-controls">
              <div className="quant-desc">
                <button
                  className="minus"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  <RemoveOutlined />
                </button>
                <span className="num">{quantity}</span>

                <button
                  className="plus"
                  onClick={() => increaseCartQuantity(id)}
                >
                  <AddOutlined />
                </button>
              </div>
            </div>
            <a className="remove-btn" onClick={() => removeFromCart(id)}>
              Remove
            </a>
          </>
        )}
      </div>
    </div>
  );
}
