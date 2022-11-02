import Head from 'next/head'
import {
  BuyPassContainer,
  Container,
  Heading,
  HeroContainer,
  HeroHeading,
  HeroTextContainer,
  HeroTexts,
  ImageContainer,
  PageHeadingContainer,
} from './buy-a-pass.styles'
import Image from 'next/image'
import CityBike2 from '../../assets/images/City_Bike2.jpeg'
import PassCard from '../../components/passcard/PassCard'

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
