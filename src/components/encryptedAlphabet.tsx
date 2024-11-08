import { useEffect, useState } from "react";

export const encryptedAlphabet = ({numberKey, direction, sentence:shiftedSentence} :any) => {

   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const letters = alphabet.split('');
   const [shifted, setShifted] = useState(alphabet);

   let ciphered = ''

   useEffect(() => {
      shiftAlphabet()
   }, [numberKey, direction]);
   
   const isPopulated = () => {
      return Number(numberKey) > 0 && Number(numberKey) < 27 
      ? Number(numberKey) 
      : 0
   }
   
   const shiftAlphabet = () => { 
      direction 
      ? setShifted(alphabet.slice(isPopulated()) + alphabet.slice(0, isPopulated()))
      : setShifted( alphabet.slice(letters.length - isPopulated()) + alphabet.slice(0, letters.length - isPopulated()))
   }
   
   if (!!shiftedSentence) {

      const shiftedLetters = shiftedSentence.split('')
      let shift = direction ? numberKey : -numberKey
      shift = Number(shift)
      shiftedLetters.map((shiftedLetter: string) => {

         if (/[a-zA-Z]/.test(shiftedLetter)) {

            let code = shiftedLetter.charCodeAt(0)
            if (shiftedLetter >= 'A' && shiftedLetter <= 'Z') {
               console.log('Letter', shiftedLetter)
               code = ((code - 65 + shift) % 26 + 26 ) % 26 + 65
               console.log('ec1', (code - 65 + shift))
            } else if (shiftedLetter >= 'a' && shiftedLetter <= 'z') {
               console.log('Letter', shiftedLetter, 'ascii', code,)
               console.log('ec1', (code - 97) + shift, 'ascii', code, 'shift', shift)
               code = (((code - 97) + shift) % 26 + 26 )% 26 + 97
            }
            ciphered += String.fromCharCode(code)
         }else{
            ciphered += shiftedLetter
         }
      })
      
   }

   return ({
      letters,
      shifted,
      ciphered
   })
}