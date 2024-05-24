import React from 'react'
import buttonsValue from '../data/buttonsvalues'
import Button from './Button'
import { useState } from 'react'
import calculation from '../calculation/calculation'
import styles from './Calculator.module.css'


export default function Calculator() {
    let buttonsData = buttonsValue()
    
    let [inputValue, setInputValue] = useState('')
    let [calculatedValue, setcalculatedValue] = useState('')

    function calculate(){
        if(inputValue === ''){
            setcalculatedValue("Error")
            return
        }
        let result;
        try {
            result = calculation(inputValue);
        } catch (e) {
            result = e.message || "Error"; // Convert the error object to a string message
        }

        setcalculatedValue(result)
    }

    let buttons = buttonsData.map((data, index) => {
        if(index === 12){
            return <Button className={styles.gridItem} key ={index} value={data} writeValue={setInputValue} clearButton/>
        }else if(index === 14){
            return <Button className={styles.gridItem} key ={index} value={data} writeValue={setInputValue} clearButton calculate={calculate} />
        }else{
            return <Button className={styles.gridItem}  key ={index} value={data} writeValue={setInputValue} />
        }
        
    })
  return (
    <div>
        <h1> React Calculator </h1>
        <input value={inputValue}  />
        <div>{calculatedValue}</div>
        <div className={styles.container}>
            <div className={styles.buttonsGrid}>
                {buttons}
            </div>
        </div>
        
    </div>
  )
}
