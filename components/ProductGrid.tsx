import { Product } from '@/types';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ProductGridProps {
    products: Product[];
    isGridView: boolean;
    onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    isGridView,
    onProductClick
}) => {
    const productRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        productRefs.current.forEach((productEl, index) => {
            if (!productEl) return;

            gsap.set(productEl, {
                opacity: 0,
                y: 50,
            });

            gsap.to(productEl, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: productEl,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                delay: index * 0.1,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [products, isGridView]);

    return (
        <div 
            className={`grid gap-4 ${
                isGridView 
                    ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
            }`}
        >
            {products.map((product, index) => (
                <div 
                    key={product.id}
                    ref={el => {
                        productRefs.current[index] = el;
                    }}
                    className={`bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden cursor-pointer
                        ${isGridView ? 'aspect-square' : 'aspect-video'}`}
                    onClick={() => onProductClick(product)}
                >
                    <div className="relative w-full h-full">
                        <Image 
                            src={product.image} 
                            alt={`محصول ${product.id}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-2"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx4dHx8dHx8mHh0cHB0eJiYnHh4rIR4eJjMpKCkzNjU2HSc5PTgyPC4yNjb/2wBDARUXFx4bHjshISs2NS41NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Njb/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export const ProductGridSkeleton: React.FC = () => (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
            <div 
                key={index}
                className="bg-gray-100 aspect-square rounded-lg animate-pulse"
            />
        ))}
    </div>
);