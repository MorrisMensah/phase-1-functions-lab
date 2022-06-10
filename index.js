// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let location = 42;
    if(distance >= location){
        return distance - location;
    }
    else{
        return location - distance;
    } 
} 
function distanceFromHqInFeet(distance){
    let EachBlockInManhattan = 264
     return distanceFromHqInBlocks(distance) * EachBlockInManhattan   
}

function distanceTravelledInFeet(start, destination){
    let EachBlockInManhattan = 264
    let differenceInFeet = destination - start
    
    if(destination > start){
        return differenceInFeet * EachBlockInManhattan
    }
    else{
        return (start -destination)* EachBlockInManhattan
    }
}

function calculatesFarePrice(start, destination){
    let EachBlockInManhatta = 264
    let differenceInFeet;
    let price;
    if(destination > start){
        differenceInFeet =  (destination - start) * EachBlockInManhatta}
    else{
        differenceInFeet =  (start -destination)* EachBlockInManhatta 
    }

   if (differenceInFeet <= 400){
       price = 0; 
    }
    else if (differenceInFeet > 400 && differenceInFeet <= 2000){
        price = (differenceInFeet - 400) * 0.02
    }
    else if (differenceInFeet > 2000 && differenceInFeet <= 2500){
        price = 25
    }
    else{
        price = 'cannot travel that far'
    }
    return price
}
