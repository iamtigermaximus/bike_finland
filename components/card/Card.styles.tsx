import styled from 'styled-components'
import colors from '../../utils/colors'

export const BikeStationsLinkItem = styled.a`
  width: 100%;
  margin: 10px;
`

export const BikeStationCard = styled.div`
  border: 1px solid ${colors.darkGray};
  background: ${colors.gray};
  width: 100%;
`

export const BikeStationCardHeading = styled.div`
  padding: 10px;
  margin: 10px;
`
export const BikeStationCardContent = styled.div`
  background: ${colors.yellow};
  padding: 10px;
  margin: 10px;
`

export const BikeStationName = styled.h1`
  font-weight: 800;
  font-size: 20px;
`
export const BikeStationId = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
export const BikeStationAddress = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
export const BikeStationCity = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
export const BikeStationCapacity = styled.h3`
  font-weight: 800;
  font-size: 16px;
`
