import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '/styles/useEffectOne.module.css'
export default function useEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })
    return(
        <>
        <Link className={styles.homelink} href="/">Home</Link>
      <div className={styles.maincontent}>
        <div className={styles.title}>
            useEffectOne
        </div>
        <div className={styles.number}>
         {number}
            
        </div>
        </div>
        
        </>
    )
}