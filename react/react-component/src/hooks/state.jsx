import { useEffect, useState } from "react";

export default function State() {
  const [age, setAge] = useState(123);
  const [count, SetCount] = useState(1);
  const [num, SetNum] = useState(1999);

  useEffect(() => {
    console.log(`点击了${count}次`);
  }, [count, age]);

  useEffect(() => {
    const timer = setInterval(() => {
      num + 1;
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h2
        onClick={() => {
          setAge(age + 1);
        }}
      >
        {age}
      </h2>

      <button
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        {count}
      </button>

      <h3
        onClick={() => {
          SetNum(num + 1);
        }}
      >
        {num}
      </h3>
    </div>
  );
}
