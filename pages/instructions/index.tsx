import Head from 'next/head'
import Image from 'next/image'
import CityBike2 from '../../assets/images/City_Bike2.jpeg'
import PassCard from '../../components/passcard/PassCard'
import {
  Container,
  Heading,
  HeroContainer,
  HeroHeading,
  HeroTextContainer,
  HeroTexts,
  ImageContainer,
  InstructionsContainer,
  PageHeadingContainer,
  StepContainer,
  StepContent,
  StepsWrapper,
} from './instructions.styles'

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
