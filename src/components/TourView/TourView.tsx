import { useState } from 'react';
import { StyledTourView } from './TourView.style';

interface Props {
  tour: {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
  };
  handleTourRemove: (tourId: string) => void;
}

export default function TourView({ tour, handleTourRemove }: Props) {
  const { id, image, name, price, info } = tour;
  const [isExpendedInfo, setIsExpendedInfo] = useState(false);
  const infoFirstHalf = info.slice(0, 200);
  const infoSecondHalf = info.slice(200);
  // console.log({ infoFirstHalf, infoSecondHalf });

  return (
    <StyledTourView>
      <img className="tour-img" src={image} alt={name} />
      <div className="tour-content">
        <div className="tour-header">
          <h2>{name}</h2>
          <h2 className="tour-header__price">{price}$</h2>
        </div>

        <p>
          {infoFirstHalf}
          {isExpendedInfo && (
            <span className="more second-info-half">{infoSecondHalf}</span>
          )}
          {!isExpendedInfo && <span className="dots">...</span>}
          <button
            className="btn tour-content__expend-btn"
            onClick={() => setIsExpendedInfo(!isExpendedInfo)}
          >
            {isExpendedInfo ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          className="btn tour-content__remove-btn"
          onClick={() => {
            handleTourRemove(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </StyledTourView>
  );
}
