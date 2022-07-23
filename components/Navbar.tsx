import React, { useState } from 'react'
import Link from 'next/link'
import { breakpoints as bp } from '../utils/layout'

import styled from 'styled-components'
import colors from '../utils/colors'
import { FaBars, FaUser, FaTimes } from 'react-icons/fa'

const NavbarContainer = styled.nav`
  width: 100%;
  height: 10vh;
  background: ${colors.navy};
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
  }
`
const BrandLinkItem = styled.h1`
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

const UserLink = styled.div`
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

const BurgerMenu = styled.div`
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

const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px;
 
 &:hover {
  background: ${colors.mediumBlue};
  border-radius: 5px;

}
`
const LinkItem = styled.h1`
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
const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;

  &:hover {
    background: ${colors.mediumBlue};
    border-radius: 5px;
  }
`

const MenuContainer = styled.div`
  display: flex;
`

const MobileMenuContainer = styled.ul`
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

  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link href='/'>
          <BrandLinkItem>Bike Finland</BrandLinkItem>
        </Link>
      </BrandContainer>
      <MenuContainer>
        <NavbarLinks>
          <LinkItemContainer>
            <Link href='/'>
              <LinkItem>City Bikes</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link href='/cycling'>
              <LinkItem>Cycling</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link href='/buy-a-pass'>
              <LinkItem>Buy a Pass</LinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
        <UserLink>
          <Link href='/profile'>
            <a>
              <FaUser />
            </a>
          </Link>
        </UserLink>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
          <MobileMenuContainer
            className={click ? 'category active' : 'category'}
            onClick={categoryMenu}
          >
            <MobileNavbarLinks>
              <LinkItemContainer>
                <Link href='/'>
                  <LinkItem>City Bikes</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link href='/cycling'>
                  <LinkItem>Cycling</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link href='/buy-a-pass'>
                  <LinkItem>Buy a Pass</LinkItem>
                </Link>
              </LinkItemContainer>
            </MobileNavbarLinks>
          </MobileMenuContainer>
        </BurgerMenu>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
