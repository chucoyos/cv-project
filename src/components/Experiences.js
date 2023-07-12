import styles from './Experiences.module.css'
const Experiences = ({education, 
  onEducationSubmit, 
  count,
  degree,
  handleDegree,
  city,
  handleCity,
  school,
  handleSchool,
  startDate,
  handleStartDate,
  endDate,
  handleEndDate,
  description,
  handleDescription

}) => {

  const showForm = () => {
    const educationDiv = document.getElementById('educationForm')
    educationDiv.style.display = 'block'
  }

  const toggleCard = () => {
    const toggleDiv = document.getElementById('cardBody')
    const showCard = toggleDiv.style.display === 'block' ? 'none' : 'block'
    toggleDiv.style.display = showCard
  }

  return (
    <div className='App'>
      <div className={styles.experiencesCard}>
        <div className={styles.cardHeader} onClick={toggleCard}>
          <h3 className={styles.cardTitle}><span>{count}</span>🎓️ Education and Qualifications</h3>
        </div>
        <div className={styles.educationList}
              id='education'
              style={{display: 'block'}}
        >
          <ul>
            {
             education.map((edu) => 
             <li key={Math.random()}>
              <hr />
              <div className={styles.inputDuo}>
                <div className={styles.inputGroup}>
                  <h3>{edu.degree}</h3>
                  <p>{edu.startDate} / {edu.endDate}</p>
                </div>
                <div className={styles.editList}>
                  <p>🗑️</p>
                  <p>✏️</p>
                </div>
              </div>
             </li>
             )
            }
          </ul>
        </div>

        {/* dropDown start here */}
        <div id='cardBody' className={styles.cardBody}>
        <div className={styles.dropDown} id='educationForm'>
          <hr />
          <form onSubmit={onEducationSubmit}>
            <div className={styles.inputDuo}>
              <div className={styles.inputGroup}>
                <label>Degree</label>
                <input type='text'
                       placeholder='e.g. Bachelor of Science'
                       value={degree}
                       onChange={handleDegree}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>City/Town</label>
                <input type='text'
                       placeholder='e.g. San Francisco'
                       value={city}
                       onChange={handleCity}
                      />
              </div>
            </div>
            <div className={styles.inputGroup}>
                <label>School</label>
                <input type='text'
                       placeholder='e.g. New York University'
                       value={school}
                       onChange={handleSchool}
                />
            </div>
            <div className={styles.inputDuo}>
              <div className={styles.inputGroup}>
                <label>Start Date</label>
                <input type='date'
                       value={startDate}
                       onChange={handleStartDate}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>End Date</label>
                <input type='date'
                      value={endDate}
                      onChange={handleEndDate}
              />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Description</label>
              <textarea 
                value={description}
                onChange={handleDescription}
              />
            </div>
            <div className={styles.btnGroup}>
              <button className={styles.first}>🗑️ Delete</button>
              <button>💾️ Save</button>
            </div>
          </form>
        </div>  {/* end div id= educationForm */}
        <button className={styles.add} onClick={showForm}><span>+</span>Add another education</button>
        </div>
        {/* end dropDown div here */}
      </div>
    </div>
  );
}

export default Experiences