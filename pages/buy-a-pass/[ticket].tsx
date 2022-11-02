import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import CityBike3 from '../../assets/images/City_Bike3.png'
import {
  AbortButton,
  AgreementsButtonContainer,
  AgreementsContainer,
  BackContainer,
  Checkbox,
  CheckboxContainer,
  CityTitle,
  Container,
  ContinueButton,
  Heading,
  Label,
  PageHeadingContainer,
  PassCardContainer,
  PassCardContentContainer,
  PassCardTitle,
  PassCardTitleContainer,
  PassType,
  PassTypeContainer,
  PassTypeInfo,
  PassTypePrice,
  SelectedPassCardInfo,
} from './buy-a-pass-ticket.styles'

const Ticket = () => {
  const router = useRouter()
  const { ticket } = router.query

  return (
    <Container>
      <Head>
        <title>Bike Pass Card</title>
      </Head>
      <PageHeadingContainer>
        <Heading>Bike Pass Card</Heading>
      </PageHeadingContainer>
      <BackContainer onClick={() => router.back()}>
        <h3> Back</h3>
      </BackContainer>
      <PassCardContainer>
        <Image src={CityBike3} alt='City Bike' width={40} height={30} />
        <PassCardTitleContainer>
          {<PassCardTitle>{`Buy a  ${ticket} pass`}</PassCardTitle>}
        </PassCardTitleContainer>
      </PassCardContainer>
      <PassCardContentContainer>
        <SelectedPassCardInfo>
          <CityTitle>Helsinki and Espoo</CityTitle>
          {ticket === 'season' ? (
            <PassTypeContainer>
              <PassType>Season Ticket</PassType>
              <PassTypeInfo>until 31.10.2022</PassTypeInfo>
              <PassTypePrice>35 €</PassTypePrice>
            </PassTypeContainer>
          ) : ticket === 'weekly' ? (
            <PassTypeContainer>
              <PassType>Weekly Ticket</PassType>
              <PassTypeInfo>Today + 6 days</PassTypeInfo>
              <PassTypePrice>10 €</PassTypePrice>
            </PassTypeContainer>
          ) : ticket === 'day' ? (
            <PassTypeContainer>
              <PassType>Day Ticket</PassType>
              <PassTypeInfo>24h</PassTypeInfo>
              <PassTypePrice>5 €</PassTypePrice>
            </PassTypeContainer>
          ) : (
            ''
          )}
        </SelectedPassCardInfo>
        <AgreementsContainer>
          <CheckboxContainer>
            <Checkbox type='checkbox' />
            <Label>
              I can use city bikes continuously for 30 minutes. After that, €1
              will be charged for each additional 30 minutes.
            </Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type='checkbox' />
            <Label>
              The maximum time of use in 5 hours. If I exceed this time, I will
              be charged
            </Label>
          </CheckboxContainer>
          <AgreementsButtonContainer>
            <ContinueButton disabled={true}>Continue</ContinueButton>
            <AbortButton onClick={() => alert('Aborted')}> Abort</AbortButton>
          </AgreementsButtonContainer>
        </AgreementsContainer>
      </PassCardContentContainer>
    </Container>
  )
}

export default Ticket
