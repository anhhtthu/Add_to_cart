import { useContext, useEffect, useState } from "react";
import themeContext from "./context/themeContext";
export default function Header(props) {
  const {
    input,
    onSetInputChange,
    onSetPDataChange,
    data,
    addCart,
    sumNewCount,
  } = {
    ...props,
  };
  //gọi thêm 1 state để cập nhật số lượng add to cart
  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    total(); //ban đầu em dùng setCountCart ở đây thì mỗi lần render useEffect đều chạy dù em có set deps
  }, [addCart]);

  //sửa lỗi trên bằng cách gọi hàm riêng, dùng state trong hàm này, tách khỏi useEffect
  const total = () => {
    // for (let i = 0; i < addCart.length; i++) {
    //   totalVal += 1;
    // }
    setCountCart(sumNewCount);
  };
  // chỉnh lại hàm total như trên để giỏ hàng hiển thị những giá trị cộng trừ product

  const filterText = (name) => {
    const result = data.filter(
      (item) =>
        item.name
          .toLowerCase()
          .toUpperCase()
          .indexOf(name.toLowerCase().toUpperCase()) >= 0 ||
        item.price.indexOf(name) >= 0
    );
    onSetPDataChange(result);
  };

  const themeCtx = useContext(themeContext);

  return (
    <div
      className="header"
      style={{
        backgroundColor: themeCtx.theme == "light" ? "#d4ebf2" : "black",
        color: themeCtx.theme === "light" ? "black" : "white",
      }}
    >
      <div className="head-left-item">
        <h3 className="logo">Roboto</h3>
        <h5 className="deliver">Deliver to Vietnam</h5>
      </div>
      <div className="head-center-item">
        <input
          type="text"
          value={input}
          className="searchBar"
          placeholder="What are you looking for?"
          onChange={(e) => {
            let v = e.target.value;
            onSetInputChange(v);
            filterText(v);
          }}
        />
        <button className="searchBtn">
          <i class="fi fi-rr-search"></i>
        </button>
      </div>
      <div className="head-right-item">
        <button className="notbtn account">Account</button>
        <button className="notbtn return">Return & Orders</button>
        <div className="cart-holder">
          <i class="fi fi-rr-shopping-cart" style={{ fontSize: "1.5rem" }}></i>
          <h5 className="cart">Cart</h5>
          <span
            className="count-cart"
            style={{ marginLeft: "7px", fontSize: "1.2rem" }}
          >
            {countCart}
          </span>
        </div>
      </div>
    </div>
  );
}
