import styled from 'styled-components'
import colors from '../utils/colors'
import Link from 'next/link'
import { breakpoints as bp } from '../utils/layout'

const BikeStationsLinkItem = styled.a`
  width: 100%;
  margin: 10px;
`

const BikeStationCard = styled.div`
  border: 1px solid ${colors.darkGray};
  background: ${colors.gray};
  width: 100%;
`

const BikeStationCardHeading = styled.div`
  padding: 10px;
  margin: 10px;
`
const BikeStationCardContent = styled.div`
  background: ${colors.yellow};
  padding: 10px;
  margin: 10px;
`

const BikeStationName = styled.h1`
  font-weight: 800;
  font-size: 20px;
`
const BikeStationId = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
const BikeStationAddress = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
const BikeStationCity = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
const BikeStationCapacity = styled.h3`
  font-weight: 800;
  font-size: 16px;
`

const SingleStationCard = ({
  id,
  name,
  address,
  city,
  operator,
  capacity,
}: any) => {
  return (
    <>
      <BikeStationsLinkItem>
        <BikeStationCard id={id}>
          <BikeStationCardHeading>
            <BikeStationName>{name}</BikeStationName>
            <BikeStationId>Bike Station {id}</BikeStationId>
            <BikeStationAddress>{address}</BikeStationAddress>
            {city !== 'Espoo' ? (
              <BikeStationCity>Helsinki</BikeStationCity>
            ) : (
              <BikeStationCity>{city}</BikeStationCity>
            )}
          </BikeStationCardHeading>

          <BikeStationCardContent>
            <BikeStationCapacity>
              Bikes available at the station: {capacity}
            </BikeStationCapacity>
          </BikeStationCardContent>
        </BikeStationCard>
      </BikeStationsLinkItem>
    </>
  )
}

export default SingleStationCard
