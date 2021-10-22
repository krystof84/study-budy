import React from 'react';
import { AverageItemWrapper } from './AverageItems.styles';

const AverageItem = (props) => {
  const AverageItemWrapperColor = (props) => {
    const average = parseFloat(props.average);
    let averageColor = '';

    switch (true) {
      case average < 2:
        averageColor = ({ theme }) => theme.colors.error;
        break;
      case average < 3:
        averageColor = ({ theme }) => theme.colors.warning;
        break;
      default:
        averageColor = ({ theme }) => theme.colors.success;
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
