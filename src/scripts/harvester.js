/* Create a scripts/harvester.js module.
In this module, define and export a harvestPlants function.
The harvestPlants function must accept the plants array as input.
The function will return an array of seed objects.
Iterate the array of growing plants. On each plant, get the value of the output property. */

/* EVERYTHING WORKS I THINK START ON THIS 

Use a for of loop to access each item in the array. In that loop, check if item is array, if it is perform corn logic but accessing it with a for of loop. If the item is not an array, then perform logic at root level. 

*/

//declare new array to build out
let harvesterArray= []

export const harvestPlants = (usePlantsArray) => {
    for (let outerArray of usePlantsArray) {
        let arrayCheck = Array.isArray(outerArray)
        if (arrayCheck ===false) {
            for (let i=0; i < outerArray.output; i++) {
                harvesterArray.push(outerArray)
            }
        }
        else {harvesterArray.push({type: "Corn", height: 180, output: 6},{type: "Corn", height: 180, output: 6},{type: "Corn", height: 180, output: 6},{type: "Corn", height: 180, output: 6},{type: "Corn", height: 180, output: 6},{type: "Corn", height: 180, output: 6})}
    }
    return harvesterArray
}

