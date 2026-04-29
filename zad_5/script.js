document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("surnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (name === "" || /\d/.test(name)) {
        document.getElementById("nameError").innerText = "Niepoprawne imię";
        valid = false;
    }

    if (surname === "" || /\d/.test(surname)) {
        document.getElementById("surnameError").innerText = "Niepoprawne nazwisko";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Niepoprawny e-mail";
        valid = false;
    }

    if (message.length < 5) {
        document.getElementById("messageError").innerText = "Wiadomość za krótka";
        valid = false;
    }

    if (valid) {
        alert("Formularz poprawny!");
        document.getElementById("contactForm").reset();
    }
});
const contactForm = document.getElementById('contactForm');
const validationMessage = document.getElementById('validationMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validationMessage.innerText = "";
    validationMessage.className = "";

    const name = document.getElementById('userName').value;
    const surname = document.getElementById('userSurname').value;
    const email = document.getElementById('userEmail').value;

    const hasDigits = /\d/;

    if (hasDigits.test(name) || hasDigits.test(surname)) {
        validationMessage.innerText = "Błąd: Imię i nazwisko nie mogą zawierać cyfr!";
        validationMessage.classList.add('error-text');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        validationMessage.innerText = "Błąd: Wprowadź poprawny adres e-mail!";
        validationMessage.classList.add('error-text');
        return;
    }

    validationMessage.innerText = "Formularz został wysłany pomyślnie!";
    validationMessage.classList.add('success-text');
    
    contactForm.reset();
});
