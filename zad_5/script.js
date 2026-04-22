const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const surnameError = document.getElementById("surnameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    surnameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    const nameRegex = /^[A-Za-zÀ-ž]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        nameError.textContent = "Imię jest wymagane";
        valid = false;
    } else if (!nameRegex.test(name)) {
        nameError.textContent = "Imię nie może zawierać cyfr";
        valid = false;
    }

    if (surname === "") {
        surnameError.textContent = "Nazwisko jest wymagane";
        valid = false;
    } else if (!nameRegex.test(surname)) {
        surnameError.textContent = "Nazwisko nie może zawierać cyfr";
        valid = false;
    }

    if (email === "") {
        emailError.textContent = "Email jest wymagany";
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Niepoprawny email";
        valid = false;
    }

    if (message === "") {
        messageError.textContent = "Wiadomość jest wymagana";
        valid = false;
    }

    if (valid) {
        alert("Formularz wysłany!");
        form.reset();
    }
});