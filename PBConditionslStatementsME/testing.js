function testing(input){
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else if (gender === "f") {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    } else {
        console.log("Unknown gender")
    }

}
testing(["15", "hui"]);