/* ==========================================
   ZARIN MAISHA PORTFOLIO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Smooth Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", activateNav);



    /* ==========================
       Fade In Animation
    ========================== */

    const hiddenElements = document.querySelectorAll(
        ".project, .hero-content, .section-title, #resume, #contact"
    );

    hiddenElements.forEach(el => {
        el.classList.add("hidden");
    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenElements.forEach(el => observer.observe(el));



    /* ==========================
       Navbar Background
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(10,18,34,.92)";
            navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(10,18,34,.60)";
            navbar.style.boxShadow = "none";

        }

    });



    /* ==========================
       Project Hover Effect
    ========================== */

    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {

        project.addEventListener("mousemove", e => {

            const rect = project.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            project.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(96,165,250,.08),
                rgba(19,33,60,.85) 65%)`;

        });

        project.addEventListener("mouseleave", () => {

            project.style.background = "";

        });

    });



    /* ==========================
       Typing Effect
    ========================== */

    const subtitle = document.querySelector(".hero h2");

    if (subtitle) {

        const text = subtitle.textContent;

        subtitle.textContent = "";

        let i = 0;

        function typeWriter() {

            if (i < text.length) {

                subtitle.textContent += text.charAt(i);

                i++;

                setTimeout(typeWriter, 55);

            }

        }

        typeWriter();

    }



    /* ==========================
       Scroll To Top Button
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "topButton";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.classList.add("show-top");

        } else {

            topButton.classList.remove("show-top");

        }

    });

});