import Link from 'next/link'
import {useState, useEffect} from 'react'
import styles from '/styles/useEffectThree.module.css'



export default function useEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10)

     useEffect(() =>{
        setValue(value +10)
     }, [number])
    return(
        <>
        <Link className={styles.homelink} href ="/">Home</Link>
        
        <div className={styles.maincontent}>
        <div>
        <button className={styles.button} onClick={() => setNumber(number +1)}>Click me</button>
        </div>
        <div className={styles.title}>
         useEffectThree
        </div>
        <div className={styles.number}>
            {value}
        </div>
        </div>
        
        </>
    )

}