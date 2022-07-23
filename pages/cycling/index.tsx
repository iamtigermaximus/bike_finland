import { GetStaticProps } from 'next'

import Head from 'next/head'
import styled from 'styled-components'
import { connectToDatabase } from '../../lib/mongodb'
import colors from '../../utils/colors'

const Container = styled.div`
  background: ${colors.gray};
  height: 100%;
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
`

const StationsContainer = styled.div`
  height: 100%;
  background: ${colors.yellow};
`

const Cycling = ({ stations }: any) => {
  return (
    <Container>
      <Head>
        <title>CYCLING</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageHeadingContainer>
        <Heading>City Bikes Helsinki and Espoo</Heading>
      </PageHeadingContainer>
      <StationsContainer>
        {stations.splice(0, 30).map((station: any) => (
          <h1 key={station._id}>{station.departure_station_name}</h1>
        ))}
      </StationsContainer>
    </Container>
  )
}

export default Cycling

export const getStaticProps: GetStaticProps = async (context) => {
  const { db } = await connectToDatabase()

  const data = await db
    .collection('bike_stations')
    .find({})
    .limit(30000)
    .toArray()

  const stations = JSON.parse(JSON.stringify(data))

  return {
    props: {
      stations: stations,
    },
  }
}
