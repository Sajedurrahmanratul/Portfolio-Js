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

function hover() {
    //first
    const hover1 = document.querySelector(".img1");
    const underline1 = document.querySelector(".underline1")

    //first funtion
    hover1.addEventListener("mouseenter", () => {
        underline1.classList.add("h3")
    })
    hover1.addEventListener("mouseleave", () => {
        underline1.classList.remove("h3")
    })

    //second
    const hover2 = document.querySelector(".img2");
    const underline2 = document.querySelector(".underline2")
    //second funtion
    hover2.addEventListener("mouseenter", () => {
        underline2.classList.add("h3")
    })
    hover2.addEventListener("mouseleave", () => {
        underline2.classList.remove("h3")
    })

    //third
    const hover3 = document.querySelector(".img3");
    const underline3 = document.querySelector(".underline3")
    //first funtion
    hover3.addEventListener("mouseenter", () => {
        underline3.classList.add("h3")
    })
    hover3.addEventListener("mouseleave", () => {
        underline3.classList.remove("h3")
    })
}


hover()


