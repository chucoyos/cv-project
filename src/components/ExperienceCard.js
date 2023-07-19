import styles from './Experiences.module.css'
const ExperienceCard = (props) => {
  const toggleCard = () => {
    const toggleCard = document.getElementById(props.divId)
    const cardStyle = toggleCard.style.display === 'block' ? 'none' : 'block'
    toggleCard.style.display = cardStyle
  }

  const toggleForm = () => {
    const formContainer = document.getElementById(props.formId)
    const toggleStyle = formContainer.style.display === 'block' ? 'none' : 'block'
    formContainer.style.display = toggleStyle
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




        <div id={props.divId} className={styles.cardBody}>
        <div className={styles.dropDown} id={props.formId}>
          <hr />
          {/* Form goes here */}
          {props.form}
          
        </div>  {/* end div id= educationForm */}
        <button className={styles.add} onClick={toggleForm}><span>+</span>Add another {props.experienceName}</button>
        </div>

        {/* End Card body */}

    </div>
  ) 
}

export default ExperienceCard