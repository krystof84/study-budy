import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
`;

export const InputSearchWrapper = styled.div`
  position: relative;
`;

export const SearchResult = styled.div`
  background-color: #fff;
  margin: 10px 0;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  max-height: 180px;
  overflow-y: scroll;
  span {
    display: block;
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 15px 10px;
  }
`;
