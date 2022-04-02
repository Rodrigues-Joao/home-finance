import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login/Login';
import Home from './pages/home/Home';
import './styles/global.scss'
import './styles/input.scss'
function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
