import './GeneralInfo.css'
import Button from './Button'
const GeneralInfo = (props) => {
  return(
    <div className='App'>
      <div className='form-card'>
        <p className='form-title'>Personal details</p>
        <form >
          <div className='form-group'>
            <p className="camera">📷️</p>
            <div className='section-group'>
              <div className="input-group">
                <label htmlFor='first'>Name</label>
                <input type='text' />
              </div>
              <div className="input-group">
                <label htmlFor='last'>Last</label>
                <input type='text' />
              </div>
            </div>
          </div>

          <div className='input-duo'>
            <div className="input-group">
              <label htmlFor='first'>Email address</label>
              <input type='text' />
            </div>
            <div className="input-group">
              <label htmlFor='last'>Phone number</label>
              <input type='text' />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor='first'>Address</label>
            <input type='text' />
          </div>

          <div className='input-duo'>
            <div className="input-group">
              <label htmlFor='first'>Zip code</label>
              <input type='text' />
            </div>
            <div className="input-group">
              <label htmlFor='last'>City/Town</label>
              <input type='text' />
            </div>
          </div>
          <div className='btn-group'>
            <button>Delete 🗑️</button>
            <input type='submit' value='Save 💾️'/>
          </div>
        </form>
      </div>
      <Button text='Next step ﹥' path='/'/>
    </div>
  )
}

export default GeneralInfo