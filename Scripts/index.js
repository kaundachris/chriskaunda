document.addEventListener("DOMContentLoaded", function() {

    const copyright = document.getElementById("copyright")
    let date = new Date()
    copyright.textContent = date.getFullYear()


    const toggles = document.querySelectorAll(".accordion-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling
            const isOpen = content.classList.contains("open")

            // Close all panels
            document.querySelectorAll(".accordion-content").forEach(panel => {
                panel.style.maxHeight = null
                panel.classList.remove("open")
            });

            if (!isOpen) {
                content.classList.add("open")
                content.style.maxHeight = content.scrollHeight + "px"
            }
        });
    });
});
