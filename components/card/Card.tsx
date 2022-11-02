import {
  BikeStationCapacity,
  BikeStationCard,
  BikeStationCardContent,
  BikeStationCardHeading,
  BikeStationId,
  BikeStationName,
  BikeStationsLinkItem,
} from './Card.styles'
import Link from 'next/link'

const Card = ({
  id,
  stationId,
  name,
  address,
  city,
  operator,
  capacity,
  latY,
  lngX,
}: any) => {
  return (
    <>
      <Link
        as={`/cycling/${name}`}
        href={{
          pathname: '/cycling/[name]',
          query: {
            stationId,
            name,
            address,
            city,
            operator,
            capacity,
            latY,
            lngX,
          },
        }}
      >
        <BikeStationsLinkItem>
          <BikeStationCard id={id}>
            <BikeStationCardHeading>
              <BikeStationName>{name}</BikeStationName>
              <BikeStationId>Bike Station {stationId}</BikeStationId>
            </BikeStationCardHeading>
            <BikeStationCardContent>
              <BikeStationCapacity>
                Bikes available at the station: {capacity}
              </BikeStationCapacity>
            </BikeStationCardContent>
          </BikeStationCard>
        </BikeStationsLinkItem>
      </Link>
    </>
  )
}

export default Card
