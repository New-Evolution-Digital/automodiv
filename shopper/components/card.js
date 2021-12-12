import Image from 'next/image';
import test from '../public/test.jpeg';

const Card = (props) => {
	return (
		<>
			<div className="relative bg-black opacity-80 inset-0 z-0"></div>
			<div className="relative min-h-screen flex flex-col items-center justify-center ">
				<div className="container">
					<div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6">
						<div className="flex flex-col ">
							<div className="">
								<img className="relative h-62 w-full mb-3" />
								<div className="absolute flex flex-col top-0 right-0 p-3">
									<button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
									</button>
								</div>
								<Image
									src={test}
									alt="truck"
									className=" w-full   object-fill  rounded-2xl"
								/>
							</div>
							<div className="flex-auto justify-evenly">
								<div className="flex flex-wrap ">
									<div className="w-full flex-none text-sm flex items-center text-gray-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 text-red-500 mr-1"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										<span className="text-gray-400 whitespace-nowrap mr-3">
											4.60
										</span>
										<span className="mr-2 text-gray-400">India</span>
									</div>
									<div className="flex items-center w-full justify-between min-w-0 ">
										<h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
											Lorem ipsum is placeholder text commonly used in the
											graphic
										</h2>
										<div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
											INSTOCK
										</div>
									</div>
								</div>
								<div className="text-xl text-white font-semibold mt-1">
									$240.00
								</div>
								<div className="lg:flex  py-4  text-sm text-gray-600">
									<div className="flex-1 inline-flex items-center  mb-3">
										<div className="w-full flex-none text-sm flex items-center text-gray-600">
											<ul className="flex flex-row justify-center items-center space-x-2">
												<li className="">
													<span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
														<a
															href="#blue"
															className="block w-3 h-3 bg-blue-600 rounded-full"
														></a>
													</span>
												</li>
												<li className="">
													<span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
														<a
															href="#yellow"
															className="block w-3 h-3  bg-yellow-400 rounded-full"
														></a>
													</span>
												</li>
												<li className="">
													<span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
														<a
															href="#red"
															className="block w-3 h-3  bg-red-500 rounded-full"
														></a>
													</span>
												</li>
												<li className="">
													<span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
														<a
															href="#green"
															className="block w-3 h-3  bg-green-500 rounded-full"
														></a>
													</span>
												</li>
											</ul>
										</div>
									</div>
									<div className="flex-1 inline-flex items-center mb-3">
										<span className="text-secondary whitespace-nowrap mr-3">
											Size
										</span>
										<div className="cursor-pointer text-gray-400 ">
											<span className="hover:text-purple-500 p-1 py-0">S</span>
											<span className="hover:text-purple-500 p-1 py-0">M</span>
											<span className="hover:text-purple-500 p-1 py-0">L</span>
											<span className="hover:text-purple-500 p-1 py-0">XL</span>
										</div>
									</div>
								</div>
								<div className="flex space-x-2 text-sm font-medium justify-start">
									<button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
										<span>Add Cart</span>
									</button>
									<button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className=""
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

// <div className='container rounded-lg shadow border-gray-200 border-2 m-5 mx-auto grid gap-4 grid-cols-2 max-w-4xl p-5 dark:bg-gray-800 '>
//   <div className='container rounded-md m-2 w-110'>
//     <Image
//       src={test}
//       alt='test image'
//       className='rounded shadow-xl border-gray-500 border-4'
//     />
//   </div>
//   <div className='container m-3 '>
//     <h4 className='m-3 text-gray-500 dark:text-white uppercase text-xl text-center font-bold '>
//       2019 Chevrolet Silverado 1500
//     </h4>
//     <p className='uppercase text-center text-lg font-semibold dark:text-gray-200'>
//       LT Trim Package
//     </p>
//     <p className='text-3xl font-bold text-blue-500 text-center my-9'>
//       $76,000
//     </p>
//     <div className='container grid grid-cols-3 text-center mt-8 mx-auto '>
//       <p className='font-semibold dark:text-white'>
//         Engine:<span className='text-green-500'> V6</span>
//       </p>
//       <p className='font-semibold dark:text-white'>
//         Trans: <span className='text-green-500 '>Automatic</span>
//       </p>
//       <p className='font-semibold dark:text-white'>
//         Mileage: <span className='text-green-500 '>110,201</span>
//       </p>
//     </div>
//     {/* Card Button Group Start */}
//     <div className='container max-w-full grid grid-cols-3 text-center gap-2 mx-auto '>
//       <button className='border-2 shadow-lg max-h-10 max-w-3 rounded-md border-red-800 text-red-800 uppercase font-bold hover:bg-red-800 hover:text-white mt-10 hover:border-black'>
//         Call
//       </button>
//       <button className='border-2 shadow-lg max-h-10 max-w-3 rounded-md border-green-500 text-green-500 uppercase font-bold hover:bg-green-500 hover:text-white mt-10 hover:border-black'>
//         Email
//       </button>
//       <button className='border-2 shadow-lg max-h-10 max-w-3 rounded-md border-blue-500 text-blue-500 uppercase font-bold hover:bg-blue-500 hover:text-white mt-10 py-2 hover:border-black'>
//         Text
//       </button>
//     </div>
//     <div>
//       <button className='min-w-full py-3 border-2 mt-2 rounded-md border-gray-500 font-bold uppercase hover:bg-gray-500 hover:text-white my-10 hover:border-black shadow-lg dark:border-gray-300 dark:text-gray-200'>
//         More Details
//       </button>
//     </div>
//     {/* Card Button Group End */}
//   </div>
// </div>

export default Card;
