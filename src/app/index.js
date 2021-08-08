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

if (utils.isNull(person.location)) {
  console.log("person.location is null");
}

console.log(utils.isString(person.name));
