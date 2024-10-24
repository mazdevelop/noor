'use client';

import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { blogs } from '../src/data/blogs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSummary = () => {
  const topBlogs = blogs.sort((a, b) => b.views - a.views).slice(0, 3);
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // انیمیشن ورودی برای هدر
    gsap.fromTo('.blog-header', {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // انیمیشن برای کارت‌ها
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2 * index,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="blog-header mb-16 text-center">
        <h2 className="text-4xl font-sahel font-bold text-gray-900 mb-4">آخرین مقالات</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">جدیدترین و محبوب‌ترین مطالب ما را بخوانید</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topBlogs.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={blog.slug}>
            <article 
              ref={(el) => {
                cardsRef.current[index] = el as HTMLElement;
              }}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image 
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {blog.views}
                  </div>
                </div>

                <h3 className="text-xl font-sahel font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {blog.description}
                </p>

                <div className="flex items-center text-primary-600 font-medium">
                  <span className="group-hover:ml-2 transition-all duration-300">ادامه مطلب</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
        >
          مشاهده همه مقالات
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default BlogSummary;