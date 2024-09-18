function vacation(groupAmount, typeOfGroup, dayOfWeek) {

    let singlePrice = 0;

    switch (dayOfWeek) {
        case "Friday" :
            if (typeOfGroup === "Students") {
                singlePrice = 8.45;
            } else if (typeOfGroup === "Business") {
                singlePrice = 10.9;
            } else if (typeOfGroup === "Regular") {
                singlePrice = 15;
            } 
            break;

        case "Saturday" :
            if (typeOfGroup === "Students") {
                singlePrice = 9.8;
            } else if (typeOfGroup === "Business") {
                singlePrice = 15.6;
            } else if (typeOfGroup === "Regular") {
                singlePrice = 20;
            } 
            break;
            
        case "Sunday" :
            if (typeOfGroup === "Students") {
                singlePrice = 10.46;
            } else if (typeOfGroup === "Business") {
                singlePrice = 16;
            } else if (typeOfGroup === "Regular") {
                singlePrice = 22.5;
            } 
            break;
    }

    let totalPrice = groupAmount * singlePrice;

    if (typeOfGroup === "Students" && groupAmount >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfGroup === "Business" && groupAmount >= 100) {
         totalPrice -= 10 * singlePrice;
    } else if (typeOfGroup === "Regular" && (groupAmount >= 10 && groupAmount <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}

vacation (30,
    "Students",
    "Sunday"
    );