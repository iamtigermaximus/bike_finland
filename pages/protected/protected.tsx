import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'
import { ProtectedContainer } from './protected.styles'

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
