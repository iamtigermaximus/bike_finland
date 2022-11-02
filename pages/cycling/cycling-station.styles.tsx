import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  background: ${colors.gray};
  height: 100%;
`
export const PageHeadingContainer = styled.div`
  background: ${colors.darkGray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`
export const Heading = styled.h1`
  text-shadow: 0.6px 0 0;
`

export const StationLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.lg}) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const BikeStationsContainer = styled.div`
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
export const MapContainer = styled.div`
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
export const SingleStationContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  background: ${colors.yellow};
`
export const SingleStationTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 10px;
`
export const SingleStationName = styled.h1`
  font-size: 30px;
  font-weight: 600;
  padding-bottom: 10px;
`
export const SingleStationNumber = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`
export const SingleStationAddress = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`

export const SingleStationCity = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`

export const SingleStationCapacity = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 5px;
`

export const BackContainer = styled.div`
  margin: 30px;
  color: ${colors.navy};
  width: 70px;
  cursor: pointer;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
`

export const Input = styled.input`
  padding: 10px 15px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
