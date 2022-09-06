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
const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.gray};
  padding-bottom: 50px;
`

const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StepContainer = styled.div`
  font-weight: 400;
  font-size: 30px;
  padding: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 25px;
  }
`

const StepContent = styled.h1`
  font-weight: 400;
  font-size: 13px;
  padding: 10px;
`

const BuyPass = () => {
  return (
    <Container>
      <Head>
        <title>HOW IT WORKS</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <PageHeadingContainer>
        <Heading>How it works</Heading>
      </PageHeadingContainer>
      <HeroContainer>
        <ImageContainer>
          <Image src={CityBike2} alt='City Bike' width={900} height={700} />
        </ImageContainer>
        <HeroTextContainer>
          <HeroHeading>City Bikes</HeroHeading>
          <HeroTexts>
            City bikes are shared use bicycles that complement public transport.
            There are about 3,500 city bikes in Helsinki and Espoo and about
            1,000 bikes in Vantaa. You can register as a city bike user for a
            day, week or the whole season. As Helsinki and Espoo have the same
            bike system, you can cycle from one city to the other if you like.
            The Vantaa service is not integrated with the service in Helsinki
            and Espoo.
          </HeroTexts>
        </HeroTextContainer>
      </HeroContainer>
      <InstructionsContainer>
        <HeroHeading>Instructions </HeroHeading>
        <StepsWrapper>
          <StepContainer>
            <HeroHeading>Register</HeroHeading>
            <StepContent>
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет. Се популаризирал во 60-тите години на
              дваесеттиот век со издавањето на збирка од страни во кои се
              наоѓале Lorem Ipsum пасуси, а денес во софтверскиот пакет како што
              е Aldus PageMaker во кој се наоѓа верзија на Lorem Ipsum.
            </StepContent>
          </StepContainer>
          <StepContainer>
            <HeroHeading>Pick up</HeroHeading>
            <StepContent>
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет. Се популаризирал во 60-тите години на
              дваесеттиот век со издавањето на збирка од страни во кои се
              наоѓале Lorem Ipsum пасуси, а денес во софтверскиот пакет како што
              е Aldus PageMaker во кој се наоѓа верзија на Lorem Ipsum.
            </StepContent>
          </StepContainer>
          <StepContainer>
            <HeroHeading>Ride</HeroHeading>
            <StepContent>
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет. Се популаризирал во 60-тите години на
              дваесеттиот век со издавањето на збирка од страни во кои се
              наоѓале Lorem Ipsum пасуси, а денес во софтверскиот пакет како што
              е Aldus PageMaker во кој се наоѓа верзија на Lorem Ipsum.
            </StepContent>
          </StepContainer>
          <StepContainer>
            <HeroHeading>Return</HeroHeading>
            <StepContent>
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми, кој
              се уште не е променет. Се популаризирал во 60-тите години на
              дваесеттиот век со издавањето на збирка од страни во кои се
              наоѓале Lorem Ipsum пасуси, а денес во софтверскиот пакет како што
              е Aldus PageMaker во кој се наоѓа верзија на Lorem Ipsum.
            </StepContent>
          </StepContainer>
        </StepsWrapper>
      </InstructionsContainer>
    </Container>
  )
}

export default BuyPass
