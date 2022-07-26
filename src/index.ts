export const kebab = (string: string) => {
  return string
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s/g, "-");
};

export const pascal = (string: string) => {
  return string
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, "")
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
};

export const camel = (string: string) => {
  return string
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, "")
    .replace(/\s{2,}/g, " ")
    .split(" ")
    .map((word, index) => {
      return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
};

export const snake = (string: string) => {
  return string
    .toLowerCase()
    .replace(/[^A-Za-z0-9 ]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s/g, "_");
};
