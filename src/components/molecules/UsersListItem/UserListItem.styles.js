import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding-top: 33px;
  padding-bottom: 26px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #dfe2e8;
  }
`;

export const NameWrapper = styled.p`
  font-family: 'Monserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColorGrey};
  margin: 0;
`;

export const AttendanceWrapper = styled.p`
  font-family: 'Monserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.fontColorGrey};
  margin: 0;
`;
