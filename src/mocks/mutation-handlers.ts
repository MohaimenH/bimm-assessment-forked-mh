import { graphql, HttpResponse } from "msw";
import { carList } from "./data";

export const mutationHandlers = [
  graphql.mutation("CreateCar", async ({ variables }) => {
    const { input } = variables;
    const newCar = {
      id: crypto.randomUUID(),
      ...input,
    };
    carList.push(newCar);
    return HttpResponse.json({ data: { createCar: newCar } });
  }),
];
