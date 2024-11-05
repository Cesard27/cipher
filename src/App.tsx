import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Alphabet } from './components/alphabet';

export const App = () => {
  const [numberKey, setNumberKey] = useState<number>();

  const onsubmit = () => {
    console.log(numberKey)

  }

  return (
    <div>
      <form onSubmit = {(event) => {event.preventDefault(); onsubmit}}>
        <div className='container text-center'>
            <div className='row align-items-start'>

              <div className='col-3'>
                <div className="input-group mb-1 ">

                  <span 
                    className="input-group-text field-shift" 
                    id="basic-addon1"                    
                  >#</span>

                  <input 
                    type="number" 
                    className='form-control field-shift' 
                    placeholder='key'
                    onChange={(event) => {setNumberKey(event.target.valueAsNumber)}}
                    value={numberKey}
                  />

                </div>
              </div>

            {/* <div className='col-2'>
              <div className='form-check form-switch'>
                <input 
                  type="checkbox" 
                  className='form-check-input ' 
                  role='switch' 
                  id='flexSwitchCheckDefault' 
                />
              <label 
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >L/R</label>
              </div>
            </div>

            <div className='col-8'>
              <div className="input-group mb-1">
                <span className="input-group-text" id="basic-addon1">abc</span>
                <input type="text" className='form-control' placeholder='sentence'/>
              </div>
            </div> */}
              {/* <div className='col-9'>
                <input  
                  className='btn btn-shift ' 
                  type="submit" 
                  value={'Shift'}
                />
              </div> */}

          </div> 
        </div>
      </form>
      <div className='alphabet-div'>
        <Alphabet properties={numberKey}/>
      </div>
      <div>
        word decrypted {numberKey}
      </div>
    </div>
  )
}

