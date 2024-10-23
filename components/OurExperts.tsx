'use client';
import Image from "next/image";
import Link from "next/link";

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 bg-primary-300 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          
          <div className="order-2 sm:order-1">
            <Image
              src="/images/galvanizing.jpg"
              alt="گالوانیزه گرم"
              width={500}
              height={400}
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div className="order-1 sm:order-2 flex flex-col gap-4">
            <h2 className="text-2xl font-sahel font-bold text-tertiary-950">
              گالوانیزه گرم: محافظت پایدار از سازه‌های فلزی در مبلمان شهری
            </h2>
            
            <p className="text-tertiary-800 leading-relaxed">
              گالوانیزه گرم، فرآیند پیشرفته محافظت از سازه‌های فلزی است که با ایجاد پوششی از روی مذاب، عمر مفید تجهیزات شهری را به طور چشمگیری افزایش می‌دهد. این روش علاوه بر مقاومت بالا در برابر خوردگی، با دوام و سازگار با محیط زیست بوده و راه‌حلی اقتصادی برای حفاظت از مبلمان شهری محسوب می‌شود.
            </p>

            <div className="flex justify-start mt-4">
              <Link href="/blog/galvanize">
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors">
                  بیشتر بخوانید
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogPreview;