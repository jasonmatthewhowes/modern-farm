/* the growingCrops function takes a seed object created from one of the veggie functions as a parameter then adds that object to the array */

let growingCrops = []

export const addPlant = (seedObject) => {
    
    growingCrops.push(seedObject)
    return growingCrops
}


/* This function simply makes a copy of the array and returns it */ 
export const usePlants = () => {
    let copyGrowingCrops = growingCrops
    return copyGrowingCrops
}

