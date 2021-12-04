const Navigation = () => {
	return (
		<>
			<nav className="navbar w-full h-auto bg-white p-20 shadow-md">
				<div className="navbar-container flex justify-between align-center">
					<div className="navbar-logo w-50 h-50">
						<a className="text-black no-underline" href="#">
							<img src="img/logo.png" alt="" />
						</a>
					</div>
					<ul className="navbar-nav-left flex flex-1 align-center uppercase ml-20">
						<li className="font-bold">
							<a className="mr-4 text-black no-underline" href="/">
								Home
							</a>
						</li>
						<li className="font-bold">
							<a className="mr-4 text-black no-underline" href="/services">
								Services
							</a>
						</li>
						<li className="font-bold">
							<a className="mr-4 text-black no-underline" href="/about">
								About Us
							</a>
						</li>
						<li className="font-bold">
							<a className="mr-4 text-black no-underline" href="/contact">
								Contact
							</a>
						</li>
					</ul>
					<ul className="navbar-nav-right flex align-center">
						<li className="font-bold">
							<a className="flex align-center text-black no-underline" href="/">
								<svg
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
								<span className="my-0 mx-5">Find a Dealer</span>
							</a>
						</li>
						<li className="mr-4 font-bold">
							<button className="btn btn-dark-outline inline-block border border-solid border-black text-black rounded-md py-0 px-5 leading-tight text-center no-underline">
								Sign In
							</button>
						</li>
						<li className="font-bold">
							<button className="btn btn-dark inline-block bg-black border border-solid border-black text-white rounded-md py-0 px-5 leading-tight text-center no-underline">
								Join Now
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
