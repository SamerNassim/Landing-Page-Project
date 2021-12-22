/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("main section");
let navbar = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let fragment = document.createDocumentFragment();
for (const section of sections) {
  const element = document.createElement("li");
  const link = document.createElement("a");
  link.href = `#${section.id}`;
  link.textContent = section.dataset.nav;
  link.classList.add("menu__link");

  element.appendChild(link);
  fragment.appendChild(element);
}
navbar.appendChild(fragment);

// Add class 'active' to section when near top of viewport

sections.forEach((section) => {
  let id = `${section.id}`;
  let el = document.getElementById(id);
  let navElement = document.querySelector(`[href="#${section.id}"]`);
  window.addEventListener("scroll", () => {
    if (
      el.getBoundingClientRect().top >= 0 &&
      el.getBoundingClientRect().top < 300
    ) {
      navElement.classList.add("active");
      el.classList.add("your-active-class");
    } else {
      navElement.classList.remove("active");
      el.classList.remove("your-active-class");
    }
  });
});

// Scroll to anchor ID using scrollTO event
let links = document.querySelectorAll(".menu__link");
links.forEach((link) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();

    const selectedSection = document.getElementById(
      String(evt.target.getAttribute("href")).substring(1)
    );
    const offset = selectedSection.offsetTop;
    window.scrollTo({
      top: offset - 50,
      left: 0,
      behavior: "smooth",
    });
  });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
