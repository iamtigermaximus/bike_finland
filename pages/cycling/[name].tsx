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
  const { name, address, city, stationId, capacity, lngX, latY } = router.query

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
    path: 'm19.023 7c-.389 0-3.3 1-7.023 1-3.75 0-6.605-1-7.024-1-.538 0-.976.438-.976.976 0 .453.321.854.757.951 2.162.563 4.571.948 4.571 3.132 0 3.565-2.321 6.899-3.26 8.476-.086.149-.131.319-.131.489 0 .539.438.976.977.976.261 0 .508-.103.694-.29.769-.772 2.292-3.072 2.989-4.182.391-.622.791-1.18 1.409-1.181.603.001 1.005.559 1.397 1.181.697 1.11 2.219 3.41 2.988 4.182.185.187.432.29.695.29.538 0 .976-.437.976-.976 0-.17-.045-.339-.141-.505-.962-1.617-3.25-4.891-3.25-8.46 0-2.309 2.751-2.661 4.563-3.13.443-.099.766-.5.766-.953 0-.538-.439-.976-.977-.976zm-7-5c1.374 0 2.488 1.12 2.488 2.5s-1.114 2.5-2.488 2.5c-1.373 0-2.489-1.12-2.489-2.5s1.116-2.5 2.489-2.5z',
    scale: 1.5,
    strokeColor: 'white',
    strokeWeight: 1,
  }

  const isMobile = window.innerWidth <= 480

  return (
    <Container>
      <Head>
        <title>Bike Station</title>
        <link rel='icon' href='/City_Bike3.png' />
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
          {isMobile ? (
            <GoogleMap
              center={location}
              zoom={10}
              mapContainerStyle={containerStyle}
            >
              <MarkerF position={location} icon={blueDot} />
              <MarkerF position={{ lat: Number(latY), lng: Number(lngX) }} />
            </GoogleMap>
          ) : (
            <GoogleMap
              center={location}
              zoom={11}
              mapContainerStyle={containerStyle}
            >
              <MarkerF position={location} icon={blueDot} />
              <MarkerF position={{ lat: Number(latY), lng: Number(lngX) }} />
            </GoogleMap>
          )}
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
