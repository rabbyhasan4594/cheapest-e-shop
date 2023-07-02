import React from 'react';
import Home from './Home/home';
import Banner from './components/Banner';
import ShopNow from './components/ShopNow';
import AllProducts from './components/AllProducts';

const page = () => {
  return (
    <div>
      <Home></Home>
      <Banner></Banner>
      <AllProducts></AllProducts>
      <ShopNow></ShopNow>
    </div>
  );
};

export default page;