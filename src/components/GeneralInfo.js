import './GeneralInfo.css'
import Button from './Button'
const GeneralInfo = ({name, 
  last, 
  email, 
  phone, 
  address, 
  zip, 
  city, 
  handleName, 
  handleLast,
  handleEmail,
  handlePhone,
  handleAddress,
  handleZip,
  handleCity 
}) => {
  return(
    <div className='App'>
      <div className='form-card'>
        <p className='form-title'>Personal details</p>
        <form>
          <div className='form-group'>
            <p className="camera">📷️</p>
            <div className='section-group'>
              <div className="input-group">
                <label htmlFor='first'>Name</label>
                <input type='text' 
                      value={name} 
                      onChange={handleName}/>
              </div>
              <div className="input-group">
                <label htmlFor='last'>Last</label>
                <input type='text' 
                       value={last}
                       onChange={handleLast}/>
              </div>
            </div>
          </div>

          <div className='input-duo'>
            <div className="input-group">
              <label htmlFor='first'>Email address</label>
              <input type='text' value={email} onChange={handleEmail}/>
            </div>
            <div className="input-group">
              <label htmlFor='last'>Phone number</label>
              <input type='text' value={phone} onChange={handlePhone}/>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor='first'>Address</label>
            <input type='text' value={address} onChange={handleAddress}/>
          </div>

          <div className='input-duo'>
            <div className="input-group">
              <label htmlFor='first'>Zip code</label>
              <input type='text' value={zip} onChange={handleZip}/>
            </div>
            <div className="input-group">
              <label htmlFor='last'>City/Town</label>
              <input type='text' value={city} onChange={handleCity}/>
            </div>
          </div>
          
        </form>
      </div>
      <Button text='Next step ﹥' path='/cv-project/experiences'/>
    </div>
  )
}

export default GeneralInfo