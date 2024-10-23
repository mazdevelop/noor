import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/Aboutus';
import OurExperts from '../../components/OurExperts';
import BlogSum from '../../components/BlogSum';
import ProductSum from '../../components/ProductSum';
import QualityAssurance from '../../components/QualityAssurance';
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <OurExperts />
      <ProductSum />
      <QualityAssurance/>
      <BlogSum />
    </div>
  );
};

export default HomePage;