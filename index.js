function distanceFromHqInBlocks (blocks){
    if (blocks > 42){
        return (blocks-42)
    }
    else {
        return (42 - blocks)
    }
}

function distanceFromHqInFeet(street) {
    distanceFromHqInBlocks(street)
     let feet = (distanceFromHqInBlocks(street) * 264)
     return feet
    }

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start)*264
    }
    else {
        return (start - destination)*264
    }
}
function calculatesFarePrice (start, destination){
 let fare = (distanceTravelledInFeet(start, destination))
    if (fare < 400){
        return 0
    }
    else if (fare >400 && fare <= 2000){
        return (fare - 400)* .02
    }
    else if (fare > 2000 && fare < 2500){
        return 25
    }
    else if (fare > 2500){
        return "cannot travel that far"
    }
}