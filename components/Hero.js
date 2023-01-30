import Link from "next/link";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const Hero = () => {
  return (
    <div className="w-[100%] h-[100vh] hero-img">
      <div className="flex items-center h-[100vh]">
        <div  className="ml-[7%] md:w-[30%]">
          <h3 className="font-normal uppercase text-2xl">Now at ulta beauty</h3>
          <h1 className="font-semibold text-8xl uppercase my-3">dior</h1>
          <h3 className="text-xl font-medium line-height">
            experience the couture makeup and skin care icons and rediscover
            your fragrance favourite
          </h3>

          <div className="mt-6">
            <Link href={"/"} className="flex items-center">
              <p className="text-2xl font-medium mr-2">Shop Now</p>
              <AiOutlineArrowRight  size={20}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
