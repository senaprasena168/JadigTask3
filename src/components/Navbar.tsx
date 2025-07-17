import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-yellow-400 p-2 shadow-md'>
      <div className='container mx-auto flex justify-center'>
        <div className='flex space-x-6'>
          <Link
            href='/'
            className='text-gray-800 hover:text-gray-600 font-semibold text-sm'
          >
            Home
          </Link>
          <Link
            href='/about'
            className='text-gray-800 hover:text-gray-600 font-semibold text-sm'
          >
            About
          </Link>
          <Link
            href='/profile'
            className='text-gray-800 hover:text-gray-600 font-semibold text-sm'
          >
            Profile
          </Link>
          <Link
            href='/products'
            className='text-gray-800 hover:text-gray-600 font-semibold text-sm'
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
