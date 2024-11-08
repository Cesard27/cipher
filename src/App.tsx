import { FormEvent, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Alphabet } from './components/alphabet';
import { Cipher } from './components/Cipher';

interface FormValues {
  numberKey: number;
  direction: boolean;
  sentence: string;
}

export const App = () => {

  const [data, setData] = useState<FormValues>(
      {
        numberKey: 0, 
        direction: true, 
        sentence: ''
      }
    );
    
  const [sendInfo, setSendInfo] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSendInfo(true)
  }
  
  const onChangedDirection = () => {
    const direction = data.direction
    setData((prevData) => ({
      ...prevData,
      direction: !direction
    }))
  }

  const onInputWrited = (event : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setSendInfo(false)
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit = {onSubmit}>

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
                    name='numberKey'
                    onChange={onInputWrited}
                    value={data.numberKey}
                    required
                  />
                </div>
              </div>

            <div className='col-2'>
              <div className='form-check form-switch'>
                <input 
                  type="checkbox" 
                  className='form-check-input switch-shift'
                  role='switch' 
                  id='flexSwitchCheckDefault' 
                  name='direction'
                  checked={data.direction}
                  onChange={onChangedDirection}
                />
              <label 
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >L/R</label>
              </div>
            </div>

            <div className='col-7'>
              <div className="input-group mb-1">
                <span className="input-group-text field-shift" id="basic-addon1">abc</span>
                <input 
                  type="text" 
                  className='form-control field-shift' 
                  placeholder='sentence' 
                  name='sentence'
                  value={data.sentence} 
                  onChange={onInputWrited}
                  required
                />
              </div>
            </div>

            <div className='col-12'>
              <button 
                className='btn btn-shift ' 
                type="submit" 
              >Shift</button>
            </div>

          </div> 
        </div>
      </form>

      <div className='alphabet-div'>
        <Alphabet {...data}/>
      </div>

      <div>
        {sendInfo && <Cipher {...data}/>}
      </div>

    </div>
  )
}
