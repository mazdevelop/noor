import dbConnect from '../../../../lib/db';
import Product from '../../../../models/Product';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

interface ProductType {
  _id: string;
  title: {
    fa: string;
    en: string;
  };
}

interface ProductsPageProps {
  products: ProductType[] | null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();
  const products = await Product.find().lean();
  
  return {
    props: {
      products: products ? JSON.parse(JSON.stringify(products)) : null,
    },
  };
}

export default function ProductsPage({ products }: ProductsPageProps): JSX.Element {
  const { locale } = useRouter();

  if (!products) {
    return <div>{locale === 'fa' ? 'هیچ محصولی وارد نشده است' : 'No products available'}</div>;
  }

  return (
    <div>
      <h1>{locale === 'fa' ? 'محصولات' : 'Products'}</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {locale === 'fa' ? product.title.fa : product.title.en}
          </li>
        ))}
      </ul>
    </div>
  );
}
