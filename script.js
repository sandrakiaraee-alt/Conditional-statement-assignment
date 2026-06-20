// if-else
let country = "America"
let nationality = "American"
let age = 17;

if (nationality == "American") {
    if (age >= 18) {
        console.log("candidate can drive and vote");

    }
    else if (age >= 16 && age <= 17) {
        console.log("you can drive, wait till you're eligible to vote");

    }
    else {
        console.log("candidate is too young to vote and drive");

    }
} else {
    console.log("candidate is not an American Citizen");

}

// switch statement
let day = 6;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
}