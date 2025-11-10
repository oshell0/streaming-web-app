import React from 'react'
import Image from "next/image";

export default function ProfilePic() {
  return (
    <div>
        <Image 
            src="/kirbyPfp.jpg" 
            alt= "Profile Picture"
            width={30}
            height={30}
            className="rounded-full object-cover w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]"
        />
    </div>
    
  );
}
