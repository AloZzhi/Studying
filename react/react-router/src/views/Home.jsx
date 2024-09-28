import { replace, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  // 编程式导航
  return (
    <div>
      Home
      <p>HomePage</p>
      <button
        onClick={() => {
          navigate("/about/123", { replace: true });
        }}
      >
        goAbout
      </button>
    </div>
  );
}
