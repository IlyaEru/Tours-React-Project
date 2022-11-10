import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Tours from './components/Tours/Tours';
import { getToursData } from './utils/getToursData';

interface TourData {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [toursData, setToursData] = useState<TourData[] | []>([]);

  const updateToursData = async () => {
    const toursData = await getToursData();
    setToursData(toursData);

    setIsLoading(false);
  };

  useEffect(() => {
    updateToursData();
  }, []);

  const handleTourRemove = (tourId: string) => {
    setToursData(
      toursData.filter((tourData) => {
        return tourData.id !== tourId;
      }),
    );
  };

  const handleToursRefresh = () => {
    updateToursData();
  };
  return (
    <div className="container">
      {isLoading ? (
        <Header headerText={'Loading ...'} />
      ) : toursData.length === 0 ? (
        <>
          <Header headerText={'No Tours Left'} />
          <button
            className="btn refresh-btn"
            onClick={() => handleToursRefresh()}
          >
            Refresh
          </button>
        </>
      ) : (
        <>
          <Header headerText={'Our Tours'} />
          <Tours handleTourRemove={handleTourRemove} toursData={toursData} />
        </>
      )}
    </div>
  );
}

export default App;
