import { Food, Recipe } from "../utils/food";

export default class Kalapasta implements Recipe {
  food(): Food {
    return {
      name: "kalapasta",
      operations: {
        "ainekset": [
          {"tagliatelle": {"pkt": 1}},
          {"valkosipuli": {"kynsi": 3}},
          {"pekoni": {"g": 100}},
          {"kananmuna": {"kpl": 4}},
          {"ranskankerma": {"dl": 3}},
          {"parmesan": {"dl": 1}}
        ]
      }
    }
  }
}
