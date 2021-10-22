import React from 'react';
import { AverageItemWrapper } from './AverageItems.styles';

const AverageItem = (props) => {
  const AverageItemWrapperColor = (props) => {
    const average = parseFloat(props.average);
    let averageColor = '';

    switch (true) {
      case average < 2:
        averageColor = '#CB8581';
        break;
      case average < 3:
        averageColor = '#E1D888';
        break;
      default:
        averageColor = '#8FCB81';
    }

    return averageColor;
  };

  return (
    <AverageItemWrapper averageColor={AverageItemWrapperColor(props)}>
      {props.average}
    </AverageItemWrapper>
  );
};

export default AverageItem;
