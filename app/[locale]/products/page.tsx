import dbConnect from '../../../lib/db';
import Product from '../../../models/Product';

export default async function ProductsPage({ params }) {
  const { locale } = params;
  await dbConnect();
  const products = await Product.find({ visibility: true }).lean();

  return (
    <div>
      <h1>{locale === 'fa' ? 'محصولات' : 'Products'}</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.title[locale]}
          </li>
        ))}
      </ul>
    </div>
  );
}
