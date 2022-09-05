/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import Link from 'next/link'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import Profile from '../protected'

interface Props {}

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

const SignOutButton = styled.button`
dis
  background: ${colors.yellow};
  color: ${colors.offWhite}
  padding: 10px;
  width: 400px;
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

const SignIn: NextPage = (props): JSX.Element => {
  const { data: session } = useSession()
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    firstName: '',
  })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault()

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    })

    console.log(res)
  }
  return (
    <Container>
      <Head>
        <title>Account</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      {session ? (
        <LoginContainer>
          <Profile />
          <SignInButtonContainer>
            <SignOutButton onClick={() => signOut()}>Log out</SignOutButton>
          </SignInButtonContainer>
        </LoginContainer>
      ) : (
        <LoginContainer>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <LoginTitleContainer>
                <LoginTitle>Login</LoginTitle>
              </LoginTitleContainer>
              <InputLabel>Username</InputLabel>
              <Input
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
                type='email'
                placeholder='Type your email'
              />
              <InputLabel>Password</InputLabel>
              <Input
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
                type='password'
                placeholder='Type your password'
              />
              <ForgotPasswordContainer>
                <Link href={'/auth/forgot-password'}>
                  <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
                </Link>
              </ForgotPasswordContainer>
              <SignInButtonContainer>
                <SignInButton type='submit' value='Login'>
                  Sign in
                </SignInButton>
              </SignInButtonContainer>
              <CreateAccountContainer>
                <CreateAccountTitle>
                  Don't have an account yet?
                </CreateAccountTitle>
              </CreateAccountContainer>
              <SignInButtonContainer>
                <Link href={'/auth/signup'}>
                  <CreateAccountButton>Create account</CreateAccountButton>
                </Link>
              </SignInButtonContainer>
            </InputContainer>
          </form>
        </LoginContainer>
      )}
    </Container>
  )
}

export default SignIn
