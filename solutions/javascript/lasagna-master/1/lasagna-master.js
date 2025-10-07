/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime = -1){
  var response = ""
  if(remainingTime == 0){
    response = "Lasagna is done.";
  }
  else{
    if (remainingTime>0){
      response = "Not done, please wait.";
    }
    else{
      response = "You forgot to set the timer.";
    }
  }
  return response;
}

export function preparationTime(layers, timeTakenPerLayer = 2){
  return layers.length * timeTakenPerLayer;
}

export function quantities(layers){
  var quantitiesDict = {
    "sauce": 0, 
    "noodles": 0
  }
  console.log(layers)
  for (let i in layers){
    if((layers[i] == "sauce") || (layers[i] == "noodles")){
      quantitiesDict[layers[i]] += 1;
    }
  }
  quantitiesDict["noodles"] *= 50;
  quantitiesDict["sauce"] *= 0.2;
  return quantitiesDict
}

export function addSecretIngredient(friendsList, myList){
  console.log(myList);
  console.log(friendsList.at(-1));
  myList[myList.length] = friendsList.at(-1);
  console.log(myList);
}

export function scaleRecipe(recipe, servings = 2){
  var updatedRecipe = {};
  const parameter = servings/2;
  
  for (let key in recipe){
    updatedRecipe[key] = recipe[key]*parameter;
  }
  return updatedRecipe;
}