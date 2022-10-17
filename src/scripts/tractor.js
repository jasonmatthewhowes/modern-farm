//importing functions since these are all used in this module. not sure if this is necessary or hurts
import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

/* Export and name function that takes the planting plan (an array of arrays) and iterate over both the outer array and the inner array. If (else if to go through each potential crop names) the individual item in the inner array matches, invoke the corresponding seed making function, then invoke the addPlant fucntion to add crop to list
 */

export const plantSeeds = (largeArray) => {
  for (const outerArray of largeArray) {
    for (const innerArray of outerArray) {
      if (innerArray === "Potato") {
        let potatoSeed = createPotato();
        addPlant(potatoSeed);
      } else if (innerArray === "Soybean") {
        let soybeanSeed = createSoybean();
        addPlant(soybeanSeed);
      } else if (innerArray === "Corn") {
        let cornSeed = createCorn();
        addPlant(cornSeed);
      } else if (innerArray === "Wheat") {
        let wheatSeed = createWheat();
        addPlant(wheatSeed);
      } else if (innerArray === "Asparagus") {
        let asparagusSeed = createAsparagus();
        addPlant(asparagusSeed);
      } else if (innerArray === "Sunflower") {
        let sunflowerSeed = createSunflower();
        addPlant(sunflowerSeed);
      }
    }
  }
};
