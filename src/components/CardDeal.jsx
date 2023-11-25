import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' />in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover the perfect card for your needs effortlessly. Our user-friendly platform simplifies 
          the search for the best card deals, guiding you through a few easy steps to find the ideal match. 
          Whether you're seeking low-interest rates, generous rewards, or specialized perks, we'll help you 
          navigate options tailored to your preferences.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
      
    </section>
  )


export default CardDeal