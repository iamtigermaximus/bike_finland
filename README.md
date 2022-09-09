# Bike Finland

## Bike Finland is an application that helps the user in locating Bike stations in Helsinki and Espoo. The user can filter and search for the nearest stations.The app is deployed in Vercel- [Demo](https://bike-finland.vercel.app/)

<img width="707" alt="Screenshot 2022-07-30 at 12 04 25" src="https://user-images.githubusercontent.com/46716968/181903741-9ba3bed4-9b07-4d43-ad43-abcb5f176816.png">
<img width="750" alt="Screenshot 2022-07-30 at 12 05 08" src="https://user-images.githubusercontent.com/46716968/181903743-317be2ce-d444-425c-b074-083aa1ea543f.png">
<img width="935" alt="Screenshot 2022-07-30 at 12 06 00" src="https://user-images.githubusercontent.com/46716968/181903747-9dfbbd39-78f6-4c90-b282-0c8b04a0da6a.png">
<img width="743" alt="Screenshot 2022-07-30 at 12 06 53" src="https://user-images.githubusercontent.com/46716968/181903750-0aa16dd8-b743-4f6f-9de3-8814e15d7676.png">

## Built with:

- NextJS
- React Hooks
- Typescript
- Styled Components
- MongoDB
- React Google Maps
- Next-Auth

## Requirements

- EditorConfig for VSCode
- node v12.x (use nvm)
- yarn (install via npm)
- API key from Google Maps

## Dataset: [https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv](https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv)

## Features:

- Display bike stations in Helsinki and Espoo (displays station name, number and capacity)
- Single Station Page (displays station name, station number, address, and capacity)
- Pagination (load more pagination)
- Filter bike stations
- Search a bike stations
- Plot bike stations on the Map
- Show current location on the Map
- Show specific bike station on the Map (clicked bike station)
- Display different travel pass
- Responsive on different screen size
- SignUp functionality (new user registration)
- Login/ logout for user profile

## To Do:

- Buy travel pass functionality
- Compute the distance and duration between stations
- Display the nearest station from the user location
