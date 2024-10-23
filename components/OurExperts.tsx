const OurExperts: React.FC = () => {
  return (
      <section className="py-16 bg-primary-300 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <h2 className="text-xl font-sahel font-bold leading-tight text-right mb-4 sm:mb-0">
               با ما در ارتباط باشید
            </h2>
  
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <input
                placeholder="آدرس ایمیل شما"
                className="py-3 px-6 rounded-full w-full sm:w-[330px] mb-3 sm:mb-0 text-right"
              />
              <button className="px-3 py-3 bg-secondary-950 hover:bg-tertiary-800 rounded-full text-white w-full sm:w-auto transition-colors">
                تماس با ما
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};
export default OurExperts;