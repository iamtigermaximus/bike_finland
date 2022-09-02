/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import Link from 'next/link'
import { useState } from 'react'

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
  width: 100%;
  height: 600px;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    max-width: 500px;
  }
`

const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
const LoginTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Input = styled.input`
  border-radius: 5px;
  padding: 10px;
  margin: 0 20px;
`

const InputLabel = styled.label`
  margin-left: 20px;
  padding: 10px 0;
  font-size: 10px;

  @media (min-width: ${bp.md}) {
    font-size: 15px;
  }
`
const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
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
  padding: 15px;
`
const SignInButton = styled.button`
  background: ${colors.yellow};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.yellow};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`

const CreateAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
const CreateAccountTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 15px;
  font-weight: 500;

  @media (min-width: ${bp.md}) {
    font-size: 20px;
  }
`
const CreateAccountButton = styled.button`
  background: ${colors.white};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.black};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`
const LoginForm = styled.form``

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <Head>
        <title>Account</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <LoginContainer>
        <LoginForm>
          <InputContainer>
            <LoginTitleContainer>
              <LoginTitle>Login</LoginTitle>
            </LoginTitleContainer>
            <InputLabel>Email or Phone Number</InputLabel>
            <Input
              type='email'
              name='email'
              placeholder='Type your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel>Password</InputLabel>
            <Input
              type='password'
              name='password'
              placeholder='Type your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ForgotPasswordContainer>
              <Link href={'/account/forgot-password'}>
                <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
              </Link>
            </ForgotPasswordContainer>
            <SignInButtonContainer>
              <SignInButton>Sign in</SignInButton>
            </SignInButtonContainer>
            <CreateAccountContainer>
              <CreateAccountTitle>
                Don't have an account yet?
              </CreateAccountTitle>
            </CreateAccountContainer>
            <SignInButtonContainer>
              <Link href={'/auth/sign-up'}>
                <CreateAccountButton>Create account</CreateAccountButton>
              </Link>
            </SignInButtonContainer>
          </InputContainer>
        </LoginForm>
      </LoginContainer>
    </Container>
  )
}

export default Login
