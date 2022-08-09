import { useRouter } from 'next/router'
import styled from 'styled-components'
import Head from 'next/head'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

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

const SingleStationCity = styled.h1`
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
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BikeStation = () => {
  const router = useRouter()
  const { name, address, city, stationId, capacity } = router.query

  const [map, setMap] = useState(null)
  const [location, setLocation] = useState({
    lat: 60.1704,
    lng: 24.9522,
  })

  const success = (position: any) => {
    const coordinates = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
    setLocation(coordinates)
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            navigator.geolocation.getCurrentPosition(success)
          }
        })
    }
  }, [])

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  })

  if (loadError) {
    return <div>Error Loading Maps</div>
  }
  if (!isLoaded) {
    return <div>Loading Maps</div>
  }

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const blueDot = {
    fillColor: 'blue',
    fillOpacity: 1,
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    scale: 5,
    strokeColor: 'white',
    strokeWeight: 1,
  }

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
        {city !== 'Espoo' ? (
          <SingleStationCity>Helsinki</SingleStationCity>
        ) : (
          <SingleStationCapacity>{city}</SingleStationCapacity>
        )}
        <SingleStationCapacity>
          Station Bike Capacity: {capacity}
        </SingleStationCapacity>
      </SingleStationContainer>
      <StationLocationContainer>
        <MapContainer>
          <GoogleMap
            center={location}
            zoom={15}
            mapContainerStyle={containerStyle}
          >
            <MarkerF position={location} icon={blueDot} />
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
