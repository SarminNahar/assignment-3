//First problem - convert kilometers to meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Sorry ! Your distance value can not be negative."
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
var result = kilometerToMeter(5);
console.log(result);



//second problem - budgetCalculator function for electronic devices

function budgetCalculator(numberOfwatch, numberOfphone, numberOflaptop) {
    var watchPerPerice = 50;
    var phonePerPerice = 100;
    var laptopPerPerice = 500;
    var totalCost = 0;
    if (numberOfwatch < 0 || numberOfphone < 0 || numberOflaptop < 0) {
        return "Sorry ! Your product number can't be negative";
    }
    else {
        var watchPrice = numberOfwatch * 50;
        var watchPrice = numberOfphone * 100;
        var laptopPrice = numberOflaptop * 500;
        var totalCost = watchPrice + watchPrice + laptopPrice;
        return totalCost;
    }
}
var cost = budgetCalculator(10, 5, 5);
console.log(cost);



// Third problem -  calculate hotel cost
function hotelCost(days) {
    var totalCost = 0;
    if (days < 0) {
        return "Sorry ! Your day can't be negative."
    }
    else if (days <= 10) {
        totalCost = days * 100;
    }
    else if (days <= 20) {
        var firstTenDay = 10 * 100;
        var remaining = days - 10;
        var secondTenDay = remaining * 80;     //Days after 10, 20% discount.
        var totalCost = firstTenDay + secondTenDay;
    }

    else {
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remaining = days - 20;
        var after20Day = remaining * 50;    //Days after 20, 50% discount.
        totalCost = firstTenDay + secondTenDay + after20Day;
    }
    return totalCost;
}
var cost = hotelCost(35);
console.log(cost);



//fourth problem - finding mega friend
function megaFriend(friends){
    if(friends == 0){
        return 'Sorry Your friends name is not found';
    }
    var largeName = friends[0];
    for (var i = 0; i < friends.length; i++){
        if (friends[i].length > largeName.length){
            largeName = friends[i];
        }
    }
    return largeName;
}
var friendsName = megaFriend(["sarmin", "sagor", "moniruzzaman", "ahnaf", "abrar"]);
console.log(friendsName);