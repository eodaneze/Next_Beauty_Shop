import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubNav from "@/components/SubNav";
import Discover from "@/components/Discover";
import Deals from "@/components/Deals";
import ValentineDaySection from "@/components/ValentineDaySection";
import RewardSection from "@/components/RewardSection";
import FooterSection from "@/components/FooterSection";
import CooperateSection from "@/components/CooperateSection";
import BeautyServiceSection from "@/components/BeautyServiceSection";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
       <Head>
        <title>Ulta Beauty | Office Site - Makeup, Hair Care, Skin Care</title>
        <link rel="shortcut icon" href="../public/asset/fevicon.png" type="image/x-icon" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
      </Head>
      <Navbar />
      <SubNav />
      <Hero />
      <Discover />
      <Deals />
      <ValentineDaySection />
      <RewardSection />
      {/* <BeautyServiceSection /> */}
      <CooperateSection />
      <FooterSection />
 
    </div>
  );
}
