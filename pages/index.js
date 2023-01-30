import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SubNav from '@/components/SubNav'
import Discover from '@/components/Discover'
import Deals from '@/components/Deals'
import ValentineDaySection from '@/components/ValentineDaySection'
import RewardSection from '@/components/RewardSection'
import FooterSection from '@/components/FooterSection'
import CooperateSection from '@/components/CooperateSection'
import BeautyServiceSection from '@/components/BeautyServiceSection'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Navbar />
       <SubNav />
       <Hero />
       <Discover />
       <Deals />
       <ValentineDaySection />
       <RewardSection />
       <BeautyServiceSection />
       <CooperateSection />
       <FooterSection />
    </>
  )
}
