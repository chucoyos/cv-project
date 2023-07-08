import styles from './Experiences.module.css'
const Experiences = ({name, last, count}) => {
  return (
    <div className='App'>
      <div className={styles.experiencesCard}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}><span>{count}</span>🎓️ Education and Qualifications</h3>
        </div>
          <hr />
        <div className={styles.dropDown}>
          <form>
            <div className={styles.inputDuo}>
              <div className={styles.inputGroup}>
                <label>Degree</label>
                <input type='text' />
              </div>
              <div className={styles.inputGroup}>
                <label>City/Town</label>
                <input type='text' />
              </div>
            </div>
            <div className={styles.inputGroup}>
                <label>School</label>
                <input type='text' />
            </div>
            <div className={styles.inputDuo}>
              <div className={styles.inputGroup}>
                <label>Start Date</label>
                <input type='date' />
              </div>
              <div className={styles.inputGroup}>
                <label>End Date</label>
                <input type='date' />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Description</label>
              <textarea />
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