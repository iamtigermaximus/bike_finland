import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Head from 'next/head'
import Image from 'next/image'
import CityBike3 from '../../assets/images/City_Bike3.png'
import { breakpoints as bp } from '../../utils/layout'

const Container = styled.div`
  background: ${colors.gray};
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
`
const BackContainer = styled.div`
  margin: 30px;
  color: ${colors.navy};
  width: 70px;
`
const PassCardContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
`
const PassCardTitleContainer = styled.div`
  display: flex;
  justify-const: center;
  align-items: center;
  margin: 0 10px;
`
const PassCardTitle = styled.h1`
  padding: 5;
  font-size: 20px;
`
const PassCardContentContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  width: 100%;
  height: 100vh;
`
const SelectedPassCardInfo = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  background: ${colors.gray};
  width: 100%;
  border: 1px solid ${colors.darkGray};
  border-radius: 5px;
`

const PassTypeContainer = styled.div`
  background: ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${bp.sm}) {
    flex-direction: row;
  }
`

const CityTitle = styled.h1`
  font-size: 16px;
  padding: 5px;
`
const PassType = styled.h1`
  font-size: 20px;
  font-weight: 800;
  padding: 5px;

  @media (min-width: ${bp.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const PassTypeInfo = styled.h1`
  font-size: 13px;
  padding: 5px;

  @media (min-width: ${bp.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const PassTypePrice = styled.h1`
  font-size: 30px;
  font-weight: 800;
  padding: 5px;
`

const AgreementsContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px 0;
`
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`
const Checkbox = styled.input`
  background: ${colors.deepPink};
  margin: 0 10px;
`
const Label = styled.label`
  padding: 0 10px;
`

const AgreementsButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`
const ContinueButton = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background: ${colors.yellow};
`
const AbortButton = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background: ${colors.yellow};
`

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
