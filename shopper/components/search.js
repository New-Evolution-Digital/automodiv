const Search = () => {
  return (
    <div>
      <input
        className='rounded lg:inline-flex lg:w-auto w-full p-3  text-black font-bold items-center justify-center'
        placeholder='search'
      />
      <button>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-auto rounded-md border-2 border-blue-800
        hover:bg-blue-600 hover:border-white text-white '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
