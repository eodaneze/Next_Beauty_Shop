import CooperateSection from "@/components/CooperateSection";
import FooterCondtion from "@/components/FooterCondtion";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import React from "react";
import AllProducts from "./AllProducts";
import Hero from "./Hero";
// import Product_cards from "./Product_cards";
import ShopeByPrice from "./ShopeByPrice";

const Products = () => {
  return (
    <div>
       <Navbar /> 
       <Hero /> 
      <ShopeByPrice />
      <AllProducts />
      <CooperateSection />
    <FooterSection />
   
    </div>
  );
};

export default Products;
