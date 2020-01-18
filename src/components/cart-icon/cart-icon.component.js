import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../reducer/cart/cart.actions";
import { selectCartItemsCount } from "../../reducer/cart/cart.selectors";

import "./cart-icon.styles.scss";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispath => ({
  toggleCartHidden: () => dispath(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
