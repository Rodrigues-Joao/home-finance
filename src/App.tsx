import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import InsertCosts from './pages/costs/insert/Insert'
import TotalGraphic from './components/graphics/TotalGraphic'

import './styles/global.scss'
import './styles/input.scss'
function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-costs" element={<InsertCosts />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
