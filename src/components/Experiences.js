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
  return (
    <div className='App'>
      <div className={styles.experiencesCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}><span>{count}</span>🎓️ Education and Qualifications</h3>
        </div>
          <hr />
        <div className={styles.dropDown}>
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
            <button className={styles.add}><span>+</span>Add another education</button>
          </form>
        </div>
  
      </div>
    </div>
  );
}

export default Experiences