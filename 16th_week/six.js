const Pattern = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const url = "https://www.linkedin.com/school/university-of-burdwan/"


function isValidURL(inputURL) {
    return Pattern.test(inputURL);
}


if (isValidURL(url)) {
    console.log(`your ${url} match the codition`);
} else {
    console.log(`your ${url} match the codition`);
}