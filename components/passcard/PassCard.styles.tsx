import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`
export const BuyPassCard = styled.div`
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

export const BuyPassCardTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;

  @media (min-width: ${bp.md}) {
    margin: 10px;
  }
`

export const BuyPassCardSubtexts = styled.h1`
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${bp.lg}) {
    font-size: 16px;
  }
`

export const BuyPassCardPrice = styled.h1`
  font-size: 30px;
  font-weight: 500;
  padding: 0 5px;

  @media (min-width: ${bp.md}) {
    margin: 10px;
    font-size: 50px;
  }
`

export const BuyPassCardSelect = styled.button`
background: ${colors.yellow};
padding: 10px;
width:100%;
margin: 10px;
border: 1px solid ${colors.yellow};
border-radius: 5px;
  }
`
