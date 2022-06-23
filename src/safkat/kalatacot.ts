import { Food, Recipe } from "../utils/food";

export default class Kalatacot implements Recipe {
  food(): Food {
    return {
      name: "kalatacot",
      operations: {
        "taikina": [
          {"olut": {"kpl": 1}},
          {"vehnäjauho": {"dl": 2}},
          {"maizena": {"dl": 1}},
          {"ruokasooda": {"rlk": 0.5}}
        ],
        "täyte": [
          {"punakaali": {"g": 400}},
          {"kevätsipuli": {"varsi": 3}},
          {"korianteri": {"ruukku": 1}},
          {"lime": {"kpl": 3}},
          {"vihreä tabasco": {"osa": 1}},
          {"mustapippuri": {"osa": 1}}
        ],
        "muut": [
          {"tortillat": {"pkt": 2}},
          {"chilimajoneesi": {"dl": 2}},
          {"öljy": {"plo": 1}}
        ]
      }
    }
  }
}
