import { BrowserRouter, Routes, Route } from "react-router-dom"
import WrapperRoutes from "./router/index"

export default function App2() {
  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path='/login' element={<h2>登录页</h2>}>
          </Route>
          <Route path='/' element={<Layout />}>
            <Route index element={<Juejin />}></Route>
            <Route index path='/juejin' element={<Juejin />}></Route>
            <Route path='/leetcode' element={<Leetcode />}></Route>
          </Route>


          <Route path='*' element={<h2>Not Found</h2>}></Route>
        </Routes> */}
        <WrapperRoutes></WrapperRoutes>
      </BrowserRouter >
    </div >
  )
}
