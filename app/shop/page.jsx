"use client"; 
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../lib/api';
import Link from 'next/link';
import AddToCartButton from '../products/[id]/AddToCartButton';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts(search);
      setProducts(products);
    };
    getProducts();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-gradient-to-b from-[#827191] to-black min-h-screen flex flex-col items-center">
      <div className="container mx-auto p-4 mt-16">
        <form className="flex items-center max-w-sm mx-auto mb-4">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
              </svg>
            </div>
            <input 
              type="text" 
              id="simple-search" 
              value={search}
              onChange={handleSearchChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5" 
              placeholder="Search product name..." 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-gray-700 hover:bg-gray-600 focus:outline-none"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          {products.map((product) => (
            <div key={product.id} className="border border-white p-4 rounded-lg shadow-md bg-white">
              <Link href={`/products/${product.id}`} legacyBehavior>
                  <h2 className="text-xl font-bold text-[#000]">{product.title}</h2>
                  <p className="text-[#000]">{product.description}</p>
              </Link>
              <AddToCartButton product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
