import './Button.css'
import { Link } from 'react-router-dom'
const Button = () => {
  return(
    <Link to='/general' className="main-button">Create your Resume</Link>
  )
}
export default Button