import { camel, kebab, pascal, snake } from "./index";

it("should make a machine name in kebab case", () => {
  expect(kebab("Lorem ipsum dolor sit amet")).toBe(
    "lorem-ipsum-dolor-sit-amet",
  );
});

it("should make a machine name in pascal case", () => {
  expect(pascal("Lorem ipsum dolor sit amet")).toBe("LoremIpsumDolorSitAmet");
});

it("should make a machine name in camel case", () => {
  expect(camel("Lorem ipsum dolor sit amet")).toBe("loremIpsumDolorSitAmet");
});

it("should make a machine name in snake case", () => {
  expect(snake("Lorem ipsum dolor sit amet")).toBe(
    "lorem_ipsum_dolor_sit_amet",
  );
});
