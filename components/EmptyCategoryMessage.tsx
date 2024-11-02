interface EmptyCategoryMessageProps {
    categoryName: string;
    onReset: () => void;
  }
  
  export const EmptyCategoryMessage: React.FC<EmptyCategoryMessageProps> = ({ 
    categoryName, 
    onReset 
  }) => (
    <div className="col-span-full py-16 text-center bg-gray-50 rounded-lg">
      <div className="max-w-md mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          محصولی در {categoryName} موجود نیست
        </h3>
        <p className="text-gray-600 mb-4">
          در حال حاضر محصولی در این دسته‌بندی ثبت نشده است. لطفاً بعداً مراجعه کنید یا دسته‌بندی دیگری را انتخاب نمایید.
        </p>
        <button
          onClick={onReset}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          مشاهده همه محصولات
        </button>
      </div>
    </div>
  );
  