import React from 'react';
import styled from 'styled-components';

const AverageItemWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 34px;
  height: 34px;
  background-color: #8fcb81;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AverageItemWrapperSpan = styled.span``;

const AverageItem = (props) => {
  return (
    <AverageItemWrapper>
      <span>{props.average}</span>
    </AverageItemWrapper>
  );
};

export default AverageItem;
