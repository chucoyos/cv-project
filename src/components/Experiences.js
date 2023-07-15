import styles from './Experiences.module.css'
import ExperienceCard from './ExperienceCard'

const Experiences = (props) => {
  const toggleForm = () => {
    const educationDiv = document.getElementById('educationForm')
    const toggleForm = educationDiv.style.display === 'block' ? 'none' : 'block'
    educationDiv.style.display = toggleForm
  }

  return(
    <div className='App'>
      <ExperienceCard 
        count={props.education.length}
        cardTitle={'Education and Qualifications'}
        >
        <div className={styles.educationList}
              id='education'
              style={{display: 'block'}}>
          <ul>
            {
             props.education.map((edu) => 
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
            }
          </ul>

          {/* dropDown start here */}
        <div id='cardBody' className={styles.cardBody}>
        <div className={styles.dropDown} id='educationForm'>
          <hr />

          <form onSubmit={props.onEducationSubmit}>
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
                toggleForm()
              }}>🗑️ Delete</button>
              <button type='submit'>💾️ Save</button>
            </div>
          </form>
        </div>  {/* end div id= educationForm */}
        <button className={styles.add} onClick={toggleForm}><span>+</span>Add another education</button>
        </div>
        {/* end dropDown div here */}


        </div>
        
      </ExperienceCard>
    </div>
  )
}

export default Experiences