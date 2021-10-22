import styled from 'styled-components';

export const AverageItemWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 34px;
  height: 34px;
  background-color: ${(props) => props.averageColor};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
