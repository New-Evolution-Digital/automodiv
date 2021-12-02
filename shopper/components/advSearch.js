import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Link from 'next/link';

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      vehicles {
        id
        make
        model
        new
        used
      }
  }
`;

const AdvSearch = () => {
	const [searchFilter, setSearchFilter] = useState('');
	const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);

	return (
		<>
			<div className="container rounded-lg shadow border-gray-200 border-2 m-5 mx-auto  w-full p-5 flex justify-center">
				<input
					className="rounded border-2 border-gray-300 w-full p-2"
					placeholder="search"
					type="text"
					onChange={(e) => setSearchFilter(e.target.value)}
				/>
				<button
					onClick={() =>
						executeSearch({
							variables: { filter: searchFilter },
						})
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10  m-2  border-2 rounded hover:text-blue-500 hover:border-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			{data &&
				data.feed.vehicles.map((link, index) => (
					<Link key={vehicles.id} link={link} index={index} />
				))}
		</>
	);
};

export default AdvSearch;
