let country = "America"
let nationality = "American"
let age = 17;

if (nationality == "American" ){
    if (age >= 18 ) {
        console.log("candidate can drive and vote");
        
    }
    else if ( age >= 16 && age <= 17  ) {
        console.log("you can drive, wait till you're eligible to vote");
        
    }
    else{
        console.log("candidate is too young to vote and drive");
        
    }
} else{
    console.log("candidate is not an American Citizen");
    
}