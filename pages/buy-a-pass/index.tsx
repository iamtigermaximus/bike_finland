import Head from 'next/head'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

const Container = styled.div`
  background: ${colors.gray};
  height: 100vh;
`

const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`

const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
  font-size: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 40px;
  }
`

const BuyPass = () => {
  return (
    <Container>
      <Head>
        <title>BUY A PASS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageHeadingContainer>
        <Heading>Buy a Pass</Heading>
      </PageHeadingContainer>
    </Container>
  )
}

export default BuyPass
