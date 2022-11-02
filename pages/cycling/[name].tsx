import { useRouter } from 'next/router'
import Head from 'next/head'
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import {
  BackContainer,
  BikeStationsContainer,
  Container,
  Heading,
  Input,
  InputContainer,
  MapContainer,
  PageHeadingContainer,
  SingleStationAddress,
  SingleStationCapacity,
  SingleStationCity,
  SingleStationContainer,
  SingleStationName,
  SingleStationNumber,
  SingleStationTitle,
  StationLocationContainer,
} from './cycling-station.styles'

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
