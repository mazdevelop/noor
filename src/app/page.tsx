import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/Aboutus';
import OurExperts from '../../components/OurExperts';
import BlogSum from '../../components/BlogSum';
import ProductSum from '../../components/ProductSum';
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <OurExperts />
      <ProductSum />
      <BlogSum />
    </div>
  );
};

export default HomePage;