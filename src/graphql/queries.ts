import { gql } from "../__generated__";

export const GET_CARS = gql(`
  query GetCars {
    cars {
      id
      make
      model
      year
      color
      mobile
      tablet
      desktop
    }
  }
`);

export const FILTER_CARS = gql(`
  query FilterCars($make: String, $model: String, $year: Int, $color: String) {
    cars(make: $make, model: $model, year: $year, color: $color) {
      id
      make
      model
      year
      color
      mobile
      tablet
      desktop
    }
  }
`);
