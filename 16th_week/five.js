const Pattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
const url = "https://pwskills.com"


function isValidURL(inputURL) {
    return Pattern.test(inputURL);
}


if (isValidURL(url)) {
    console.log(`your ${url} match the codition`);
} else {
    console.log(`your ${url} match the codition`);
}