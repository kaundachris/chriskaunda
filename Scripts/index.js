document.addEventListener("DOMContentLoaded", function() {

    const copyright = document.getElementById("copyright")
    let date = new Date()
    copyright.textContent = date.getFullYear()
});
