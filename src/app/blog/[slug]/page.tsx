'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from "next/image";
import { blogs } from '../../../data/blogs';

const BlogDetail = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;

  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-xl">مقاله مورد نظر پیدا نشد</p>
      </div>
    );
  }

  const { title, description, date, images } = blog;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* هدر و دکمه برگشت */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => router.push('/blog')}
          className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span>برگشت به بلاگ</span>
        </button>
      </div>

      {/* تصویر اصلی و اطلاعات */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={images[0]}
            fill
            alt={title}
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 right-0 bg-white/90 px-4 py-2 m-4 rounded-lg">
            <time className="text-gray-600 text-sm">{date}</time>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-sahel font-bold mb-6">{title}</h1>
          <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
        </div>
      </div>

      {/* گالری تصاویر */}
      {images.length > 1 && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-6">تصاویر بیشتر</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.slice(1).map((image, index) => (
              <div key={index} className="relative group h-64 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  fill
                  alt={`${title} - تصویر ${index + 2}`}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* محتوای اضافی */}
      <div className="mt-12 prose prose-lg max-w-none">
        {/* اگر محتوای اضافی مثل متن طولانی‌تر دارید اینجا قرار دهید */}
      </div>
    </article>
  );
};

export default BlogDetail;