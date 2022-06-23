import { Food, Recipe } from "../utils/food";

export default class Fishandchips implements Recipe {
  food(): Food {
    return {
      name: "fish & chips",
      operations: {
        "taikina": [
          {"olut": {"kpl": 1}},
          {"vehnäjauho": {"dl": 2}},
          {"maizena": {"dl": 1}},
          {"ruokasooda": {"rlk": 0.5}}
        ],
        "muut": [
          {"ranskalaiset": {"pussi": 1}},
          {"sitruuna": {"kpl": 1}},
          {"chilimajoneesi": {"dl": 2}}
        ]
      }
    }
  }
}
