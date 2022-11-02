import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Card from '../../components/card/Card'
import { connectToDatabase } from '../../lib/mongodb'
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api'
import { FaLocationArrow } from 'react-icons/fa'
import {
  BikeStationsContainer,
  Container,
  Heading,
  LoadMoreButton,
  MapContainer,
  PageHeadingContainer,
  PanToCenterButton,
  SearchInput,
  SearchInputContainer,
  StationLocationContainer,
} from './cycling.styles'

export type CardProps = {
  id: number
  name: string
  address: string
  city: string
  operator: string
  capacity: number
  latY?: number
  lngX?: number
}

const Cycling: React.FC<CardProps> = ({ stations }: any) => {
  const [searchStation, setSearchStation] = useState('')
  const [map, setMap] = useState<any | null>(/** @type google.maps.Map */ null)
  const [noOfStations, setNoOfStations] = useState(10)
  const [location, setLocation] = useState({ lat: 60.1704, lng: 24.9522 })

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

  const loadMore = () => {
    setNoOfStations(noOfStations + noOfStations)
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  })

  if (!isLoaded) {
    return <div>LOADING</div>
  }

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const stationIcon = {
    fillColor: 'orange',
    fillOpacity: 1,
    path: 'M12 23c-6.071 0-11-4.929-11-11s4.929-11 11-11 11 4.929 11 11-4.929 11-11 11zm0-23c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm-1.379 12.996c-.125-1.063-.704-2.004-1.599-2.601l.488-.962 1.639 3.563h-.528zm-3.621 3.215c-1.534 0-2.782-1.248-2.782-2.782s1.248-2.783 2.782-2.783c.292 0 .581.046.857.135l-.944 1.863c-.397.043-.703.38-.703.785 0 .435.355.789.79.789.266 0 .515-.136.661-.357h2.088c-.21 1.346-1.377 2.35-2.749 2.35zm.704-3.215l.924-1.824c.602.437 1.006 1.094 1.121 1.824h-2.045zm6.559-3.778l-2.426 3.206-1.478-3.206h3.904zm2.737 6.993c-1.534 0-2.782-1.248-2.782-2.782 0-.969.509-1.871 1.334-2.376l.797 1.93c-.09.132-.138.285-.138.446 0 .435.354.789.789.789.435 0 .789-.354.789-.789 0-.38-.272-.706-.641-.776l-.796-1.93c.21-.051.428-.077.648-.077 1.534 0 2.782 1.249 2.782 2.783 0 1.534-1.248 2.782-2.782 2.782zm0-6.429c-.333 0-.663.045-.98.134l-1.232-2.991h-1.717c-.242 0-.432.2-.432.432 0 .238.194.433.432.433h1.133l.237.564h-4.469l-.266-.564h.145c.243 0 .432-.198.432-.433 0-.239-.193-.432-.432-.432h-1.78c-.115 0-.224.045-.305.126-.082.082-.127.191-.127.306 0 .238.194.433.432.433h.683l.294.641-.797 1.572c-.399-.147-.82-.221-1.251-.221-2.011 0-3.646 1.636-3.646 3.647 0 2.01 1.635 3.646 3.646 3.646 1.86 0 3.405-1.377 3.621-3.214h1.216l3.15-4.174.232.56c-1.153.647-1.865 1.859-1.865 3.182 0 2.01 1.635 3.646 3.646 3.646s3.646-1.636 3.646-3.646c0-2.011-1.635-3.647-3.646-3.647z',
    scale: 1,
    strokeColor: 'orange',
    strokeWeight: 1,
  }
  const blueDot = {
    fillColor: 'blue',
    fillOpacity: 1,
    path: 'm19.023 7c-.389 0-3.3 1-7.023 1-3.75 0-6.605-1-7.024-1-.538 0-.976.438-.976.976 0 .453.321.854.757.951 2.162.563 4.571.948 4.571 3.132 0 3.565-2.321 6.899-3.26 8.476-.086.149-.131.319-.131.489 0 .539.438.976.977.976.261 0 .508-.103.694-.29.769-.772 2.292-3.072 2.989-4.182.391-.622.791-1.18 1.409-1.181.603.001 1.005.559 1.397 1.181.697 1.11 2.219 3.41 2.988 4.182.185.187.432.29.695.29.538 0 .976-.437.976-.976 0-.17-.045-.339-.141-.505-.962-1.617-3.25-4.891-3.25-8.46 0-2.309 2.751-2.661 4.563-3.13.443-.099.766-.5.766-.953 0-.538-.439-.976-.977-.976zm-7-5c1.374 0 2.488 1.12 2.488 2.5s-1.114 2.5-2.488 2.5c-1.373 0-2.489-1.12-2.489-2.5s1.116-2.5 2.489-2.5z',
    scale: 2,
    strokeColor: 'white',
    strokeWeight: 1,
  }

  return (
    <Container>
      <Head>
        <title>CYCLING</title>
        <link rel='icon' href='/City_Bike3.png' />
      </Head>
      <PageHeadingContainer>
        <Heading>City Bikes Helsinki and Espoo</Heading>
      </PageHeadingContainer>
      <StationLocationContainer>
        <MapContainer>
          <GoogleMap
            zoom={15}
            center={location}
            mapContainerStyle={containerStyle}
            onLoad={(map) => setMap(map)}
          >
            <MarkerF position={location} icon={blueDot} />
            {stations.map((station: any) => {
              return (
                <MarkerF
                  key={station._id}
                  position={{ lat: station.y, lng: station.x }}
                  title={station.Osoite}
                  label={{ text: `${station.Nimi}`, color: 'white' }}
                  icon={stationIcon}
                />
              )
            })}
          </GoogleMap>
        </MapContainer>
        <BikeStationsContainer>
          <SearchInputContainer>
            <SearchInput
              placeholder='Search City Bike Station'
              value={searchStation}
              onChange={(e) => setSearchStation(e.target.value)}
            />
            <PanToCenterButton onClick={() => map.panTo(location)}>
              <FaLocationArrow />
            </PanToCenterButton>
          </SearchInputContainer>
          {stations
            .filter((station: any) => {
              if (searchStation == '') {
                return station
              } else if (
                station.Nimi.toLowerCase().includes(searchStation.toLowerCase())
              ) {
                return station
              }
            })
            .slice(0, noOfStations)
            .map((station: any) => (
              <Card
                key={station._id}
                stationId={station.ID}
                name={station.Nimi}
                address={station.Osoite}
                city={station.Kaupunki}
                operator={station.Operaattor}
                capacity={station.Kapasiteet}
                latY={station.y}
                lngX={station.x}
              />
            ))}
          <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
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
