import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import GeneralInfo from "./components/GeneralInfo"
import Nav from "./components/Nav"
import { useState } from "react"
const RouteSwitch = () => {
  const personalDetails = useState({
    name: 'Your first name here',
    last: 'Your last name here'
  })

  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/general' element={<GeneralInfo details={personalDetails}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch