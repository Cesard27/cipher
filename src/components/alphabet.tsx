import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { useEffect, useState } from 'react';

export const Alphabet = ( numberKey: any ) => {

   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const letters = alphabet.split('');

   const [shifted, setShifted] = useState(alphabet);

   useEffect(() => {
      shiftAlphabet()
   }, [numberKey]);

   const isPopulated = () => {
      return numberKey.properties > 0 ? numberKey.properties : 0
   }
   
   const shiftAlphabet = () => {
      setShifted(alphabet.slice(numberKey.properties) + alphabet.slice(0, numberKey.properties))

   }

   return (
      <div className="container ">
         <div className='row'>
            <div>{`${shifted}`}</div>
            
            {letters.map( (letter, index) => {
                  return <div className='col-2 fs-1' key={index}>
                     {letter}
                     <div className='fw-bold shift-text-color' >
                        {shifted[index]}
                     </div>
                  </div>
               }
            )}
         </div>
      </div>
   )
}