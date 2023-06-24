import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: black;
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  position: fixed; /* Set the navbar to fixed position */
  width: 100%;
  box-shadow: 2px 2px 8px gray;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.4rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: orange;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: orange;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /*white-space: nowrap; */
  @media screen and (max-width: 1000px) {
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 1000px) {
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: orange;
  padding: 10px 12px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;
