import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/Aboutus';
import Galvanize from '../../components/Galvanize';
import BlogSum from '../../components/BlogSum';
import ProductSum from '../../components/ProductSum';
import QualityAssurance from '../../components/QualityAssurance';
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Galvanize />
      <ProductSum />
      <QualityAssurance/>
      <BlogSum />
    </div>
  );
};

export default HomePage;