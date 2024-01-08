const userMap = new Map();

function adduser(name, age, email){
    const userInformation = {age, email};
    userMap.set(name, userInformation);

}

function updateUser(name, age, email){
    if(userMap.has(name)){
        const userInformation = userMap.get(name);
        userInformation.age = age;
        userInformation.email = email;
    }
}

function deleteUser (name){
    userMap.delete(name)
}

adduser("Fahim", 23, "fahim@gmail.com");
adduser("Ranajit", 25, "ranajit@gmail.com");
console.log(userMap);

updateUser("Fahim", 24, "fahim123@gmail.com");
updateUser("Ranajit", 27, "ranajit123@gmail.com");
console.log(userMap);

deleteUser("Ranajit");
console.log(userMap);
