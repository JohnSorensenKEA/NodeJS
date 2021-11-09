function sendContactMessage() {
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        message: document.getElementById("message").value
    };

    const options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    };

    fetch("/api/contact", options)
    .then(response => {
        if (response.status === 200) {
            console.log("Great Success");
            
        } else {
            console.log("Failed sending contact formula:", response.status);
        }
    });
}

document.getElementById("contact-button").addEventListener('click', sendContactMessage);