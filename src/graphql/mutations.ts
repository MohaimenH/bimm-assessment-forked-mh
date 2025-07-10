import { gql } from "../__generated__";

export const CREATE_CAR = gql(`
  mutation CreateCar($input: CreateCarInput!) {
    createCar(input: $input) {
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
