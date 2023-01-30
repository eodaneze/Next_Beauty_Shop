import Image from "next/image";
import Link from "next/link";
import React from "react";
import circle_1 from "../../public/asset/circle-1.webp"
import circle_2 from "../../public/asset/circle-2.webp"
import circle_3 from "../../public/asset/circle-3.webp"
import circle_4 from "../../public/asset/circle-4.webp"
const ShopeByPrice = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mx-[5%] mb-8">
            <div className="text-center">
                 <Image src={circle_1} alt='circle-image' className="w-[100%]" />
                 <Link href={"/"} >
                     <p className="font-bold text-xl underline mt-4">shop under $25</p>
                 </Link>
            </div>
            <div className="text-center">
                 <Image src={circle_2} alt='circle-image' className="w-[100%]" />
                 <p className="font-bold text-xl underline mt-4">shop under $50</p>
            </div>
            <div className="text-center">
                 <Image src={circle_3} alt='circle-image' className="w-[100%]" />
                 <p className="font-bold text-xl underline mt-4">shop under $100</p>
            </div>
            <div className="text-center">
                 <Image src={circle_4} alt='circle-image' className="w-[100%]" />
                 <p className="font-bold text-xl underline mt-4">shop gift card</p>
            </div>
        </div>
    </div>
  );
};

export default ShopeByPrice;


