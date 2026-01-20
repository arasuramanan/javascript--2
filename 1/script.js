// function dish(ingredient){
//     console.log("1. Put on Heat");
//     console.log("2. Add " + ingredient);
//     console.log("3. Boil");
//     console.log("4. Tadka");
// }
// dish("Potato")


let student = {
    name: "Arasu Ramanan",
    math: 64,
    science: 76,
    english: 90,
    history: 75,
    geography: 84
}

let student2 = {
    name: "am",
    math: 84,
    science: 86,
    english: 92,
    history: 95,
    geography: 94
}


function calculateTotal(obj){
    let total = obj.math + obj.science + obj.english + obj.history + obj.geography
    console.log(total);
}
 calculateTotal(student);

 calculateTotal(student2);