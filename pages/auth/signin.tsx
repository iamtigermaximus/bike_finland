/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
  Container,
  CreateAccountButton,
  CreateAccountContainer,
  CreateAccountTitle,
  ForgotPasswordContainer,
  ForgotPasswordLink,
  Input,
  InputContainer,
  InputLabel,
  LoginContainer,
  LoginTitle,
  LoginTitleContainer,
  SignInButton,
  SignInButtonContainer,
  SignOutButton,
} from './signin.styles'
import Link from 'next/link'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import Profile from '../protected/protected'

interface Props {}

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
            <SignOutButton onClick={() => signOut({ callbackUrl: '/' })}>
              Log out
            </SignOutButton>
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
