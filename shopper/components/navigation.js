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
			<nav className="navbar w-full h-auto bg-black p-20 shadow-md">
				<div className="navbar-container flex-1 justify-between align-center">
					<div className="navbar-logo w-50 h-50">
						<a className="text-white no-underline" href="#">
							<img src="img/logo.png" alt="" />
						</a>
					</div>
					<ul className="navbar-nav-left flex-1 align-center uppercase ml-20">
						<li className="mx-15 font-bold">
							<a className="text-white no-underline" href="/">
								Home
							</a>
						</li>
						<li className="mx-15 font-bold">
							<a className="text-white no-underline" href="/services">
								Services
							</a>
						</li>
						<li className="mx-15 font-bold">
							<a className="text-white no-underline" href="/about">
								About Us
							</a>
						</li>
						<li className="mx-15 font-bold">
							<a className="text-white no-underline" href="/contact">
								Contact
							</a>
						</li>
					</ul>
					<ul className="navbar-nav-right flex-1 align-center">
						<li className="flex-1 align-center mx-15 font-bold">
							<a className="text-white no-underline" href="/">
								<svg
									className="h-20 w-20 mr-10"
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>Find a Dealer</span>
							</a>
						</li>
						<li className="mx-15 font-bold">
							<button className="btn btn-dark-outline">Sign In</button>
						</li>
						<li className="mx-15 font-bold">
							<button className="btn btn-dark">Join Now</button>
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
