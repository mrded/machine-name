# machine-name

This library provides simple functions to convert a string into a machine-name

## Installation

- [Latest release](https://github.com/mrded/machine-name/releases)
- NPM: `npm install machine-name`

## Usage
```javascript
import { camel, kebab, pascal, snake } from "machine-name";

kebab("Lorem ipsum dolor sit amet"); // lorem-ipsum-dolor-sit-amet

pascal("Lorem ipsum dolor sit amet"); // LoremIpsumDolorSitAmet

camel("Lorem ipsum dolor sit amet"); // loremIpsumDolorSitAmet

snake("Lorem ipsum dolor sit amet"); // lorem_ipsum_dolor_sit_amet
```
