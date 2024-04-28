import SelectedPlanet from "./selected-spacecraft.component.js";
import React from "react";
import renderer from "react-test-renderer";

describe("selected-spacecraft", () => {
  it("should render when no planet is selected", () => {
    const tree = renderer.create(<SelectedPlanet />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
