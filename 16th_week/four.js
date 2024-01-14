const bookLists = [
    {
        name: "The Adventures of Tom Sawyer",
        Author : "Mark Twain",
        year : 1876
    },
    {
        name : "Agnibeena",
        Author : "Kazi Nazrul Islam",
        year : 1922
    },
    {
        name : "Ben-Hur",
        Author : "Lew Wallace",
        year : 1880
    },
    {
        name : "Exit West",
        Author : " Mohsin Hamid",
        year : 2017
    }
]


const filterBook = bookLists.filter((book) => {
    return book.year <= 2010;
})

const bookStoreInNewArray = filterBook.map((book) => {
    return {
        name : book.name,
        Author : book.Author,
        year : book.year
    }
})

console.log(bookStoreInNewArray);