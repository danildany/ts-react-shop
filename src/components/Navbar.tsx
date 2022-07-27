import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShopCartContext";
import { Cart } from "./Cart";

export function Navbar() {
  const { isOpen, cartQuantity, openCart, closeCart } = useShoppingCart();
  return (
    <div className="navbar-container">
      <p className="logo">BUY</p>
      <div className="nav-links">
        <Link className="btn-link" to="/">
          Home
        </Link>

        <Link className="btn-link" to="/store">
          Store
        </Link>

        <Link className="btn-link" to="/about">
          About
        </Link>
      </div>
      <div className="cart-btn" onClick={() => openCart()}>
        <IconButton aria-label="cart" size="medium">
          <Badge
            overlap="rectangular"
            badgeContent={cartQuantity}
            color="primary"
          >
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
      {isOpen && <Cart />}
    </div>
  );
}
