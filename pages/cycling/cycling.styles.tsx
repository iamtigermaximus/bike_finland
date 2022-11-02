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
  font-size: 20px;

  @media (min-width: ${bp.md}) {
    font-size: 40px;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
  width: 100%;
`
export const SearchInput = styled.input`
  padding: 10px 15px;
  margin: 0 10px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background: lightYellow;
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

export const LoadMoreButton = styled.button`
  padding: 10px;
  font-size: 13px;
  background: ${colors.yellow};
  width: 100px;
  border-radius: 5px;
  border: 1px solid ${colors.yellow};
`
export const PanToCenterButton = styled.button`
  padding: 10px 5px;
  border: none;
  font-size: 25px;
  color: orange;
`
