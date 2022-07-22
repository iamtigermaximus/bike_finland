export interface StationsData {
  _id: string
  departure: Date
  return: Date
  departure_station_id: number
  departure_station_name: string
  return_station_id: number
  return_station_name: string
  covered_distance?: number
  duration: number
}
