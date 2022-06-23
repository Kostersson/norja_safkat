import { Food, Recipe } from "../utils/food";

export default class Makkaraperunat implements Recipe {
  food(): Food {
    return {
      name: "fish & chips",
      operations: {
        "ainekset": [
          {"makkara": {"pkt": 2}},
          {"ranet": {"pussi": 2}},
          {"sinappi": {"plo": 1}}
        ]
      }
    }
  }
}
