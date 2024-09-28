import Home from "./views/Home";
import About from "./views/About";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">首页</Link> |
        <Link to="/about">关于</Link>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
