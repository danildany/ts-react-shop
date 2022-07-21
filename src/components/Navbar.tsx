import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShopCartContext";
import { Cart } from "./Cart";

export function Navbar() {
  const { isOpen, cartQuantity, openCart, closeCart } = useShoppingCart();
  return (
    <div className="navbar-container">
      <div className="nav-links">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/store">Store</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>
      <div className="cart-btn" onClick={() => openCart()}>
        <IconButton aria-label="cart" size="medium">
          <Badge
            overlap="rectangular"
            badgeContent={cartQuantity}
            color="secondary"
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
      {isOpen && <Cart />}
    </div>
  );
}
