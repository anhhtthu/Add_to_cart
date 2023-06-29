import menu from "../menu.json";
import { useState } from "react";
export default function Menu(props) {
  const { data, setPData } = { ...props };
  const [filterCheck, setFilterCheck] = useState([]);

  const handleClick = (title) => {
    let result = data.filter((item) => item.name.indexOf(title) >= 0);
    setPData(result);
  };

  const handleCheck = (e) => {
    let checked = e.target.checked;
    let defaultValue = e.target.defaultValue;
    console.log(checked, defaultValue);

    let newFilter = filterCheck;
    if (checked) {
      newFilter.push(defaultValue);
      setFilterCheck(newFilter);
    } else {
      newFilter.splice(defaultValue, 1);
      setFilterCheck(newFilter);
    }
    console.log(newFilter);

    if (filterCheck.length === 0) {
      setPData(data);
    } else {
      let fData = data.filter((item) => {
        let newTitle = item.name.split(" ");
        let rs = false;
        newTitle.forEach((title) => {
          if (filterCheck.indexOf(title) >= 0) {
            rs = true;
          }
        });
        return rs;
      });
      setPData(fData);
    }
    console.log(newFilter);
  };

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="filter-cont">
          <input
            value={item.title}
            type="checkbox"
            className="filter-check"
            onChange={handleCheck}
          ></input>
          <button
            className="filter-btn"
            onClick={(e) => handleClick(item.title)}
          >
            {item.title}
          </button>
        </div>
      ))}
    </div>
  );
}
