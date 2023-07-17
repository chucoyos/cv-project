import styles from './Experiences.module.css'
import ExperienceCard from './ExperienceCard'

const Experiences = (props) => {

  const toggleForm = () => {
    const educationDiv = document.getElementById('educationForm')
    const toggleForm = educationDiv.style.display === 'block' ? 'none' : 'block'
    educationDiv.style.display = toggleForm
  }

  const educationList = props.education.map((edu) => 
    <li key={edu.id}>
     <hr />
     <div className={styles.inputDuo}>
       <div className={styles.inputGroup}>
         <h3>{edu.degree}</h3>
         <p>{edu.startDate} / {edu.endDate}</p>
       </div>
       <div className={styles.editList}>
         <button onClick={() =>{props.onEducationDelete(edu.id)}}>🗑️</button>
         <button onClick={() => {props.onEducationEdit(edu.id); toggleForm()}}>✏️</button>
       </div>
     </div>
    </li>
    )

    const interestsList = props.interests.map((interest) =>
    <li key={interest.id}>
      <hr />
      <div className={styles.inputDuo}>
        <div className={styles.inputGroup}>
          <h3>{interest.interest}</h3>
        </div>
        <div className={styles.editList}>
          <button onClick={() =>{props.onInterestDelete(interest.id)}}>🗑️</button>
          <button onClick={() => {props.onInterestEdit(interest.id); toggleForm()}}>✏️</button>
        </div>
      </div>
    </li>
    )

  return(
    <div className='App'>
      {/* Education card */}
      <ExperienceCard
        cardTitle='Education and Qualifications'
        education={props.education}
        onEducationSubmit={props.onEducationSubmit}
        onEducationDelete={props.onEducationDelete}
        degree={props.degree}
        setDegree={props.setDegree}
        handleDegree={props.handleDegree}
        city={props.city}
        setCity={props.setCity}
        handleCity={props.handleCity}
        school={props.school}
        setSchool={props.setSchool}
        handleSchool={props.handleSchool}
        startDate={props.startDate}
        setStartDate={props.setStartDate}
        handleStartDate={props.handleStartDate}
        endDate={props.endDate}
        setEndDate={props.setEndDate}
        handleEndDate={props.handleEndDate}
        onEducationEdit={props.onEducationEdit}
        description={props.description}
        setDescription={props.setDescription}
        handleDescription={props.handleDescription}
        count={props.education.length}
        list={educationList}
        experienceName='education'
        cardBody='educationCardBody'
        toggleForm={toggleForm}
        divId='educationCard'
      >
        
         
        
        
      </ExperienceCard>

      {/* ==========Interests Card ============ */}
      <ExperienceCard
        cardTitle='Interests'
        interests={props.interests}
        education={props.education}
        count={props.interests.length}
        list={interestsList}
        toggleForm={toggleForm}
        divId='interestsCard'
      >

      </ExperienceCard>
    </div>
  )
}

export default Experiences