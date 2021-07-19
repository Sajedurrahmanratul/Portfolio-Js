// Navbar Toggle

function navbar() {

    const menu = document.querySelector(".bar");
    const cross = document.querySelector("#cross");

    menu.addEventListener("click", () => {
        document.querySelector(".nav-item").classList.add("show");
    })


    cross.addEventListener("click", () => {
        document.querySelector(".nav-item").classList.remove("show")
    })
}

navbar()


// Sticky Navbar

function stickyNav() {
    window.addEventListener("scroll", () => {
        document.querySelector(".nav-item").classList.remove("show")

        const navbar = document.querySelector("nav");
        navbar.classList.toggle("sticky", window.scrollY > 500)
    })
}

stickyNav()


