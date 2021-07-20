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
        //menubar Remove Whenever Scroll
        document.querySelector(".nav-item").classList.remove("show")

        //whenever We Scroll 500px down
        const scrollToTop = document.querySelector(".scrollToTop")
        scrollToTop.classList.toggle("showScrollToTop", window.scrollY > 500)

        //sticky nav
        const navbar = document.querySelector("nav");
        navbar.classList.toggle("sticky", window.scrollY > 500)
    })
}

stickyNav()

