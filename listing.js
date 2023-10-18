document.addEventListener('DOMContentLoaded', function() {
    var mixer = mixitup('.product-filter-items');
});

const tires = [
    { size: "small", tread: "summer", loadRating: "A" },
    { size: "medium", tread: "winter", loadRating: "B" },
    { size: "large", tread: "allSeason", loadRating: "C" },
    
];


function filterTires() {
    const sizeFilter = document.getElementById("sizeFilter").value;
    const treadFilter = document.getElementById("treadFilter").value;
    const loadRatingFilter = document.getElementById("loadRatingFilter").value;

    const filteredTires = tires.filter(tire => {
        return (sizeFilter === "all" || tire.size === sizeFilter) &&
               (treadFilter === "all" || tire.tread === treadFilter) &&
               (loadRatingFilter === "all" || tire.loadRating === loadRatingFilter);
    });

    displayTires(filteredTires);
}

function displayTires(filteredTires) {
    const tireList = document.querySelector(".tire-list");
    tireList.innerHTML = ""; 

    if (filteredTires.length === 0) {
        tireList.innerHTML = "<p>No tires match the selected criteria.</p>";
        return;
    }

    filteredTires.forEach(tire => {
        const tireItem = document.createElement("div");
        tireItem.textContent = `Size: ${tire.size}, Tread: ${tire.tread}, Load Rating: ${tire.loadRating}`;
        tireList.appendChild(tireItem);
    });
}


document.getElementById("sizeFilter").addEventListener("change", filterTires);
document.getElementById("treadFilter").addEventListener("change", filterTires);
document.getElementById("loadRatingFilter").addEventListener("change", filterTires);


filterTires();

const reviews = [];


const reviewForm = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");


reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const productName = document.getElementById("productName").value;
    const rating = parseInt(document.getElementById("rating").value);
    const reviewText = document.getElementById("reviewText").value;

    if (productName && rating >= 1 && rating <= 5 && reviewText) {
        const review = {
            productName,
            rating,
            reviewText,
        };

        reviews.push(review);
        displayReviews();
        reviewForm.reset();
    }
});


function displayReviews() {
    reviewList.innerHTML = "";

    reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Product: ${review.productName}</strong><br>Rating: ${review.rating}/5<br>${review.reviewText}`;
        reviewList.appendChild(li);
    });
}


displayReviews();

const navLinks = document.querySelectorAll('nav a');


navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        
        const targetId = link.getAttribute('href');

        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
        });
    });
});function addToCart(productName, price) {
    
    const listItem = document.createElement("li");
    listItem.innerHTML = `${productName} - $${price}`;

    
    const cart = document.getElementById("cart-items");
    cart.appendChild(listItem);
}
