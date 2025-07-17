import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const products = [
  {
    id: '1',
    name: 'Professional Microphone',
    image: '/products/mic.jpg',
    description: 'High-quality microphone for professional recording',
    price: '$199.99',
    features: [
      'High-quality audio recording',
      'Noise cancellation technology',
      'USB connectivity',
      'Compatible with all devices',
    ],
  },
  {
    id: '2',
    name: 'Premium Roll Product',
    image: '/products/roll.jpg',
    description: 'Durable and high-quality roll product for various uses',
    price: '$89.99',
    features: [
      'Durable material construction',
      'Easy to use interface',
      'Compact and portable design',
      'Long-lasting performance',
    ],
  },
  {
    id: '3',
    name: 'Stylish Tail Product',
    image: '/products/tail.jpg',
    description: 'Premium tail product with elegant design',
    price: '$149.99',
    features: [
      'Premium quality materials',
      'Ergonomic design',
      'Multiple color options',
      'Satisfaction guaranteed',
    ],
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  // If product not found, redirect to 404 page
  if (!product) {
    notFound();
  }

  return (
    <main className='min-h-screen p-4'>
      <div className='max-w-4xl mx-auto'>
        <Link
          href='/products'
          className='text-blue-500 hover:underline mb-6 inline-block font-semibold'
        >
          ← Back to Products
        </Link>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Product Image */}
          <div className='relative h-80 lg:h-96 rounded-lg overflow-hidden border border-gray-200'>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className='object-cover'
            />
          </div>

          {/* Product Details */}
          <div className='flex flex-col justify-center bg-gray-50 p-6 rounded-lg'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4 text-gray-800'>
              {product.name}
            </h1>
            <p className='text-2xl font-bold text-green-600 mb-4'>
              {product.price}
            </p>
            <p className='text-base text-gray-700 mb-6'>
              {product.description}
            </p>

            <div className='mb-6'>
              <h3 className='text-lg font-semibold mb-3 text-gray-800'>
                Product Features:
              </h3>
              <ul className='space-y-2'>
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-center text-sm text-gray-800'
                  >
                    <span className='text-green-500 mr-2'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors'>
              Add to Cart
            </button>
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-sm text-gray-600 bg-blue-100 p-3 rounded-lg inline-block'>
            ✨ High-quality product with excellent features. Perfect for your
            needs!
          </p>
        </div>
      </div>
    </main>
  );
}
