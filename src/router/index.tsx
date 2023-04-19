/*
 * @Author: humengchuan 531537052@qq.com
 * @Date: 2023-04-19 09:26:32
 * @LastEditors: humengchuan 531537052@qq.com
 * @LastEditTime: 2023-04-19 09:37:37
 * @FilePath: \react-learn-manager\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import App from '../App'
import Home from '@/views/Home'
import About from '@/views/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// router style  history:BrowserRouter, Hash:HashRouter

// const baseRouter = () => {
    // 内部有逻辑写法
//     return()
// }
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