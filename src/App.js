import "./App.css";
import { useState } from "react";
import themeContext from "./component/context/themeContext";
import Header from "./component/Header";
import data from "./data.json";
import Dashboard from "./component/Dashboard";
import Menu from "./component/Menu";
import CountItem from "./component/CountItem";

function App() {
  const [pData, setPData] = useState(data);
  const [input, setInput] = useState("");
  const [addCart, setAddCart] = useState([]); //gọi state chứa item mỗi khi click button
  const [cTheme, setCTheme] = useState({ theme: "light" });
  const [count, setCount] = useState(pData.map((item) => 0)); //gọi state map qua list data product, chuyển các element trong array thành giá trị mặc định 0
  const [disable, setDisable] = useState(pData.map((item) => false)); //như trên, chuyên element bên trong thành giá trị false

  // filter qua state count đã được click, lọc lấy những giá trị > 0 (là những index đã được cộng hoặc trừ)
  console.log(count);
  const newCount = count.filter((item) => item > 0);

  // cộng những số trong array đã được lọc chuyển thành 1 number
  let sumNewCount = 0; // truyền biến đã được cộng số lượng tới header
  for (let i = 0; i < newCount.length; i++) {
    sumNewCount += newCount[i];
  }

  console.log(sumNewCount);

  const cThemeBtnLight = () => {
    return (
      <button type="" onClick={() => setCTheme({ theme: "light" })}>
        <span>Light</span>
      </button>
    );
  };

  const cThemeBtnDark = () => {
    return (
      <button type="" onClick={() => setCTheme({ theme: "dark" })}>
        <span>Dark</span>
      </button>
    );
  };

  return (
    <themeContext.Provider value={cTheme}>
      <div className="App">
        {cThemeBtnLight()}
        {cThemeBtnDark()}
        <header className="App-header">
          <Header
            input={input}
            onSetInputChange={setInput}
            onSetPDataChange={setPData}
            data={data}
            addCart={addCart}
            sumNewCount={sumNewCount}
          />
          <CountItem data={pData} />
          <div className="main">
            <Menu data={data} setPData={setPData} />
            <Dashboard
              data={pData}
              input={input}
              addCart={addCart}
              setAddCart={setAddCart}
              count={count}
              setCount={setCount}
              disable={disable}
              setDisable={setDisable}
            />
          </div>
        </header>
      </div>
    </themeContext.Provider>
  );
}

export default App;
