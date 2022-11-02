import { breakpoints as bp } from '../../utils/layout'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const FooterContainer = styled.div`
  background: ${colors.navy};
  height: 20px;
  width: 100%;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`
export const FooterContent = styled.h1`
  font-size: 13px;
`
