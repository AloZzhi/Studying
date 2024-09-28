import React from "react";
import { createContext } from "react";
const { Provider, Consumer } = createContext();

function Son() {
  return (
    <div>
      <h4>Son区域</h4>
       {/* 在需要接收Grandfather的数据的组件中，添加Consumer */}
      <Consumer>
        {(value) => (
          <h4 style={{ backgroundColor: "lightpink" }}>Son接收的{value}</h4>
        )}
      </Consumer>
    </div>
  );
}
function Father() {
  return (
    <div>
      <h3>Father区域</h3>
      <Son></Son>
     
      <Consumer>
        {(value) => (
          <h4 style={{ backgroundColor: "red" }}>Father接收的{value}</h4>
        )}
      </Consumer>
    </div>
  );
}

export default function Grandfather() {
  const data = "Grandfather的数据";

  return (
    <div>
      <h2>Grandfather</h2>
      <Provider value={data}>
        <Father />
      </Provider>
    </div>
  );
}
