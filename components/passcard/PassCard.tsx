import {
  BuyPassCard,
  BuyPassCardPrice,
  BuyPassCardSelect,
  BuyPassCardSubtexts,
  BuyPassCardTitle,
  CardsContainer,
} from './PassCard.styles'
import Link from 'next/link'

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
