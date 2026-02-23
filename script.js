const cards = document.querySelectorAll(".card");
const previous = document.getElementById("previous-page");
const next = document.getElementById("next-page");
const pageLinks = document.querySelectorAll(".page-link");
const pageNumbers = document.getElementById("page-numbers");
const cardsPerPage = 4;
const totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;

function displayPage(page) {
    let startIndex = (page - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    })
}

function updateButton() {
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages} `
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === totalPages;
        pageLinks.forEach(link => {
        const page = parseInt(link.textContent);
        link.classList.toggle("active", page === currentPage);

    })
}

previous.addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updateButton();
    }

})

next.addEventListener("click", function () {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updateButton();
    }
})
pageLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); 
        const page = parseInt(link.textContent);
        if (page !== currentPage) {
            currentPage = page;
            displayPage(currentPage);
            updateButton();
        }
    })
})

displayPage(currentPage);
updateButton();
