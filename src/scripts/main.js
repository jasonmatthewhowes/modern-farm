
/* spreadsheet of functions built here: https://docs.google.com/spreadsheets/d/1GyrwtfR1amTfKSxwgk5c9dw3uF-s--AYW7eXN-lPDvw/edit?usp=sharing */

/* code already provided */
import { createPlan } from "./plan.js";

/* import seed creating functions below. Each function creates a object with properties with the exception of the createCorn funciton which creates an array of object */
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

//import function to add plant to array takes a "seed" item as a parameter
import { addPlant } from "./field.js";

//import function creates a new copy of the array and returns it
import { usePlants } from "./field.js";

//import plantSeeds function
import { plantSeeds } from "./tractor.js";

//import from harvester section
import { harvestPlants } from "./harvester.js";    

import { catalog } from "./catalog.js";


//creates a yearly plan, provided
const yearlyPlan = createPlan();

console.log(yearlyPlan)

//invoke function to plant seeds based on yearly plan. The function takes the array plan and generates a new array of arrays based on the items in the tyearly plan locations

plantSeeds(yearlyPlan)

// invoke useplants function to return the array
let fieldTester = usePlants()

//take fieldTester and then send it to harvester function

let testHarvest = harvestPlants(fieldTester)

let htmlOutput = catalog(testHarvest)

//checkign output of above tests
console.log(htmlOutput)


const parentHTMLElement = document.querySelector(".plant")
parentHTMLElement.innerHTML += catalog(testHarvest)














/* COMMENTING OUT ALL MY TESTING FOR TRACTOR STEP


console.log(yearlyPlan);
console.log("Welcome to the main module");

//creates the seeds by invoking functions for each crop
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

//prints seeds to check to make sure they are created
console.log(asparagusSeed);
console.log(cornSeed);
console.log(potatoSeed);
console.log(soybeanSeed);
console.log(sunflowerSeed);
console.log(wheatSeed);

//adding all seeds to growingCrops array
addPlant (asparagusSeed)
addPlant (cornSeed)
addPlant (potatoSeed)
addPlant (soybeanSeed)
addPlant (sunflowerSeed)
addPlant (wheatSeed)


//run use plants function to create a copy of new array
let testField = usePlants()
console.log(testField)
//all the above testing is still working for me
 */
