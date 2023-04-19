/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-04-19 09:26:32
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-04-19 12:41:50
 * @FilePath: \react-learn-manager\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 路由懒加载
import react, { lazy } from 'react'
// const Home = lazy(() => import('@/views/Home'))
import App from '../App'
import Home from '@/views/Home'
import About from '@/views/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// router style  history:BrowserRouter, Hash:HashRouter

// const baseRouter = () => {
    // 内部有逻辑写法
//     return()
// }
// 路由懒加载函数
const lazyLoadingComponent = (component: JSX.Element) => (
    <react.Suspense fallback={ <div>Loading...</div> }>
        { component }
    </react.Suspense>
)
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter