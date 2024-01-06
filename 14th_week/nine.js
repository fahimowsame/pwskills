const firstUsername = "Mithun";
const secondUsername = "Anurag";

function uniqueCharactersCheck(username) {
    const charSet = new Set();

    for (let i = 0; i < username.length; i++) {
        if (charSet.has(username[i])) {
            console.log("The input string contains duplicate characters");
            return false;
        }
        charSet.add(username[i]);
    }
    console.log("The input string contains unique characters");
    return true;
}

console.log(uniqueCharactersCheck(firstUsername));
console.log(uniqueCharactersCheck(secondUsername));




