import { readdir } from "fs";
import { Amount, Food, Ingredients } from "./utils/food";


function readSafkat(files: string[]): Promise<Food>[] {
  return files.map(async file => {
    const module = await import('./safkat/' + file)
    return new module.default().food()
  })
}

function calculateAmounts(ingredients: Ingredients, food: Food) {
  return Object.values(food.operations).reduce((acc, operation) => {
    return handleOperation(acc, operation)
  }, {...ingredients})
}

function handleOperation(ingredients: Ingredients, operation: Ingredients[]): Ingredients {
  return operation.reduce((acc, ingredient) => {
    return handleIngredient(acc, ingredient)
  }, {...ingredients})
}

function handleIngredient(ingredients: Ingredients, ingredient: Ingredients): Ingredients {
  return Object.entries(ingredient).reduce((acc, [ingredientName, unitObject]) => {
    return addToIngredients(ingredients, ingredientName, unitObject)
  }, {...ingredients})
}

function addToIngredients(ingredients: Ingredients, ingredientName: string, unitObject: Amount): Ingredients {
  const ingredientsCopy = {...ingredients}
  const [unit, amount] = Object.entries(unitObject).shift() as [string, number]
  if (ingredientsCopy.hasOwnProperty(ingredientName)) {
    if (ingredientsCopy[ingredientName].hasOwnProperty(unit)) {
      ingredientsCopy[ingredientName][unit] += amount
    } else {
      ingredientsCopy[ingredientName][unit] = amount
    }
  } else {
    ingredientsCopy[ingredientName] = unitObject
  }
  return {...ingredientsCopy}
}

(async () => {
  readdir('./safkat', async (err, files) => {
    const safkat = await Promise.all(readSafkat(files))
    const allIngredients = safkat.reduce((ingredients, safka) => {
      return calculateAmounts(ingredients, safka)
    }, {} as Ingredients)
    console.log(allIngredients)
  })
})()


