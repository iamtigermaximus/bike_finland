import { useRouter } from 'next/router'
import styled from 'styled-components'
import Head from 'next/head'
import colors from '../../utils/colors'

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
`

const SingleStationContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`
const BackContainer = styled.div`
  width: 70px;
  background: yellow;
`
const BikeStation = () => {
  const router = useRouter()
  const { name, address, stationId, capacity } = router.query

  console.log('name1', router.query)

  return (
    <Container>
      <Head>
        <title>Bike Station</title>
      </Head>
      <PageHeadingContainer>
        <Heading>Bike Station</Heading>
      </PageHeadingContainer>
      <BackContainer onClick={() => router.back()}>
        <h3>Back</h3>
      </BackContainer>
      <SingleStationContainer>
        <h1>Single Station Page</h1>
        <h1>{name}</h1>
        <h3>Bike Station {stationId}</h3>
        <h3>{address}</h3>
        <h2>Capacity {capacity}</h2>
      </SingleStationContainer>
    </Container>
  )
}
export default BikeStation
