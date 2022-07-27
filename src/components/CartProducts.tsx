import { AddOutlined, RemoveOutlined } from "@material-ui/icons";
import { useShoppingCart } from "../context/ShopCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
type CartProductProps = {
  id: number;
  quantity: number;
};

export function CartProduct({ id, quantity }: CartProductProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const items = storeItems.find((i) => i.id === id);
  return (
    <div className="product">
      <img src={items?.imgUrl} className="cart-product-image" />
      <div className="item-desc">
        <div className="flex top">
          <h5>{items?.name}</h5>
          <h4>{formatCurrency(items?.price || 0)}</h4>
        </div>
        <div className="flex-bottom">
          <div className="quant-desc">
            <button className="minus" onClick={() => decreaseCartQuantity(id)}>
              <RemoveOutlined />
            </button>
            <span className="num">{quantity}</span>

            <button className="plus" onClick={() => increaseCartQuantity(id)}>
              <AddOutlined />
            </button>
          </div>
          <button
            type="button"
            className="remove-item"
            onClick={() => removeFromCart(id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
}
