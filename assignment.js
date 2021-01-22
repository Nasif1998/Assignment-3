function kilometerToMeter(km){
    if(km < 0){
        console.log("Distance can't be negative");
    }
    else{
        var distance = km * 1000;
    }
    return distance;
}




function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop){
    if(noOfWatch<0 || noOfPhone<0 || noOfLaptop<0){
        console.log("Number of elements can't be negative");
    }
    else{
        var totalPriceOfWatch = noOfWatch * 50;
        var totalPriceOfPhone = noOfPhone * 100;
        var totalPriceOfLaptop = noOfLaptop * 500;

        var total = totalPriceOfWatch + totalPriceOfPhone + totalPriceOfLaptop;
        return total;
    }
}

