import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { useEffect, useState } from 'react';

export const Alphabet = ( {numberKey, direction} :any ) => {

   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const letters = alphabet.split('');

   const [shifted, setShifted] = useState(alphabet);

   useEffect(() => {
      shiftAlphabet()
   }, [numberKey, direction]);

   const isPopulated = () => {
      return numberKey > 0 && numberKey < 27 
         ? numberKey 
         : 0
   }
   
   const shiftAlphabet = () => {
      direction 
      ? setShifted(alphabet.slice(isPopulated()) + alphabet.slice(0, isPopulated()))
      : setShifted( alphabet.slice(letters.length - isPopulated()) + alphabet.slice(0, letters.length - isPopulated()))
   }

   return (
      <div className="container ">
         <div className='row'>
            <div>{shifted}</div>
            {letters.map( (letter, index) => {
                  return <div className='col-2 fs-1' key={index}>
                     {letter}
                     <div className={'fw-bold shift-text-color shift-text-anim'} >
                        {shifted[index]}
                     </div>
                  </div>
               }
            )}
         </div>
      </div>
   )
}