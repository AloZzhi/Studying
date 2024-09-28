// function People({ name, age, saying, active }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h3>{age}</h3>
//       <p>{saying}</p>
//       <p>状态:{active ? "显示中" : "已隐藏"}</p>
//     </div>
//   );
// }

import { useState } from "react";

// export default function List() {
//   return (
//     <div>
//       <h2>List</h2>

//       <People name="姓名1" age={21} saying="座右铭1" active></People>

//       <People name="姓名2" age={22} saying="座右铭2"></People>

//       <People name="姓名3" age={23} saying="座右铭3"></People>
//     </div>
//   );
// }

// 子组件 Child
function Child({ childMood }) {
  const [score, setScore] = useState(false);

  function handleClick() {
    setScore(!score);
    childMood(!score); // 传递新的分数状态给父组件
  }

  return (
    <div
      style={{
        backgroundColor: score ? "blue" : "red",
      }}
    >
      <p>
        {score === false ? (
          <button onClick={handleClick}>没发挥好</button>
        ) : (
          <button onClick={handleClick}>拿了奖状！</button>
        )}
      </p>
    </div>
  );
}

// 父组件 parent
export default function Parent() {
  function comment(status) {
    if (status) {
      console.log("小宝真棒！");
    } else {
      console.log("小宝辛苦了");
    }
  }

  return (
    <div>
      <h2>Parent</h2>
      <Child childMood={comment} />
    </div>
  );
}
