import { fetchProductById, fetchProducts } from '../../../lib/api';
import AddToCartButton from './AddToCartButton';

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetail = async ({ params }) => {
  const product = await fetchProductById(params.id);

  return (
    <div className="bg-gradient-to-b from-[#827191] to-black min-h-screen flex flex-col items-center">
      <div className="container mx-auto p-4 mt-16">
        <h1 className="text-2xl font-bold text-white">{product.title}</h1>
        <p className="text-white">{product.description}</p>
        <p className="font-bold text-white">Price: ${product.price}</p>
        <AddToCartButton product={product} showText={true} />
      </div>
    </div>
  );
};

export default ProductDetail;
