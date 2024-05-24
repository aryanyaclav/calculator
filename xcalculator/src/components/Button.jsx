import React from 'react'

export default function Button({value, writeValue , clearButton, calculate}) {
    function handleClick(){
        if(clearButton){
            if(calculate){
                writeValue((prevvalue) => prevvalue)
                calculate()
            }else{
                writeValue('')
            }
            
        }else{
            writeValue((prevvalue) => (prevvalue + value))
        }

        
        
    }
  return (
    <button onClick={handleClick}>{value}</button>
  )
}
