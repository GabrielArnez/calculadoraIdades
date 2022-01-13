import { render } from "@testing-library/react-native";
import { AgeList } from ".";

test("age list renders correctly", () => {
  const ageList = ["1", "2", "3"];

  const { getByText } = render(<AgeList listAges={ageList} />);

  expect(getByText("1"));
  expect(getByText("2"));
  expect(getByText("3"));
});

test("number of age list is receiving correctly color", () => {
  const ageList = ["1", "20", "41"];

  const { getByText } = render(<AgeList listAges={ageList} />);

  expect(getByText("1").props.color).toBe("#2BB1DB");
  expect(getByText("20").props.color).toBe("#824DF2");
  expect(getByText("41").props.color).toBe("#E48A1F");
});
