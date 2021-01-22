//https://github.com/Nasif1998/Assignment-3

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



function hotelCost(days){
    var cost =0;
    if(days<=0){
        console.log("You weren't there even for a day");
    }
    else{
        if(days <= 10){
            cost = days * 100;
        }
        else if(days <= 20){
            var firstTenDayCost = 10 * 100;
            var remainingDays = days - 10;
            var secondPartCost = remainingDays * 80;
            cost = firstTenDayCost + secondPartCost;
        }
        else{
            var firstTenDayCost = 10 * 100;
            var secondPartCost = 10 * 80;
            var remainingDays = days - 20;
            var thirdPartCost = remainingDays * 50;
            cost = firstTenDayCost + secondPartCost + thirdPartCost;
        }
        return cost;
    }
}




function megaFriend(names){
    var largerName =0;
    if(names.length == 0){
        console.log("There is no name");
    }
    else{
        for(var i = 0; i<names.length; i++){
            if(names[i].length > largerName){
                largerName = names[i].length;
                var longestName = names[i];
            }
        }
        return longestName;
    }
}

