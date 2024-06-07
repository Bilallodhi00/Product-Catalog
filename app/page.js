import Link from 'next/link';
import pic from '../public/monnnn.png';

const Homepage = () => {
  return (
    <div className="relative bg-contain bg-center h-screen flex flex-col justify-center items-center" style={{ backgroundImage: `url(${pic.src})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#827191] to-black opacity-75 z-0"></div>
      <div className="container mx-auto p-4 text-center mt-6 text-end z-10">
        <h1 className="text-4xl font-bold text-[#000] mb-8">Welcome to our Product Catalog</h1>
        <p className="text-lg font-bold text-[#000] mb-8">
          Explore our wide range of products and find everything you need in one place.
          From electronics to fashion, we've got you covered.
        </p>
        <p className="text-lg font-bold text-[#000] mb-8">
          Start shopping now and discover great deals and discounts.
        </p>
        <Link href="/shop">
          <button className="text-lg text-[#000] bg-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
