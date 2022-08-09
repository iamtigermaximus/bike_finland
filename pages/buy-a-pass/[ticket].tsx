import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import Head from 'next/head'
import Image from 'next/image'
import CityBike3 from '../../assets/images/City_Bike3.png'

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
          {ticket === 'season' ? (
            <PassCardTitle>Buy a Season Pass</PassCardTitle>
          ) : ticket === 'weekly' ? (
            <PassCardTitle>Buy a Weekly Pass</PassCardTitle>
          ) : ticket === 'day' ? (
            <PassCardTitle>Buy a Day Pass</PassCardTitle>
          ) : (
            ''
          )}
        </PassCardTitleContainer>
      </PassCardContainer>
      <PassCardContentContainer></PassCardContentContainer>
    </Container>
  )
}

export default Ticket
