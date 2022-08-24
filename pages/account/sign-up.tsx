/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import Link from 'next/link'

import { useForm, SubmitHandler } from 'react-hook-form'

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
  width: 600px;
  height: 90vh;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;
`

const SignUpTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
const SignUpTitle = styled.h1`
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

const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
const SignUpButton = styled.button`
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

const Profile = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>()

  const submitForm = (data: any) => console.log(data)
  return (
    <Container>
      <Head>
        <title>PROFILE</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <SignUpContainer>
        <SignUpTitleContainer>
          <SignUpTitle>Create an account</SignUpTitle>
        </SignUpTitleContainer>
        <InputForm onSubmit={handleSubmit(submitForm)}>
          <InputContainer>
            <InputLabel>First name</InputLabel>
            <Input
              type='text'
              {...register('firstName', {
                required: true,
                maxLength: 20,
              })}
              placeholder='First name'
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
              placeholder='Last name'
            />
            {errors.lastName?.type === 'required' && (
              <ErrorMessage>Last Name is required</ErrorMessage>
            )}

            <InputLabel>Mobile number</InputLabel>
            <Input
              type='number'
              {...register('mobile', {
                required: true,
                maxLength: 10,
              })}
              placeholder='Mobile'
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
              placeholder='Email'
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
              placeholder='Password'
            />
            {errors.password && <ErrorMessage>Password required</ErrorMessage>}
            <InputLabel>Confirm password</InputLabel>
            <Input
              type='password'
              {...register('password', {
                required: true,
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues()
                    return password === value || 'Passwords should match!'
                  },
                },
              })}
              placeholder='Password'
            />
            {errors.password && <ErrorMessage>Confirm password</ErrorMessage>}
          </InputContainer>
          <SignUpButtonContainer>
            <SignUpButton type='submit'>Continue</SignUpButton>
          </SignUpButtonContainer>
        </InputForm>
      </SignUpContainer>
    </Container>
  )
}

export default Profile
