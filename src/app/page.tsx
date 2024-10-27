import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/Aboutus';
import Galvanize from '../../components/Galvanize';
import BlogSummary from '../../components/BlogSummary';
import ProductShowcase from '../../components/ProductShowcase';
import QualityAssurance from '../../components/QualityAssurance';
import Announcements from '../../components/Announcements';
const HomePage: React.FC = () => {
  return (
    <div>
      <ProductShowcase />
      <Announcements />
      <AboutUs/>
      <QualityAssurance/>
      <Hero />
      <Galvanize />
      <BlogSummary />
    </div>
  );
};

export default HomePage;