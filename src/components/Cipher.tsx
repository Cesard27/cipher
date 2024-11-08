import { encryptedAlphabet } from "./encryptedAlphabet";

interface Data {
   numberKey   : number;
   direction   : boolean;
   sentence    : string;
}

export const Cipher = ( {numberKey, direction, sentence}: Data) => {
   const {ciphered} = encryptedAlphabet({numberKey, direction, sentence})
   return (
      <>
         <input 
            className="form-control field-shift fw-bold" 
            type="text" 
            value={ciphered} 
            readOnly
         />
      </>
   )
}