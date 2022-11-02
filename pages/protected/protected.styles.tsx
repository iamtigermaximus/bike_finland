import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const ProtectedContainer = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;
  padding: 10px;
`
