const QualityAssurance: React.FC = () => {
    return (
      <section className="py-8 md:py-12 bg-primary-300 rounded-2xl mt-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-sahel font-bold mb-3">
              کیفیت تضمین‌شده به پشتوانه تجربه
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              ما به کیفیت محصولاتمان ایمان داریم و آن را با ضمانت‌های ویژه تضمین می‌کنیم
            </p>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <i className="ri-paint-line text-2xl md:text-3xl text-primary-600 ml-3"></i>
                <h3 className="text-base md:text-lg font-bold">۳ سال ضمانت رنگ</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base text-right">
                رنگ محصولات ما در برابر شرایط جوی، ماندگاری خود را حفظ می‌کند
              </p>
            </div>
  
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <i className="ri-building-4-line text-2xl md:text-3xl text-primary-600 ml-3"></i>
                <h3 className="text-base md:text-lg font-bold">۵ سال ضمانت سازه</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base text-right">
                استحکام و دوام طولانی‌مدت حتی در شرایط سخت محیطی
              </p>
            </div>
  
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-3">
                <i className="ri-customer-service-2-line text-2xl md:text-3xl text-primary-600 ml-3"></i>
                <h3 className="text-base md:text-lg font-bold">۱۰ سال خدمات پس از فروش</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base text-right">
                پشتیبانی سریع و با کیفیت برای تعمیر و نگهداری محصولات
              </p>
            </div>
          </div>
  
          <div className="bg-white/50 backdrop-blur p-4 md:p-6 rounded-xl">
            <div className="flex items-center justify-start mb-3">
              <i className="ri-shield-star-line text-2xl md:text-3xl text-primary-600 ml-3"></i>
              <p className="text-gray-600 text-sm md:text-base text-right">
                در غزال نور پارسا، تجربه‌ای مطمئن از مبلمان شهری را با ضمانت‌های معتبر برای شما فراهم می‌کنیم
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default QualityAssurance;