import { useRouter } from 'next/router'
import styled from 'styled-components'
import Head from 'next/head'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { useState } from 'react'

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
  padding: 10px;
  width: 100%;
  border: 1px solid ${colors.darkGray};

  @media (min-width: ${bp.lg}) {
    order: 1;
    width: 40%;
  }
`
const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
  margin: 10px;
  order: 1;

  @media (min-width: ${bp.lg}) {
    order: 2;
    width: 60%;
    height: 100vh;
  }
`
const SingleStationContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  background: ${colors.yellow};
`
const SingleStationTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 10px;
`
const SingleStationName = styled.h1`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 10px;
`
const SingleStationNumber = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`
const SingleStationAddress = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`
const SingleStationCapacity = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`

const BackContainer = styled.div`
  margin: 30px;
  color: ${colors.navy};
  width: 70px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
`

const Input = styled.input`
  padding: 10px 5px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BikeStation = () => {
  const router = useRouter()
  const { name, address, stationId, capacity } = router.query

  const [map, setMap] = useState(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  })

  if (!isLoaded) {
    return <div>LOADING</div>
  }

  const center = {
    lat: 60.1704,
    lng: 24.9522,
  }

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

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
        <h3> Back </h3>
      </BackContainer>
      <SingleStationContainer>
        <SingleStationTitle> Bike Station Details</SingleStationTitle>
        <SingleStationName>{name}</SingleStationName>
        <SingleStationNumber>Bike Station {stationId}</SingleStationNumber>
        <SingleStationAddress>{address}</SingleStationAddress>
        <SingleStationCapacity>
          Station Bike Capacity: {capacity}
        </SingleStationCapacity>
      </SingleStationContainer>
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
          <h1>Plan your journey</h1>
          <InputContainer>
            <Input placeholder='Origin' />
            <Input placeholder='Destination' />
          </InputContainer>
        </BikeStationsContainer>
      </StationLocationContainer>
    </Container>
  )
}
export default BikeStation
