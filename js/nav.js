const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `<section id="header">
        <a href="#"><img src="https://i.postimg.cc/x8ncvFjr/logo.png"></a>
        <div>
            <ul id="navbar">
                <li><a href="index.html?page=home" id="homeLink" >Home</a></li>
                <li><a href="about.html?page=about" id="aboutLink">About</a></li>
                <li><a href="product.html?page=product" id="productLink">All Products</a></li>
            </ul>
        </div>
        <div id="mobile">
            <a href="cart.html"><i class="fal fa-shopping-bag"></i>
                <span class="quantity">0</span>
            </a>
            <i id="bar" class="fas fa-outdent"></i>
        </div>
    </section>
 `;
}

createNav();

/// Get URL parameters
const params = new URLSearchParams(window.location.search);
const page = params.get("page");

// Function to add 'active' class based on URL parameter
function setActiveLink() {
    // Remove 'active' class from all navbar links
    document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));

    // Add 'active' class to the current page link if it matches the parameter
    if (page) {
        const activeLink = document.getElementById(`${page}Link`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
}

// Call the function to set the active link
setActiveLink();
