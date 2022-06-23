import { Food, Recipe } from "../utils/food";

export default class Bouillabaisse implements Recipe {
  food(): Food {
    return {
      name: "Bouillabaisse",
      operations: {
        "ainekset": [
          {"valkosipuli": {"kynsi": 3}},
          {"sipuli": {"kpl": 1}},
          {"varsiselleri": {"oksa": 1}},
          {"fenkoli": {"kpl": 1}},
          {"porkkana": {"kpl": 2}},
          {"purjo": {"osa": 1}},
          {"laakerinlehti": {"kpl": 2}},
          {"valkoviini": {"dl": 3}},
          {"tomaattipyre": {"rkl": 3}},
          {"kalafondi": {"rlk": 2}},
          {"hummeriliemi": {"rlk": 2}},
          {"sitruuna": {"kpl": 1}}
        ],
        "muut": [
          {"aioli": {"dl": 2}},
          {"patonki": {"kpl": 2}}
        ]
      }
    }
  }
}
