import React from 'react';
import Hero from '../../components/Hero';
import AboutUs from '../../components/Aboutus';
import Galvanize from '../../components/Galvanize';
import BlogSummary from '../../components/BlogSummary';
import QualityAssurance from '../../components/QualityAssurance';
import Announcements from '../../components/Announcements';
const HomePage: React.FC = () => {
  return (
    <div>
      <Announcements />
      <Hero />
      <QualityAssurance/>
      <AboutUs/>
      <Galvanize />
      <BlogSummary />
    </div>
  );
};

export default HomePage;