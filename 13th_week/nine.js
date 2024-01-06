const array =[1, 2, 999, 56, "mithun", 78, 85, "pw"];


for (let i = 0; i < array.length; i++){
    if (typeof array[i] === "string"){
        console.log ("Found the firsht string  : " + array[i]);

        break;
    }
    
}


