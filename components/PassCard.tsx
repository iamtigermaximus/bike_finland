import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import { breakpoints as bp } from '../utils/layout'
import Link from 'next/link'

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`
const BuyPassCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.white};
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: ${bp.md}) {
    margin: 20px;
  }

  @media (min-width: ${bp.lg}) {
    padding: 20px 50px;
  }
`

const BuyPassCardTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;

  @media (min-width: ${bp.md}) {
    margin: 10px;
  }
`

const BuyPassCardSubtexts = styled.h1`
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${bp.lg}) {
    font-size: 16px;
  }
`

const BuyPassCardPrice = styled.h1`
  font-size: 30px;
  font-weight: 500;
  padding: 0 5px;

  @media (min-width: ${bp.md}) {
    margin: 10px;
    font-size: 50px;
  }
`

const BuyPassCardSelect = styled.button`
background: ${colors.yellow};
padding: 10px;
width:100%;
margin: 10px;
border: 1px solid ${colors.yellow};
border-radius: 5px;
  }
`

const PassCard = ({ ticket }: any) => {
  return (
    <CardsContainer>
      <BuyPassCard>
        <BuyPassCardTitle>Season</BuyPassCardTitle>
        <BuyPassCardSubtexts>
          Until 31 October 2022, unlimited number of up to 30-minute rides, 1
          bike
        </BuyPassCardSubtexts>
        <BuyPassCardPrice>€35</BuyPassCardPrice>
        <BuyPassCardSubtexts>+ potential extra charges</BuyPassCardSubtexts>
        <Link href='/buy-a-pass/season'>
          <BuyPassCardSelect>Select</BuyPassCardSelect>
        </Link>
      </BuyPassCard>
      <BuyPassCard>
        <BuyPassCardTitle>Week</BuyPassCardTitle>
        <BuyPassCardSubtexts>
          Today + 6 days, unlimited number of up to 30-minute rides, 1 bike
        </BuyPassCardSubtexts>
        <BuyPassCardPrice>€10</BuyPassCardPrice>
        <BuyPassCardSubtexts>+ potential extra charges</BuyPassCardSubtexts>
        <Link href='/buy-a-pass/weekly'>
          <BuyPassCardSelect>Select</BuyPassCardSelect>
        </Link>
      </BuyPassCard>
      <BuyPassCard>
        <BuyPassCardTitle>Day</BuyPassCardTitle>
        <BuyPassCardSubtexts>
          24h, unlimited number of up to 30-minute rides, 1-4 bikes, €5/bike
        </BuyPassCardSubtexts>
        <BuyPassCardPrice>€5</BuyPassCardPrice>
        <BuyPassCardSubtexts>+ potential extra charges</BuyPassCardSubtexts>
        <Link href='/buy-a-pass/day'>
          <BuyPassCardSelect>Select</BuyPassCardSelect>
        </Link>
      </BuyPassCard>
    </CardsContainer>
  )
}

export default PassCard
