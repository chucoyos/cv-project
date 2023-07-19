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

  const [generalInfo, setGeneralInfo] = useState({})
  const [education, setEducation] = useState([])
  const [interests, setInterests] = useState([])
  const [interest, setInterest] = useState('')
  const [degree, setDegree] = useState('')
  const [city, setCity] = useState('')
  const [school, setSchool] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [workExperience, setWorkExperience] = useState([{
    jobTitle: 'Software Engineer',
    companyCity: 'San Francisco, CA',
    company: 'Google',
    workStartDate: '2019-01-01',
    workEndDate: '2021-01-01',
    workDescription: 'I worked as a software engineer at Google for 2 years.',
    id: uniqid()
  }])
  const [jobTitle, setJobTitle] = useState('')
  const [companyCity, setCompanyCity] = useState('')
  const [company, setCompany] = useState('')
  const [workStartDate, setWorkStartDate] = useState('')
  const [workEndDate, setWorkEndDate] = useState('')
  const [workDescription, setWorkDescription] = useState('')

  const handleInterest = (e) => {
    setInterest(e.target.value)
  }
  const onInterestSubmit = (e) => {
    e.preventDefault()
    setInterests([...interests, {id: uniqid(), interest: interest}])
    setInterest('')
    const interestDiv = document.getElementById('interestForm')
    interestDiv.style.display = 'none'
  }
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
    const educationDiv = document.getElementById('educationForm')
    educationDiv.style.display = 'none'
  }

  const onEducationDelete = (id) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }
  const onEducationEdit = (id) => {
    const edu = education.find((edu) => edu.id === id)
    setDegree(edu.degree)
    setCity(edu.city)
    setSchool(edu.school)
    setStartDate(edu.startDate)
    setEndDate(edu.endDate)
    setDescription(edu.description)
    onEducationDelete(id)
  }

  const onInterestDelete = (id) => {
    setInterests(interests.filter((interest) => interest.id !== id ))
  }
  const onInterestEdit = (id) => {
    const interest = interests.find((interest) => interest.id === id)
    setInterest(interest.interest)
    onInterestDelete(id)
  }
  const onWorkExperienceDelete = (id) => {
    setWorkExperience(workExperience.filter((work) => work.id !== id))
  }
  const onWorkExperienceEdit = (id) => {
    const work = workExperience.find((work) => work.id === id)
    setJobTitle(work.jobTitle)
    setCompanyCity(work.companyCity)
    setCompany(work.company)
    setWorkStartDate(work.workStartDate)
    setWorkEndDate(work.workEndDate)
    setWorkDescription(work.workDescription)
    onWorkExperienceDelete(id)
  }
  const handleJobTitle = (e) => {
    setJobTitle(e.target.value)
  }
  const handleCompanyCity = (e) => {
    setCompanyCity(e.target.value)
  }
  const handleCompany = (e) => {
    setCompany(e.target.value)
  }
  const handleWorkStartDate = (e) => {
    setWorkStartDate(e.target.value)
  }
  const handleWorkEndDate = (e) => {
    setWorkEndDate(e.target.value)
  }
  const handleWorkDescription = (e) => {
    setWorkDescription(e.target.value)
  }
  const onWorkExperienceSubmit = (e) => {
    e.preventDefault()
    setWorkExperience([...workExperience, {
      jobTitle: jobTitle,
      companyCity: companyCity,
      company: company,
      workStartDate: workStartDate,
      workEndDate: workEndDate,
      workDescription: workDescription,
      id: uniqid()
    }])
    setJobTitle('')
    setCompanyCity('')
    setCompany('')
    setWorkStartDate('')
    setWorkEndDate('')
    setWorkDescription('')
    const workDiv = document.getElementById('workExperienceForm')
    workDiv.style.display = 'none'
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
                onEducationEdit={onEducationEdit}
                setDegree={setDegree}
                setCity={setCity}
                setSchool={setSchool}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setDescription={setDescription}
                interests={interests}
                interest={interest}
                setInterest={setInterest}
                handleInterest={handleInterest}
                onInterestSubmit={onInterestSubmit}
                onInterestDelete={onInterestDelete}
                onInterestEdit={onInterestEdit}
                workExperience={workExperience}
                onWorkExperienceDelete={onWorkExperienceDelete}
                jobTitle={jobTitle}
                handleJobTitle={handleJobTitle}
                companyCity={companyCity}
                company={company}
                workStartDate={workStartDate}
                workEndDate={workEndDate}
                workDescription={workDescription}
                onWorkExperienceEdit={onWorkExperienceEdit}
                onWorkExperienceSubmit={onWorkExperienceSubmit}
                handleCompanyCity={handleCompanyCity}
                handleCompany={handleCompany}
                handleWorkStartDate={handleWorkStartDate}
                handleWorkEndDate={handleWorkEndDate}
                handleWorkDescription={handleWorkDescription}
                setJobTitle={setJobTitle}
                setCompanyCity={setCompanyCity}
                setCompany={setCompany}
                setWorkStartDate={setWorkStartDate}
                setWorkEndDate={setWorkEndDate}
                setWorkDescription={setWorkDescription}
                />}
              />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch