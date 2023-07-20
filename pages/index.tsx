import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
            <h1 className={styles.heading}>
                About the Project
            </h1>
            <div className={styles.para}>
                <p>
                    This particular website is home for my REACT projects namely To-Do-List, Shopping cart, Weather app.
                </p>
                <ul>
                    <h4>To-Do-List</h4>
                    <p>In this Project, one can add new items to the list by clicking Add button and by clicking on the Remove button, the respective items will be deleted from the list</p> 
                    <h4>Shopping cart</h4>
                    <p>In this Project, one can add any number of the specified items into the shopping cart. By clicking on the Go to cart button, one can go to the cart to look at the number of items in the cart and the bill amount. The products are fetched from the database. So by changing the data in the database, the changes can be seen in the website.</p>
                    <h4>Weather App</h4>
                    <p>In this Project, by entering the name of the city, one can access the weather conditions of the city such as Temperature, Weather condition, and an icon representing the weather. This is implemented by using the API from openweathermap.</p>
                </ul>
            </div>
        </div>
  )
}
