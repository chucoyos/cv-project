import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import GeneralInfo from "./components/GeneralInfo"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Experiences from "./components/Experiences"
import DecorationBar from "./components/DecorationBar"
import { useState } from "react"
import uniqid from 'uniqid'

const RouteSwitch = () => {

  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    last: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: ''
  })
 

  const [education, setEducation] = useState([])

  const [degree, setDegree] = useState('')
  const [city, setCity] = useState('')
  const [school, setSchool] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')

  const handleDegree = (e) => {
    setDegree(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }
  const handleSchool = (e) => {
    setSchool(e.target.value)
  }
  const handleStartDate = (e) => {
    setStartDate(e.target.value)
  }
  const handleEndDate = (e) => {
    setEndDate(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const onEducationSubmit = (e) => {
    e.preventDefault()
    setEducation([...education, {
      degree: degree,
      city: city,
      school: school,
      startDate: startDate,
      endDate: endDate,
      description: description,
      id: uniqid()
    }])
    setDegree('')
    setCity('')
    setSchool('')
    setStartDate('')
    setEndDate('')
    setDescription('')
    // set display to none to div id='education'
    const educationDiv = document.getElementById('educationForm')
    educationDiv.style.display = 'none'
  }

  const onEducationDelete = (id) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }
  return(
    <BrowserRouter>
      <Nav />
      <DecorationBar />
      <Routes>
        <Route  path='/cv-project' element={<App />}/>
        <Route  path='/cv-project/general'
                element={<GeneralInfo 
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
                />
              }/>
        <Route  path='/cv-project/experiences' element={<Experiences 
                count={education.length}
                degree={degree}
                handleDegree={handleDegree}
                city={city}
                handleCity={handleCity}
                school={school}
                handleSchool={handleSchool}
                startDate={startDate}
                handleStartDate={handleStartDate}
                endDate={endDate}
                handleEndDate={handleEndDate}
                description={description}
                handleDescription={handleDescription}
                education={education}
                onEducationSubmit={onEducationSubmit}
                onEducationDelete={onEducationDelete}
                />}
              />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch