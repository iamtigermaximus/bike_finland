import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const SignUpContainer = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 700px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    max-width: 500px;
  }
`

export const SignUpTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
export const SignUpTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  margin: 0 20px;
`

export const InputLabel = styled.label`
  margin-left: 20px;
  padding: 10px 0;
  font-size: 10px;

  @media (min-width: ${bp.md}) {
    font-size: 15px;
  }
`

export const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const SignUpButton = styled.button`
  background: ${colors.yellow};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.yellow};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    background: ${colors.yellow};
    border: 1px solid ${colors.navy};
  }
`
export const InputForm = styled.form`
  width: 100%;
  > .error {
    color: #fff;
    margin-bottom: 10px;
  }
`
export const ErrorMessage = styled.p`
  color: red;
  margin-left: 25px;
  font-size: 12px;
`
export const FormSubmittedMessage = styled.p`
  color: green;
  margin: 25px;
  font-size: 12px;
`
export const LoginLinkButton = styled.button`
  background: ${colors.white};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.black};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`
