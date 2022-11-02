import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  background: ${colors.white};
  height: 100vh;
`

export const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`

export const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 40px;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 10px;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeroHeading = styled.h1`
  font-weight: 400;
  font-size: 30px;
  padding: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 25px;
  }
`

export const HeroTexts = styled.h1`
  font-weight: 400;
  font-size: 13px;
  padding: 10px;

  @media (min-width: ${bp.md}) {
    font-size: 15px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 25px;
    padding: 10px 70px;
  }
`
export const ImageContainer = styled.div`
  padding: 20px;
`
export const BuyPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
  padding-bottom: 50px;
`
