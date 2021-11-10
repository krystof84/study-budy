import styled from 'styled-components';

export const NavWrapper = styled.nav`
  padding: 47px 22px;
`;

export const NavListItem = styled.li``;

export const NavItemLogo = styled.div`
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  color: #fff;
  text-align: right;
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: 700;
`;

export const NavList = styled.ul`
  list-style: none;
  text-align: right;
  ${NavListItem} {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};
    padding-bottom: 14px;
    font-weight: 700;
    text-decoration: none;
  }
`;
