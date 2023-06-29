export default function Product(props) {
  const { setAddCart, data, addCart, count, setCount, setDisable, disable } = {
    ...props,
  };

  //hàm sẽ được gọi mỗi khi click button > add những item dc click vào state
  const handleClick = (idP) => {
    const filterBuy = data.filter((item) => item.id == idP); // dấu == fix lỗi ko add item nào vào array (lúc trước em để ===)
    setAddCart([...addCart, filterBuy]); //spread operator sẽ lưu trữ những item được add trước đó
  };

  //truyền 2 state count và disable vào product

  //event increase cho button +
  const increase = (index) => {
    count[index]++; //state count sẽ ++ đối với count của index mà button + truyền vào
    setCount([...count]); //lưu trữ giá trị count
    disable[index] = false; //state disable sẽ ++ đối với disable của index và button + truyền vào
    setDisable([...disable]);
  };

  const decrease = (index) => {
    if (count[index] > 1) {
      //nếu số > 1 thì trừ bình thường
      count[index]--;
      setCount([...count]);
      disable[index] = false;
      setDisable([...disable]);
    } else {
      count[index] = 0; // nếu số < 0
      setCount([...count]);
      disable[index] = true; // thì quy định button sẽ ko bấm dc nữa khi state disable của index dc chọn là true
      setDisable([...disable]);
    }
  };

  return data.map((item, i) => (
    <div className="product" key={item.id}>
      <img src={item.url} alt="" />
      <div className="caption-cont">
        <span className="product-name">{item.name}</span>
        <span className="product-price">{item.price}</span>
        <button
          className="buy-btn"
          value={item.id}
          onClick={(e) => {
            let v = e.target.value;
            handleClick(v);
          }}
        >
          Buy now
        </button>
        <div className="countBtn-holder d-flex gap-5 justify-content-around">
          <button
            className="count-btn"
            disabled={disable[i]}
            onClick={() => decrease(i)}
          >
            -
          </button>
          <span className="numberitem">{count[i]}</span>
          <button className="count-btn" onClick={() => increase(i)}>
            +
          </button>
        </div>
      </div>
    </div>
  ));
}
