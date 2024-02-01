function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 400
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
}
console.log(result.substring(0, result.length - 1))
document.addEventListener("DOMContentLoaded", function() {
    // Function to hide all sections
    function hideAllSections() {
        document.querySelectorAll('section').forEach(function(section) {
            section.style.display = 'none';
        });
    }

    // Show the corresponding section when a navigation link is clicked
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const sectionId = this.getAttribute('href'); // Get the href attribute value
            hideAllSections(); // Hide all sections
            document.querySelector(sectionId).style.display = 'block'; // Show the clicked section
        });
    });
});
