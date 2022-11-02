import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
`
export const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`
export const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
`
export const BackContainer = styled.div`
  margin: 30px;
  color: ${colors.navy};
  width: 70px;
`
export const PassCardContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
`
export const PassCardTitleContainer = styled.div`
  display: flex;
  justify-const: center;
  align-items: center;
  margin: 0 10px;
`
export const PassCardTitle = styled.h1`
  padding: 5;
  font-size: 20px;
`
export const PassCardContentContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  width: 100%;
  height: 100vh;
`
export const SelectedPassCardInfo = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  background: ${colors.gray};
  width: 100%;
  border: 1px solid ${colors.darkGray};
  border-radius: 5px;
`

export const PassTypeContainer = styled.div`
  background: ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${bp.sm}) {
    flex-direction: row;
  }
`

export const CityTitle = styled.h1`
  font-size: 16px;
  padding: 5px;
`
export const PassType = styled.h1`
  font-size: 20px;
  font-weight: 800;
  padding: 5px;

  @media (min-width: ${bp.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const PassTypeInfo = styled.h1`
  font-size: 13px;
  padding: 5px;

  @media (min-width: ${bp.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const PassTypePrice = styled.h1`
  font-size: 30px;
  font-weight: 800;
  padding: 5px;
`

export const AgreementsContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px 0;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`
export const Checkbox = styled.input`
  background: ${colors.deepPink};
  margin: 0 10px;
`
export const Label = styled.label`
  padding: 0 10px;
`

export const AgreementsButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`
export const ContinueButton = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background: ${colors.yellow};
`
export const AbortButton = styled.button`
  padding: 5px 10px;
  margin: 0 10px;
  width: 100px;
  border-radius: 5px;
  border: none;
  background: ${colors.yellow};
`
