import Image from 'next/image';
import React from 'react';

const AllProducts =  () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-6">
          <div className="card lg:w-96 m-2  bg-base-100 shadow-xl">
          <Image
        src="/Ghee.jpg" 
        alt="Ghee"
        width={500}
        height={250}
      />
  <div className="card-body">
    <h2 className="card-title">Ghee</h2>
    <p>Ghee is rich in healthy fats, vitamins A, D, E, and K, and butyric acid.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card lg:w-96 m-2 bg-base-100 shadow-xl">
<Image
        src="/honey.jpg" 
        alt="Description of the image"
        width={500}
        height={250}
      />
  <div className="card-body">
    <h2 className="card-title">Honey</h2>
    <p>Honey contains antioxidants, enzymes, vitamins, and minerals.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card lg:w-96 m-2 bg-base-100 shadow-xl">
<Image
        src="/t-shirt.jpg" 
        alt="Description of the image"
        width={500}
        height={250}
      />
  <div className="card-body">
    <h2 className="card-title">T-Shirt</h2>
    <p>Cotton t-shirts are a popular clothing choice due to their comfort and breathability. </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card lg:w-96 m-2 bg-base-100 shadow-xl">
<Image
        src="/cosmetics.jpg" 
        alt="Description of the image"
        width={500}
        height={250}
      />
  <div className="card-body">
    <h2 className="card-title">Cosmetics</h2>
    <p>50% off in all those cosmetics</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card lg:w-96 m-2 bg-base-100 shadow-xl">
<Image
        src="/bag.jpg" 
        alt="Description of the image"
        width={500}
        height={250}
      />
  <div className="card-body">
    <h2 className="card-title">Bag</h2>
    <p>This is a leather bag</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
<div className="card lg:w-96 m-2 bg-base-100 shadow-xl">
<Image
        src="/bag2.jpg" 
        alt="Description of the image"
        width={500}
        height={250}
      />
  <div className="card-body">
    <h2 className="card-title">Bag</h2>
    <p>This is a good quality bag</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default AllProducts;