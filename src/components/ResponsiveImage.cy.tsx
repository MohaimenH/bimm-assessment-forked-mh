import { ResponsiveImage } from "./ResponsiveImage";

const imageProps = {
  mobile: "https://example.com/mobile.jpg",
  tablet: "https://example.com/tablet.jpg",
  desktop: "https://example.com/desktop.jpg",
  alt: "Test Vehicle",
};

describe("<ResponsiveImage />", () => {
  it("renders the mobile image by default", () => {
    cy.mount(<ResponsiveImage {...imageProps} />);
    cy.get("img")
      .should("have.attr", "src", imageProps.mobile)
      .and("have.attr", "alt", imageProps.alt);
  });

  it("renders a <picture> element with two <source> elements", () => {
    cy.mount(<ResponsiveImage {...imageProps} />);
    cy.get("picture").should("exist");
    cy.get("source").should("have.length", 2);
  });
});
