const header = document.querySelector(".l-header");
const menuToggle = header?.querySelector(".js-menu-toggle");
const navigation = header?.querySelector("#primary-navigation");
const navigationLinks = navigation?.querySelectorAll(
    ".l-header__nav-link",
);

const closeMenu = () => {
    if (!header || !menuToggle) {
        return;
    }

    header.classList.remove("is-open");
    document.body.classList.remove("has-menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu",
    );
};

const openMenu = () => {
    if (!header || !menuToggle) {
        return;
    }

    header.classList.add("is-open");
    document.body.classList.add("has-menu-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu",
    );
};

if (header && menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = header.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
            return;
        }

        openMenu();
    });

    navigationLinks?.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 769) {
            closeMenu();
        }
    });
}