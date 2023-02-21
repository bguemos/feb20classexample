import Carousel from '@/components/carousel'
import Link from 'next/link'
import styles from '/styles/carouselPage.module.css'



export default function CarouselPage() {

    return(
        <div className={styles.maincontent}>
        <Link href ="/">Home</Link>
       
       
 
       
        <Carousel/>


        
        </div>
    )
}