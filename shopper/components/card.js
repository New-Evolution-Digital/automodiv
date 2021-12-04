import Image from 'next/image';
import test from '../public/test.jpeg';

const Card = (props) => {
  return (
    <div className='container rounded-lg shadow border-gray-200 border-2 m-5 mx-auto grid gap-4 grid-cols-2 max-w-4xl p-5 dark:bg-gray-800 '>
      <div className='container rounded-md m-2 w-110'>
        <Image
          src={test}
          alt='test image'
          className='rounded shadow-xl border-gray-500 border-4'
        />
      </div>
      <div className='container m-3 '>
        <h4 className='m-3 text-gray-500 dark:text-white uppercase text-xl text-center font-bold '>
          2019 Chevrolet Silverado 1500
        </h4>
        <p className='uppercase text-center text-lg font-semibold dark:text-gray-200'>
          LT Trim Package
        </p>
        <p className='text-3xl font-bold text-blue-500 text-center my-9'>
          $76,000
        </p>
        <div className='container grid grid-cols-3 text-center mt-8 mx-auto '>
          <p className='font-semibold dark:text-white'>
            Engine:<span className='text-green-500'> V6</span>
          </p>
          <p className='font-semibold dark:text-white'>
            Trans: <span className='text-green-500 '>Automatic</span>
          </p>
          <p className='font-semibold dark:text-white'>
            Mileage: <span className='text-green-500 '>110,201</span>
          </p>
        </div>
        {/* Card Button Group Start */}
        <div className='container max-w-full grid grid-cols-3 text-center gap-2 mx-auto '>
          <button className='border-2 shadow-lg max-h-10 max-w-3 rounded-md border-red-800 text-red-800 uppercase font-bold hover:bg-red-800 hover:text-white mt-10 hover:border-black'>
            Call
          </button>
          <button className='border-2 shadow-lg max-h-10 max-w-3 rounded-md border-green-500 text-green-500 uppercase font-bold hover:bg-green-500 hover:text-white mt-10 hover:border-black'>
            Email
          </button>
          <button className='border-2 shadow-lg max-h-10 max-w-3 rounded-md border-blue-500 text-blue-500 uppercase font-bold hover:bg-blue-500 hover:text-white mt-10 py-2 hover:border-black'>
            Text
          </button>
        </div>
        <div>
          <button className='min-w-full py-3 border-2 mt-2 rounded-md border-gray-500 font-bold uppercase hover:bg-gray-500 hover:text-white my-10 hover:border-black shadow-lg dark:border-gray-300 dark:text-gray-200'>
            More Details
          </button>
        </div>
        {/* Card Button Group End */}
      </div>
    </div>
  );
};

export default Card;
