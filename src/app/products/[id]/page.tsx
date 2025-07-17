import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Extended product details for display
const productDetails: Record<string, any> = {
  '1': {
    image: '/products/mic.jpg',
    description: 'High-quality microphone for professional recording',
    features: [
      'High-quality audio recording',
      'Noise cancellation technology',
      'USB connectivity',
      'Compatible with all devices',
    ],
  },
  '2': {
    image: '/products/roll.jpg',
    description: 'Durable and high-quality roll product for various uses',
    features: [
      'Durable material construction',
      'Easy to use interface',
      'Compact and portable design',
      'Long-lasting performance',
    ],
  },
  '3': {
    image: '/products/tail.jpg',
    description: 'Premium tail product with elegant design',
    features: [
      'Premium quality materials',
      'Ergonomic design',
      'Multiple color options',
      'Satisfaction guaranteed',
    ],
  },
};

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products/${id}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    return null;
  }
  
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  const details = productDetails[params.id];

  return (
    <main className='min-h-screen p-4'>
      <div className='max-w-4xl mx-auto'>
        <Link
          href='/products'
          className='text-blue-500 hover:underline mb-6 inline-block font-semibold'
        >
          ← Back to Products
        </Link>

        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='md:flex'>
            <div className='md:w-1/2'>
              <div className='relative h-64 md:h-96'>
                <Image
                  src={details?.image || '/products/default.jpg'}
                  alt={product.name}
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className='md:w-1/2 p-6'>
              <h1 className='text-2xl md:text-3xl font-bold mb-4 text-gray-800'>
                {product.name}
              </h1>

              <p className='text-xl font-semibold text-purple-600 mb-4'>
                {product.price}
              </p>

              <p className='text-gray-700 mb-6'>
                {details?.description || 'No description available'}
              </p>

              {details?.features && (
                <>
                  <h3 className='text-lg font-semibold mb-3 text-gray-800'>
                    Features:
                  </h3>
                  <ul className='space-y-2 mb-6'>
                    {details.features.map((feature: string, index: number) => (
                      <li key={index} className='flex items-center text-gray-700'>
                        <span className='text-green-500 mr-2'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <button className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
