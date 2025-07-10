import { VehicleCard } from "./VehicleCard";

const vehicle = {
  id: "1",
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Blue",
  mobile: "https://example.com/mobile.jpg",
  tablet: "https://example.com/tablet.jpg",
  desktop: "https://example.com/desktop.jpg",
};

describe("<VehicleCard />", () => {
  it("renders vehicle details", () => {
    cy.mount(<VehicleCard vehicle={vehicle} />);
    cy.contains("2022 Toyota Corolla").should("exist");
    cy.contains("Color: Blue").should("exist");
  });

  it("renders the responsive image", () => {
    cy.mount(<VehicleCard vehicle={vehicle} />);
    cy.get("img")
      .should("have.attr", "src", vehicle.mobile)
      .and("have.attr", "alt", "Toyota Corolla");
  });

  it("has a Card and CardContent", () => {
    cy.mount(<VehicleCard vehicle={vehicle} />);
    cy.get(".MuiCard-root").should("exist");
    cy.get(".MuiCardContent-root").should("exist");
  });
});
