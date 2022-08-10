import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import Image from 'next/image'
import CityBike2 from '../../assets/images/City_Bike2.jpeg'
import PassCard from '../../components/PassCard'

const Container = styled.div`
  background: ${colors.white};
  height: 100vh;
`

const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`

const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 40px;
  }
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 10px;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroHeading = styled.h1`
  font-weight: 400;
  font-size: 30px;
  padding: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 25px;
  }
`

const HeroTexts = styled.h1`
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
const ImageContainer = styled.div`
  padding: 20px;
`
const BuyPassContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
  padding-bottom: 50px;
`

const BuyPass = () => {
  return (
    <Container>
      <Head>
        <title>BUY A PASS</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <PageHeadingContainer>
        <Heading>Buy a Pass</Heading>
      </PageHeadingContainer>
      <HeroContainer>
        <HeroTextContainer>
          <HeroHeading>Helsinki and Espoo</HeroHeading>
          <HeroTexts>
            Find the closest available bike and hop on! The bikes are available
            from the beginning of April until the end of October.
          </HeroTexts>
        </HeroTextContainer>
        <ImageContainer>
          <Image src={CityBike2} alt='City Bike' width={900} height={700} />
        </ImageContainer>
      </HeroContainer>
      <BuyPassContainer>
        <HeroHeading>Buy a Pass </HeroHeading>
        <PassCard />
      </BuyPassContainer>
    </Container>
  )
}

export default BuyPass
