import { useState } from 'react'
import 'antd/dist/reset.css'
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import { Outlet, Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Button type="primary">Primary Button</Button>
      <DownOutlined />
      <div className='home'>
        <Link to='/home'>
          <Button type="primary">home</Button></Link>
        <Link to='/about'>
          <Button type="primary">about</Button>
        </Link>
        
        
      </div>
      <Outlet></Outlet>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
