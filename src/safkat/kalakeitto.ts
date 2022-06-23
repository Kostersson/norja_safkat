import { Food, Recipe } from "../utils/food";

export default class Kalakeitto implements Recipe {
  food(): Food {
    return {
      name: "kalakeitto",
      operations: {
        "ainekset": [
          {"peruna": {"kpl": 6}},
          {"porkkana": {"kpl": 3}},
          {"kalafondi": {"rlk": 3}},
          {"purjo": {"osa": 1}},
          {"laakerinlehti": {"kpl": 3}},
          {"maustepippuri": {"kpl": 7}},
          {"kerma": {"dl": 2}},
          {"tilli": {"osa": 1}}
        ]
      }
    }
  }
}
