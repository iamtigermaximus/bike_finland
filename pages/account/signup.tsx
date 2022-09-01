/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import Link from 'next/link'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  firstName: string
  lastName: string
  mobile: number
  email: string
  password: string
}

const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
  display: flex;
  justify-content: center;
`

const SignUpContainer = styled.div`
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

const SignUpTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`
const SignUpTitle = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
const SignUpButton = styled.button`
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
const InputForm = styled.form`
  width: 100%;
  > .error {
    color: #fff;
    margin-bottom: 10px;
  }
`
const ErrorMessage = styled.p`
  color: red;
  margin-left: 25px;
  font-size: 12px;
`
const FormSubmittedMessage = styled.p`
  color: green;
  margin: 25px;
  font-size: 12px;
`
const LoginLinkButton = styled.button`
  background: ${colors.white};
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.black};
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
`

const SignUp = () => {
  const [loading, setLoading] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const submitForm = async (data: any) => {
    setLoading(true)
    fetch('/api/users/addUser', {
      method: 'POST',

      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
        email: data.email,
        password: data.password,
      }),

      headers: {
        'Content-type': 'application/json',
      },
    })
    setLoading(false)
    setIsSuccessfullySubmitted(true)
    reset()
    setLoading(true)
    console.log(data)
  }

  return (
    <Container>
      <Head>
        <title>PROFILE</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <SignUpContainer>
        <InputForm onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            <SignUpTitleContainer>
              <SignUpTitle>Create an account</SignUpTitle>
            </SignUpTitleContainer>
            <InputLabel>First name</InputLabel>
            <Input
              type='text'
              {...register('firstName', {
                required: true,
                maxLength: 20,
              })}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName?.type === 'required' && (
              <ErrorMessage>First Name is required</ErrorMessage>
            )}
            <InputLabel>Last name</InputLabel>
            <Input
              type='text'
              {...register('lastName', {
                required: true,
                maxLength: 20,
              })}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName?.type === 'required' && (
              <ErrorMessage>Last Name is required</ErrorMessage>
            )}

            <InputLabel>Mobile number</InputLabel>
            <Input
              type='number'
              {...register('mobile', {
                required: true,
                pattern: /^[0-9+-]+$/,
                minLength: 6,
                maxLength: 12,
              })}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <ErrorMessage>Mobile number is required</ErrorMessage>
            )}
            <InputLabel>Email</InputLabel>
            <Input
              type='email'
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter valid Email',
                },
              })}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <ErrorMessage>Email address is required</ErrorMessage>
            )}

            <InputLabel>Password</InputLabel>
            <Input
              type='password'
              {...register('password', {
                required: true,
              })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <ErrorMessage>Password required</ErrorMessage>}
            <SignUpButtonContainer>
              <SignUpButton type='submit' disabled={!loading ? true : false}>
                Create user
              </SignUpButton>
              {isSuccessfullySubmitted && (
                <>
                  <FormSubmittedMessage>
                    Form submitted successfully
                  </FormSubmittedMessage>
                  <Link href={'/account/login'}>
                    <LoginLinkButton>Login to your account? </LoginLinkButton>
                  </Link>
                </>
              )}
            </SignUpButtonContainer>
          </InputContainer>
        </InputForm>
      </SignUpContainer>
    </Container>
  )
}

export default SignUp
