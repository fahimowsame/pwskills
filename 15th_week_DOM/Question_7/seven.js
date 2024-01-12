let searchInput = document.querySelector("#SearchItem");
let items = document.querySelectorAll("#items li");

searchInput.addEventListener("input", () => {
    const SearchItem = searchInput.value.toLowerCase();

    items.forEach(item => {
        const itemText = item.innerText.toLowerCase();
        if (itemText.includes(SearchItem)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

  