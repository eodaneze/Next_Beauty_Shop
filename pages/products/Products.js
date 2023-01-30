import CooperateSection from '@/components/CooperateSection'
import FooterCondtion from '@/components/FooterCondtion'
import FooterSection from '@/components/FooterSection'
import React from 'react'
import Hero from './Hero'
import Product_cards from './Product_cards'
import ShopeByPrice from './ShopeByPrice'

const Products = () => {
  return (
    <div>
        <Hero />
        <ShopeByPrice />
        <Product_cards />
        <CooperateSection />
        <FooterSection />
    </div>
  )
}

export default Products