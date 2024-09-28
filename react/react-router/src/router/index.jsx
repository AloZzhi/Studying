import { useRoutes } from 'react-router-dom'
import Layout from '../pages/Layout'
import Juejin from '../pages/Juejin'
import LeetCode from '../pages/LeetCode'

const routes = [
  {
    path: '/login',
    element: '<h2>登录页面</h2>'
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Juejin />,
      },
      {
        path: '/leetcode',
        element: <LeetCode />,
      },
    ]
  },
  {
    path: '*',
    element: '<h2>NOT FOUND</h2>'
  },
]

function WrapperRoutes() {
  let element = useRoutes(routes)
  return element
}

export default WrapperRoutes