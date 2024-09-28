import { useState } from "react";

function Brother1(props) {
  const BroMsg = "你哥的值";
  return (
    <div>
      Brother1
      <button
        onClick={() => {
          props.getBro1(BroMsg);
        }}
      >
        给你弟传值
      </button>
    </div>
  );
}

function Brother2(props) {
  return (
    <div>
      Brother2------
      {props.msg}
    </div>
  );
}

export default function Parent() {
  const [xinXi, setXinXi] = useState();
  const getData = (data) => {
    setXinXi(data);
  };
  return (
    <div>
      Parent
      <Brother1 getBro1={getData}></Brother1>
      <Brother2 msg={xinXi}></Brother2>
    </div>
  );
}
