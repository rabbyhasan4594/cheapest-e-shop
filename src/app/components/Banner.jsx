import Image from 'next/image';
import React from 'react';


const Banner = () => {
    return (
        <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full bg-slate-400">
  <Image
        src="/4028484.png" // Replace with the actual path to your image
        alt="Description of the image"
        width={1300}
        height={200}
      />
  </div> 
  <div id="item2" className="carousel-item w-full">
  <Image
        src="/47.png" // Replace with the actual path to your image
        alt="Description of the image"
        width={1300}
        height={200}
      />
  </div> 
  
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a>  
</div>
        </div>
    );
};

export default Banner;