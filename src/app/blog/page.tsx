'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogsPage = () => {
  // نمونه‌ای از داده‌های مربوط به مقالات
  const blogs = [
    {
      slug: 'my-first-blog-post',
      title: 'مقاله اول',
      description: 'این مقاله در مورد موضوع اول است.',
      date: '2024-10-01',
      likes: 50,
      views: 120,
      thumbnail: '/images/IMG_6980.JPG', // آدرس عکس شاخص
    },
    {
      slug: 'my-second-blog-post',
      title: 'مقاله دوم',
      description: 'این مقاله در مورد موضوع دوم است.',
      date: '2024-10-05',
      likes: 35,
      views: 90,
      thumbnail: '/images/IMG_6980.JPG', // آدرس عکس شاخص
    },
    // مقالات بیشتر
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6 text-center">وبلاگ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.slug} className="bg-white p-4 rounded-lg shadow-lg">
            <Link href={`/blog/${blog.slug}`}>
              <div>
                {/* نمایش عکس شاخص */}
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
              </div>
            </Link>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{new Date(blog.date).toLocaleDateString('fa-IR')}</span>
              <div className="flex items-center space-x-4">
                <span>❤️ {blog.likes} لایک</span>
                <span>👁️ {blog.views} بازدید</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
