import { describe, it } from "mocha";
import { expect } from "chai";
import Person from "../src/person.js";

describe("Person", () => {
  it("should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "1 Moto,Aviao 20000 2020-01-01 2022-02-02"
    );
    const expected = {
      from: "2020-01-01",
      to: "2022-02-02",
      vehicles: ["Moto", "Aviao"],
      kmTraveled: "20000",
      id: "1",
    };

    expect(person).to.be.deep.equal(expected);
  });

  it("should format values", () => {
    const person = new Person({
      from: "2020-01-01",
      to: "2022-02-02",
      vehicles: ["Moto", "Aviao"],
      kmTraveled: "20000",
      id: "1",
    });

    const result = person.formatted("pt-BR");
    const expected = {
      id: 1,
      vehicles: "Moto e Aviao",
      kmTraveled: "20.000 km",
      from: "01 de janeiro de 2020",
      to: "02 de fevereiro de 2022",
    };

    expect(result).to.be.deep.equal(expected);
  });
});
