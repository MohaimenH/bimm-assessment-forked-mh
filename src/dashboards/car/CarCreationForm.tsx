import React from "react";
import { useCreateCarMutation, GetCarsDocument } from "../../__generated__/types";
import { Form } from "../../components/Form";

const carFields = [
  { name: "make", label: "Make", required: true },
  { name: "model", label: "Model", required: true },
  { name: "year", label: "Year", type: "number", required: true },
  { name: "color", label: "Color", required: true },
  { name: "mobile", label: "Mobile Image URL", required: true },
  { name: "tablet", label: "Tablet Image URL", required: true },
  { name: "desktop", label: "Desktop Image URL", required: true },
];

const initialCarValues = {
  make: "",
  model: "",
  year: new Date().getFullYear(),
  color: "",
  mobile: "",
  tablet: "",
  desktop: "",
};

export function CarCreationForm() {
  const [createCar] = useCreateCarMutation();

  const handleSubmit = async (values: Record<string, unknown>) => {
    const carValues = values as typeof initialCarValues;
    await createCar({
      variables: { input: { ...carValues, year: Number(carValues.year) } },
      refetchQueries: [{ query: GetCarsDocument }],
    });
  };

  return (
    <Form
      fields={carFields}
      initialValues={initialCarValues}
      onSubmit={handleSubmit}
      title="Create a Car"
      buttonLabel="Create Car"
    />
  );
}