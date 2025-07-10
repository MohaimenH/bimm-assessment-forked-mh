import { graphql, HttpResponse } from "msw";
import { carList } from "./data";

export const queryHandlers = [
  graphql.query("GetCars", () => {
    return HttpResponse.json({ data: { cars: carList } });
  }),
    graphql.query("FilterCars", ({ variables }) => {
    const { make, model, year, color } = variables;

    const filteredCars = carList.filter((car) => {
      return (
        (make == null || car.make === make) &&
        (model == null || car.model === model) &&
        (year == null || car.year === year) &&
        (color == null || car.color === color)
      );
    });

    return HttpResponse.json({ data: { cars: filteredCars } });
  })
];
