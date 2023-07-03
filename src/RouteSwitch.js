import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import General from "./components/General"
import Nav from "./components/Nav"
const RouteSwitch = () => {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/general' element={<General />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch