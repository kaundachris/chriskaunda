

const form = document.getElementById('myForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const params = new URLSearchParams();
    const firstName = document.getElementById("fname")

    for (const pair of formData.entries()) {
        params.append(pair[0], pair[1]);
    }

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxTH_A9ERUEzscC6RZZ0mqa9qhGH2hB7UdeuYaSF9LSwxXEmJfmV__Y-jvpDisCSrX5/exec', {
            method: 'POST',
            body: params
        });

        const result = await response.json();

        if (result.result === 'success') {
            window.location.href = 'https://chriskaunda.com/'; // ✅ redirect here
            alert("Thank you, " + firstName.value + ".")
        } else {
            window.location.href = 'https://your-site.com/error'; // ❌ or to an error page
        }
    } catch (err) {
        window.location.href = 'https://your-site.com/error';
    }
});