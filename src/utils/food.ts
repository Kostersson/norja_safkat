export interface Recipe {
  food(): Food
}
export interface Food {
  name: string,
  operations: {
    [operation: string]: Ingredients[]
  }
}

export interface Ingredients {
  [name: string]: Amount
}

export interface Amount {
  [unit: string]: number
}
