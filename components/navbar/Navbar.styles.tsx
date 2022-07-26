import { breakpoints as bp } from '../../utils/layout'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${colors.navy};
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
  }
`
export const BrandLinkItem = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    text-shadow: 0.6px 0 0;
  }
`

export const UserLink = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding-top: 7px;
  font-size: 25px;

  > a {
    color: ${colors.offWhite};
  }

  @media (min-width: ${bp.lg}) {
    margin: 10px 20px;
  }
`
export const UserOnline = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding-top: 7px;
  font-size: 25px;

  > a {
    color: #00ff00;
  }

  @media (min-width: ${bp.lg}) {
    margin: 10px 20px;
  }
`

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
  padding: 5px;
  color: ${colors.offWhite};
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    display: none;
  }
`

export const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px;
 
 &:hover {
  background: ${colors.mediumBlue};
  border-radius: 5px;

}
`
export const LinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px;
  width: 100%;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    text-shadow: 0.6px 0 0;
  }
`
export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  &:hover {
    background: ${colors.mediumBlue};
    border-radius: 5px;
  }
`

export const MenuContainer = styled.div`
  display: flex;
`

export const MobileMenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 10vh;
  width: 100%;
  height: 100vh;
  background: ${colors.navy};
  transform: translateX(0%);
  transition: transform 0.3s ease-out;
  z-index: 1;

  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`
