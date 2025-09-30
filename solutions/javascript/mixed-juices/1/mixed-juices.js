// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeTaken = 0;
  switch(name){
    case 'Pure Strawberry Joy':
      timeTaken = 0.5;
      break;
    case 'Energizer':
      timeTaken = 1.5;
      break;
    case 'Green Garden':
      timeTaken = 1.5;
      break;
    case 'Tropical Island':
      timeTaken = 3.0;
      break;
    case 'All or Nothing':
      timeTaken = 5.0;
      break;
    default:
      timeTaken = 2.5;
  }
  return timeTaken;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  console.log("=".repeat(20));
  let i=0;
  let sliceCount = 0;
  while((i<limes.length) && (sliceCount < wedgesNeeded)){
    let sizeOfLime = limes[i];
    switch(sizeOfLime){
      case 'small':
        sliceCount += 6;
        break;
      case 'medium':
        sliceCount += 8;
        break;
      case 'large':
        sliceCount += 10;
        break;
      default:
        sliceCount += 0;
    }
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let position = 0; 
  let currentCount = 0;
  while (position < orders.length){
    if ((timeToMixJuice(orders[position]) + currentCount) >= timeLeft){
      break      
    }
    currentCount += timeToMixJuice(orders[position])
    position++;
  }
  return orders.slice(position+1);
}
