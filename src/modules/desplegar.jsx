import { useState } from 'react';
export const check={
  si:"src/recursos/cal2.avif",
  no:null
}

export function useActivar(){
  const[value,setValue]=useState(false);
  const ver=()=>{setValue(!value)}
  return [value,ver];

}