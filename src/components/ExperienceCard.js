import styles from './Experiences.module.css'
const ExperienceCard = (props) => {

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
        {props.children}   
    </div>
  ) 
}

export default ExperienceCard