import React from "react";
import { Form } from "./Form";

const fields = [
  { name: "make", label: "Make", required: true },
  { name: "model", label: "Model", required: true },
];

const initialValues = {
  make: "",
  model: "",
};

describe("<Form />", () => {
  it("renders all fields and the submit button", () => {
    cy.mount(
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={cy.stub().as("onSubmit")}
        title="Test Form"
        buttonLabel="Save"
      />
    );
    cy.contains("Test Form").should("exist");
    cy.get('input[name="make"]').should("exist");
    cy.get('input[name="model"]').should("exist");
    cy.contains("Save").should("exist");
  });

  it("calls onSubmit with form values", () => {
    const onSubmit = cy.stub().as("onSubmit");
    cy.mount(
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={onSubmit}
        title="Test Form"
        buttonLabel="Save"
      />
    );
    cy.get('input[name="make"]').type("Audi");
    cy.get('input[name="model"]').type("R8");
    cy.contains("Save").click();
    cy.get("@onSubmit").should("have.been.calledWith", {
      make: "Audi",
      model: "R8",
    });
  });

  it("shows error if onSubmit throws", () => {
    cy.mount(
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={() => {
          throw new Error("Submission failed");
        }}
        title="Test Form"
        buttonLabel="Save"
      />
    );
    cy.get('input[name="make"]').type("Audi");
    cy.get('input[name="model"]').type("R8");
    cy.contains("Save").click();
    cy.contains("Submission failed").should("exist");
  });
});