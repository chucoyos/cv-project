import Button from './Button'
import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
const Nav = () => {
  const location = useLocation()
  return(
    <nav className='Nav'>
      <ul className='nav-list'>
        <li className="nav-brand"><Link to='/'><span>cv</span>project</Link></li>
        <li>Create Resume</li>
        <li>Resume Templates</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      { location.pathname === '/' ?
        <>
          <h1>Create your professional Resume with CV project</h1>
          <p className='subtitle'>Create your own professional resume and download it</p>
          <Button /> 
        </> : <h2 className='subtitle'>Personal Details</h2>
      }
    </nav>
  )
}

export default Nav