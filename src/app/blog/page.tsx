import React from 'react';
import Image from "next/image";
import { blogs } from '../../data/blogs'; // فایل داده‌ها
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-sahel mb-8">همه مقالات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative">
              <Image 
                src={blog.thumbnail} 
                alt={blog.title} 
                width={400} 
                height={250}
                className="w-full h-48 object-cover"
              />
              {/* تاریخ روی تصویر */}
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm">
                {blog.date}
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex flex-col h-full">
                <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{blog.description}</p>
                
                {/* دکمه در سمت راست */}
                <div className="flex justify-end mt-auto">
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <span>مشاهده مطلب</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

