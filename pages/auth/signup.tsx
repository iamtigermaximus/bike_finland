/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
  Container,
  ErrorMessage,
  FormSubmittedMessage,
  Input,
  InputContainer,
  InputForm,
  InputLabel,
  LoginLinkButton,
  SignUpButton,
  SignUpButtonContainer,
  SignUpContainer,
  SignUpTitle,
  SignUpTitleContainer,
} from './signup.styles'
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
    fetch('/api/auth/signup', {
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
                  <Link href={'/auth/signin'}>
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
