// Code your solution in this file!
function distanceFromHqInBlocks(loc){
    if (loc > 42){
        return loc - 42;
    } else{
        return 42 - loc;
    }
}

function distanceFromHqInFeet (loc){
    return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet (loc, loc2){
    if (loc > loc2){
        return (loc - loc2) * 264;
    } else{
        return (loc2 - loc) * 264;
    }
}


function calculatesFarePrice (loc, loc2){

    if (distanceTravelledInFeet(loc, loc2) <= 400){
        return 0;
    }
    else if (distanceTravelledInFeet(loc, loc2) > 400 && distanceTravelledInFeet(loc, loc2) <= 2000){
        return (distanceTravelledInFeet(loc, loc2) - 400) * .02;
    }
    else if (distanceTravelledInFeet(loc, loc2) > 2000 && distanceTravelledInFeet(loc, loc2) <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}