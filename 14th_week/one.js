let UserName = ["Fahim","Ranajit","Sneha", "Arapan"];

function isUserPresent(user){
    if (UserName.includes(user)){
        console.log(`Yes ${user} is a valid user`)
    }

    else {
        console.log(`No ${user} is a not valid user`)
    }
}

isUserPresent("Someone")
isUserPresent("Fahim")