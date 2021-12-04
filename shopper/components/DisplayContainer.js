import Navigation from './navigation';
import AdvSearch from './advSearch';
import CardContainer from './cardContainer';

const DisplayContainer = () => {
  return (
    <div>
      <Navigation />
      <div>
        <AdvSearch />
        <CardContainer />
      </div>
    </div>
  );
};

export default DisplayContainer;
