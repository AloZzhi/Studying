import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div style={{ height: '100vh' }}>

      <div>
        <header style={{ height: "60px", background: '#ddd' }}></header>
      </div>

      <div className="contain" style={{ display: 'flex', height: '100vh' }}>
        <div className="menu" style={{ width: '200px', backgroundColor: 'lightblue', height: "100vh" }}>
          <div><Link to='/'>掘金</Link></div>
          <div><Link to='/leetcode'>力扣</Link></div>
        </div>
        <div className="content" style={{ flex: '1' }}>

          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
