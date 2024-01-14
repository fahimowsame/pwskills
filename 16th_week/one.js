const input = "Fahim Hasan";

function reverseString() {
    return input.split("").reverse().join("");
}

function reverseDelay() {
    setTimeout(() => {
        let reversed = reverseString();
        console.log(`reversed string : ${reversed}`);
    }, 2000);
}

reverseDelay();