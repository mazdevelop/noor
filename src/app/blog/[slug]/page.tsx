'use client';

import React from 'react';
import Image from 'next/image';

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // داده‌های نمونه مربوط به مقالات
  const blogs = [
    {
      slug: 'my-first-blog-post',
      title: 'مقاله اول',
      content: `
        این مقاله در مورد موضوع اول است. متن کامل مقاله در اینجا قرار می‌گیرد و شامل جزئیات بیشتری است. 
        تصویر اول مربوط به محتوای مقاله:
      `,
      date: '2024-10-01',
      likes: 50,
      views: 120,
      images: ['/images/IMG_6980.JPG', '/images/IMG_6980.JPG'], // چند عکس
    },
    {
      slug: 'my-second-blog-post',
      title: 'مقاله دوم',
      content: `
        این مقاله در مورد موضوع دوم است. متن کامل مقاله در اینجا قرار می‌گیرد و شامل جزئیات بیشتری است. 
        تصویر اول مربوط به محتوای مقاله:
      `,
      date: '2024-10-05',
      likes: 35,
      views: 90,
      images: ['/images/IMG_6980.JPG', '/images/IMG_6980.JPG'], // چند عکس
    },
    // مقالات بیشتر
  ];

  // پیدا کردن مقاله مربوطه با استفاده از slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>مقاله مورد نظر یافت نشد</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{blog.title}</h1>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>{new Date(blog.date).toLocaleDateString('fa-IR')}</span>
        <div className="flex items-center space-x-4">
          <span>❤️ {blog.likes} لایک</span>
          <span>👁️ {blog.views} بازدید</span>
        </div>
      </div>
      <p className="text-lg text-gray-700 mb-6">{blog.content}</p>

      {/* نمایش تصاویر مقاله */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {blog.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`تصویر ${index + 1}`}
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        ))}
      </div>

      <p className="text-lg text-gray-700">
        ادامه متن مقاله پس از تصاویر...
      </p>
    </div>
  );
};

export default BlogPage;
