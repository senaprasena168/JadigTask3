import Link from 'next/link';
import Image from 'next/image';

// Extended product data for display (keeping images and descriptions)
const productDetails = [
  {
    id: '1',
    image: '/products/mic.jpg',
    description: 'High-quality microphone for professional recording',
  },
  {
    id: '2',
    image: '/products/roll.jpg',
    description: 'Durable and high-quality roll product for various uses',
  },
  {
    id: '3',
    image: '/products/tail.jpg',
    description: 'Premium tail product with elegant design',
  },
];

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <main className='min-h-screen p-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-purple-600'>
          Our Products
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {products.map((product: any) => {
            const details = productDetails.find(d => d.id === product.id);
            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200'
              >
                <div className='relative h-48 w-full'>
                  <Image
                    src={details?.image || '/products/default.jpg'}
                    alt={product.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-4'>
                  <h2 className='text-lg font-bold mb-2 text-gray-800'>
                    {product.name}
                  </h2>
                  <p className='text-sm text-gray-700 mb-3'>
                    {details?.description || 'No description available'}
                  </p>
                  <p className='text-lg font-semibold text-purple-600 mb-3'>
                    {product.price}
                  </p>
                  <div className='text-center'>
                    <span className='bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors'>
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className='text-center mt-8'>
          <p className='text-sm text-gray-600 bg-blue-100 p-3 rounded-lg inline-block'>
            ✨ Discover our amazing product collection! Quality guaranteed with
            excellent customer service.
          </p>
        </div>
      </div>
    </main>
  );
}
