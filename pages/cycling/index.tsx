import { GetServerSideProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import { connectToDatabase } from '../../lib/mongodb'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

export type CardProps = {
  id: number
  name: string
  address: string
  city: string
  operator: string
  capacity: number
}

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

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
  width: 100%;
`
const SearchInput = styled.input`
  padding: 10px 5px;
  margin: 0 10px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StationLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${bp.lg}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const BikeStationsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  order: 2;
  margin: 10px;
  width: 100%;
  @media (min-width: ${bp.lg}) {
    order: 1;
    width: 40%;
  }
`
const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  background: lightYellow;
  height: 50vh;
  width: 100%;
  margin: 10px;
  order: 1;
  @media (min-width: ${bp.lg}) {
    order: 2;
    width: 60%;
  }
`

const Cycling: React.FC<CardProps> = ({ stations }: any) => {
  const [searchStation, setSearchStation] = useState('')
  const [map, setMap] = useState(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  })

  if (!isLoaded) {
    return <div>LOADING</div>
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }

  const containerStyle = {
    width: '100%',
    height: '100%',
  }
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
      <StationLocationContainer>
        <MapContainer>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={containerStyle}
          >
            <Marker position={center} />
          </GoogleMap>
        </MapContainer>
        <BikeStationsContainer>
          <SearchInputContainer>
            <SearchInput
              placeholder='Search City Bike Station'
              onChange={(e) => setSearchStation(e.target.value)}
            />
          </SearchInputContainer>
          {stations.splice(0, 10).map((station: any) => (
            <Card
              key={station.ID}
              name={station.Nimi}
              address={station.Osoite}
              city={station.Kaupunki}
              operator={station.Operaattor}
              capacity={station.Kapasiteet}
            />
          ))}
        </BikeStationsContainer>
      </StationLocationContainer>
    </Container>
  )
}

export default Cycling

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { db } = await connectToDatabase()

  const data = await db
    .collection('bike_stations2')
    .find({})
    .limit(1000)
    .toArray()

  const stations = JSON.parse(JSON.stringify(data))

  return {
    props: {
      stations: stations,
    },
  }
}
