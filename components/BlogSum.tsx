'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogSum = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'مقاله ۱', excerpt: 'خلاصه مقاله ۱...', category: 'مبلمان شهری', image: '/images/IMG_3204.JPG' },
    { id: 2, title: 'مقاله ۲', excerpt: 'خلاصه مقاله ۲...', category: 'تجهیزات روشنایی - ترافیکی', image: '/images/IMG_3204.JPG' },
    { id: 3, title: 'مقاله ۳', excerpt: 'خلاصه مقاله ۳...', category: 'مبلمان شهری', image: '/images/IMG_3204.JPG' },
    { id: 4, title: 'مقاله ۴', excerpt: 'خلاصه مقاله ۴...', category: 'تجهیزات پارکی', image: '/images/IMG_3204.JPG' },
  ]);

  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [activeCategory, setActiveCategory] = useState('همه');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['همه', 'تجهیزات پارکی', 'تجهیزات روشنایی - ترافیکی', 'مبلمان شهری'];

  useEffect(() => {
    const filtered = articles.filter(article => 
      (activeCategory === 'همه' || article.category === activeCategory) &&
      (article.title.includes(searchTerm) || article.excerpt.includes(searchTerm))
    );
    setFilteredArticles(filtered);
  }, [activeCategory, searchTerm, articles]);

  return (
    <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center font-bold mb-8 text-primary-500">وبلاگ</h1>
      
      {/* Search and Filter */}
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <div className="flex space-x-2 mb-4 sm:mb-0">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="جستجو در مقالات..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredArticles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
            <Image src={article.image} alt={article.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary-500">{article.category}</span>
                <button className="px-2 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-200 text-sm">
                  ادامه مطلب
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-500 mt-8">هیچ مقاله‌ای یافت نشد.</p>
      )}
    </div>
  );
};

export default BlogSum;