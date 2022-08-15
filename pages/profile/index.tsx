/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import Link from 'next/link'

const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
  display: flex;
  justify-content: center;
`

const LoginContainer = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  width: 600px;
  height: 700px;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;
`

const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const LoginTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 40px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${bp.md}) {
    margin: 0 40px;
  }
`
const Input = styled.input`
  border-radius: 5px;
  padding: 15px;
  margin: 0 20px;

  @media (min-width: ${bp.md}) {
    padding: 20px 15px;
  }
`

const InputLabel = styled.label`
  margin-left: 20px;
  padding: 10px 0;
`
const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 40px;
`
const ForgotPasswordLink = styled.h1`
  font-size: 16px;
  border-radius: 5px;
  padding: 20px 0;
  margin: 0 20px;
  color: ${colors.navy};
`
const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const SignInButton = styled.button`
  background: ${colors.yellow};
  padding: 15px;
  width: 300px;
  margin: 10px;
  border: 1px solid ${colors.yellow};
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;

  @media (min-width: ${bp.md}) {
    padding: 20px 15px;
  }
`

const CreateAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  margin: 20px;
`
const CreateAccountTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 10px;
  font-weight: 500;

  @media (min-width: ${bp.md}) {
    font-size: 20px;
  }
`
const CreateAccountButton = styled.button`
  background: ${colors.white};
  padding: 15px;
  width: 300px;
  margin: 20px;
  border: 1px solid ${colors.black};
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;

  @media (min-width: ${bp.md}) {
    padding: 20px 15px;
  }
`

const Profile = () => {
  return (
    <Container>
      <Head>
        <title>PROFILE</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <LoginContainer>
        <LoginTitleContainer>
          <LoginTitle>Login</LoginTitle>
        </LoginTitleContainer>
        <InputContainer>
          <InputLabel>Email or Phone Number</InputLabel>
          <Input />
          <InputLabel>Password</InputLabel>
          <Input />
        </InputContainer>
        <ForgotPasswordContainer>
          <Link href={'/profile/forgot-password'}>
            <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
          </Link>
        </ForgotPasswordContainer>
        <SignInButtonContainer>
          <SignInButton>Sign in</SignInButton>
        </SignInButtonContainer>
        <CreateAccountContainer>
          <CreateAccountTitle>Don't have an account yet?</CreateAccountTitle>
        </CreateAccountContainer>
        <SignInButtonContainer>
          <CreateAccountButton>Create account</CreateAccountButton>
        </SignInButtonContainer>
      </LoginContainer>
    </Container>
  )
}

export default Profile
