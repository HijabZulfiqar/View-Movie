import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className='py-16 px-5 grid grid-cols-1 md:grid-cols-2 lg:px-0 lg:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-3 '>
  
      
      <Card/>
       
      <Card/>
       
      <Card/>
      <Card/>
      <Card/>
  
  </section>
  )
}

export default CardSection
