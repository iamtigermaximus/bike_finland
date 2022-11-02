/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

// SIGN-IN

export const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const LoginContainer = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;
  @media (min-width: ${bp.md}) {
    max-width: 500px;
  }
`

export const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
export const LoginTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
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
export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const ForgotPasswordLink = styled.h1`
  font-size: 16px;
  border-radius: 5px;
  padding: 20px 0;
  margin: 0 20px;
  color: ${colors.navy};
`
export const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const SignInButton = styled.button`
  background: ${colors.yellow};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.yellow};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`

export const SignOutButton = styled.button`
dis
  background: ${colors.yellow};
  color: ${colors.offWhite}
  padding: 10px;
  width: 400px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`

export const CreateAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const CreateAccountTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 15px;
  font-weight: 500;
  @media (min-width: ${bp.md}) {
    font-size: 20px;
  }
`
export const CreateAccountButton = styled.button`
  background: ${colors.white};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.black};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`
