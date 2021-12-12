import Navigation from './navigation';
import AdvSearch from './advSearch';
import CardContainer from './cardContainer';

const DisplayContainer = () => {
	return (
		<div>
			<Navigation />
			<div className="container rounded-lg shadow border-gray-200 border-2 m-5 mx-auto grid gap-4 grid-cols-2 max-w-4xl p-5 dark:bg-gray-800">
				<CardContainer />
			</div>
		</div>
	);
};

export default DisplayContainer;
