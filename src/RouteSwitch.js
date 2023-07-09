import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import GeneralInfo from "./components/GeneralInfo"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Experiences from "./components/Experiences"
import DecorationBar from "./components/DecorationBar"
import { Children, useState } from "react"
const RouteSwitch = () => {

  const [name, setName] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')

  const [education, setEducation] = useState([])

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleLast = (e) => {
    setLast(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleZip = (e) => {
    setZip(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }


  return(
    <BrowserRouter>
      <Nav>
        
      </Nav>
      <DecorationBar />
      <Routes>
        <Route  path='/cv-project' element={<App />}/>
        <Route  path='/cv-project/general'
                element={<GeneralInfo 
                name={name}
                last={last}
                email={email}
                phone={phone}
                address={address}
                zip={zip}
                city={city}
                handleName={handleName}
                handleLast={handleLast}
                handleEmail={handleEmail}
                handlePhone={handlePhone}
                handleAddress={handleAddress}
                handleZip={handleZip}
                handleCity={handleCity}
              />}/>
        <Route path='/cv-project/experiences' element={<Experiences count={education.length}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch