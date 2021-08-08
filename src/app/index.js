import * as utils from "./lib/utils";

console.log("Start Play");

const person = {
  name: "Ertan",
  age: 52,
  location: null,
};

if (utils.isNotNull(person.name)) {
  console.log(person.name);
}

if (utils.isNotNull(person.location)) {
  console.log(person.location);
}

console.log(utils.isString(person.name));
