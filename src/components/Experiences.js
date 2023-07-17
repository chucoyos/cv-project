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

    const educationForm = <form onSubmit={props.onEducationSubmit}>
            <div className={styles.inputDuo}>
              <div className={styles.inputGroup}>
                <label>Degree</label>
                <input type='text'
                       name='degree'
                       placeholder='e.g. Bachelor of Science'
                       value={props.degree}
                       onChange={props.handleDegree}
                       required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>City/Town</label>
                <input type='text'
                       placeholder='e.g. San Francisco'
                       value={props.city}
                       onChange={props.handleCity}
                       required
                      />
              </div>
            </div>
            <div className={styles.inputGroup}>
                <label>School</label>
                <input type='text'
                       placeholder='e.g. New York University'
                       value={props.school}
                       onChange={props.handleSchool}
                       required
                />
            </div>
            <div className={styles.inputDuo}>
              <div className={styles.inputGroup}>
                <label>Start Date</label>
                <input type='date'
                       value={props.startDate}
                       onChange={props.handleStartDate}
                       required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>End Date</label>
                <input type='date'
                      value={props.endDate}
                      onChange={props.handleEndDate}
                      required
              />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Description</label>
              <textarea 
                value={props.description}
                onChange={props.handleDescription}
              />
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.first} type='button' onClick={() => {
                props.setDegree('')
                props.setCity('')
                props.setSchool('')
                props.setStartDate('')
                props.setEndDate('')
                props.setDescription('')
                props.toggleForm()
              }}>🗑️ Delete</button>
              <button type='submit'>💾️ Save</button>
            </div>
          </form>

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
        form={educationForm}
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