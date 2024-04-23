import React from 'react'
import Hero from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import NewCollection from '../components/newCollections/NewCollection'
import Newsletter from '../components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <Newsletter/>
    </div>
  )
}

export default Shop