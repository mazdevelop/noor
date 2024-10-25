import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/Aboutus';
import Galvanize from '../../components/Galvanize';
import BlogSummary from '../../components/BlogSummary';
import ProductSum from '../../components/ProductSum';
import QualityAssurance from '../../components/QualityAssurance';
import Announcements from '../../components/Announcements';
const HomePage: React.FC = () => {
  return (
    <div>
      <ProductSum />
      <Announcements />
      <QualityAssurance/>
      <AboutUs/>
      <Galvanize />
      <Hero />
      <BlogSummary />
    </div>
  );
};

export default HomePage;