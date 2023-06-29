import Product from "./Product";

export default function Dashboard(props) {
  const { data, addCart, setAddCart, count, setCount, setDisable, disable } = {
    ...props,
  };

  return (
    <div className="dashboard">
      <Product
        addCart={addCart}
        setAddCart={setAddCart}
        data={data}
        count={count}
        setCount={setCount}
        disable={disable}
        setDisable={setDisable}
      />
    </div>
  );
}
