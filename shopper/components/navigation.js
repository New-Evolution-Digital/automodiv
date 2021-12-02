import Link from 'next/link';
import { useState } from 'react';
import DarkModeSwitch from './darkSwitch';
import Search from './search';

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container flex-1 justify-between align-center'>
          <div className='navbar-logo w-50 h-50'>
            <Link href='/'>
              <img src='img/logo.png' alt='' />
            </Link>
          </div>
          <ul className='navbar-nav-left uppercase flex-1 ml-20'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>



      {/* <nav className='flex items-center flex-wrap bg-blue-500 p-3 '>
        <Link href='/'>
        </Link>

        <button
          className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Search />
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-600 hover:text-white'>
                Contact us
              </a>
            </Link>
          </div>
          <DarkModeSwitch />
        </div>
      </nav> */}
    </>
  );
};

export default Navigation;
