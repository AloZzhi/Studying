import { useState } from "react";

function Child1(props) {
  return <div>哥哥接收到的信息 --- {props.received}</div>;
}

function Child2(props) {
  const score = "小宝考了一百分！";

  return (
    <div>
      小宝---<button onClick={() => props.tellParent(score)}>告诉哥哥</button>
    </div>
  );
}

export default function parent() {
  const [score, setScore] = useState();

  const getData = (data) => {
    setScore(data);
  };

  return (
    <div>
      <h2>parent</h2>
      {console.log({ score })}
      <Child1 received={score}></Child1>
      <Child2 tellParent={getData}></Child2>
    </div>
  );
}
