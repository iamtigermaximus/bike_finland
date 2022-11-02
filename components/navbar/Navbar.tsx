import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaUser, FaTimes } from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import {
  BrandContainer,
  BrandLinkItem,
  BurgerMenu,
  LinkItem,
  LinkItemContainer,
  MenuContainer,
  MobileMenuContainer,
  MobileNavbarLinks,
  NavbarContainer,
  NavbarLinks,
  UserLink,
  UserOnline,
} from './Navbar.styles'

const Navbar = () => {
  const { data: session } = useSession()

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
              <LinkItem>Bike Stations</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link href='/buy-a-pass'>
              <LinkItem>Buy a Pass</LinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
        {session ? (
          <UserOnline>
            <Link href='/auth/signin'>
              <a>
                <FaUser />
              </a>
            </Link>
          </UserOnline>
        ) : (
          <UserLink>
            <Link href='/auth/signin'>
              <a>
                <FaUser />
              </a>
            </Link>
          </UserLink>
        )}

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
                  <LinkItem>Bike Stations</LinkItem>
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
