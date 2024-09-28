import { createContext } from "react";

const { Provider, Consumer } = createContext();

function Son() {
  return (
    <div>
      <p>Son</p>

      <GrandSon></GrandSon>
    </div>
  );
}

function GrandSon() {
  return (
    <div>
      GrandSon
      <Consumer>{(value) => <h4>{value}</h4>}</Consumer>
    </div>
  );
}

export default function parent() {
  const msg = "parent 的数据";

  return (
    <div>
      <h2>parent</h2>

      <Provider value={msg}>
        儿子数据：<Son></Son>
       
      </Provider>
    </div>
  );
}
