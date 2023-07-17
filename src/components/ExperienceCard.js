import styles from './Experiences.module.css'
const ExperienceCard = (props) => {
  
  const toggleForm = () => {
    const educationDiv = document.getElementById('educationForm')
    const toggleForm = educationDiv.style.display === 'block' ? 'none' : 'block'
    educationDiv.style.display = toggleForm
  }

  const toggleCard = () => {
    const toggleDiv = document.getElementById('cardBody')
    const showCard = toggleDiv.style.display === 'block' ? 'none' : 'block'
    toggleDiv.style.display = showCard
  }
  
  return(
    <div className={styles.experiencesCard}>
        <div className={styles.cardHeader} onClick={toggleCard}>
          <h3 className={styles.cardTitle}>
            {props.count > 0 &&<span>{props.count}</span>}
            🎓️ {props.cardTitle}
          </h3>
        </div>

        {/* Start experiences list */}
        <div className={styles.educationList}
              id='education'
              style={{display: 'block'}}
        >
          <ul>
            {props.list}
          </ul>
        </div>

        {/* End experience list */}
        {/* Start Card body */}
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
        <button className={styles.add} onClick={toggleForm}><span>+</span>Add another {props.experienceName}</button>
        </div>

        {/* End Card body */}

        {props.children}   
    </div>
  ) 
}

export default ExperienceCard