import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const InstructionStepCard = styled.div`
  width: 100%;
  height: 200px;
  background: ${colors.gray};
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: ${bp.md}) {
    margin: 5px;
  }

  @media (min-width: ${bp.lg}) {
    padding: 20px 50px;
  }
`

export const InstructionCardTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding: 5px;
  white-space: nowrap;

  @media (min-width: ${bp.md}) {
    margin: 10px;
  }
`
export const MoreInfoLink = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.navy};
  padding: 5px;
  cursor: pointer;
  text-decoration: underline;

  @media (min-width: ${bp.md}) {
    margin: 10px;
  }
`
