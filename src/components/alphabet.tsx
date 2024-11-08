import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { encryptedAlphabet } from './encryptedAlphabet';

export const Alphabet = ( {numberKey, direction} :any ) => {

   const {letters, shifted} = encryptedAlphabet({numberKey, direction})

   return (
      <div className="container ">
         <div className='row'>
            {letters.map( (letter, index) => {
                  return <div className='col-2 fs-1' key={index}>
                     {letter}
                     <div className={'fw-bold shift-text-color shift-text-anim'} >
                        {shifted[index]}
                     </div>
                     <hr />
                  </div>
               }
            )}
         </div>
      </div>
   )
}