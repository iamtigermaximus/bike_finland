import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

const ProtectedContainer = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin: 20px;
  box-shadow: 0 0 10px ${colors.darkGray};
  flex-direction: column;
  padding: 10px;
`

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession()
  console.log(status)
  console.log(data)
  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/signin')
  }, [status])

  if (status === 'authenticated')
    return (
      <ProtectedContainer>
        This page is Protected for special people like{'\n'}
        {JSON.stringify(data, null, 2)}
      </ProtectedContainer>
    )

  return <div>loading</div>
}

export default Protected
