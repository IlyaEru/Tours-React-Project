import React from 'react';
import TourView from '../TourView/TourView';
import { StyledTours } from './Tours.style';

interface Props {
  toursData: {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
  }[];
  handleTourRemove: (tourId: string) => void;
}

export default function Tours({ toursData, handleTourRemove }: Props) {
  return (
    <StyledTours>
      {toursData.map((tour) => (
        <TourView
          key={tour.id}
          tour={tour}
          handleTourRemove={handleTourRemove}
        />
      ))}
    </StyledTours>
  );
}
