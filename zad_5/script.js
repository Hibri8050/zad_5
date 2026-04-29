const themeBtn = document.getElementById('themeButton');
const toggleBtn = document.getElementById('toggleBtn');
const contactForm = document.getElementById('contactForm');
const validationMessage = document.getElementById('validationMessage');

themeBtn.addEventListener('click', function() {
    if (!document.body.classList.contains('green-theme') && !document.body.classList.contains('red-theme')) {
        document.body.classList.add('green-theme');
    } else if (document.body.classList.contains('green-theme')) {
        document.body.classList.remove('green-theme');
        document.body.classList.add('red-theme');
    } else {
        document.body.classList.remove('red-theme');
    }
});

toggleBtn.addEventListener('click', function() {
    const sections = document.querySelectorAll('section');
    const targetSection = sections[sections.length - 2]; 
    targetSection.classList.toggle('hidden');
});

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validationMessage.innerText = "";
    const name = document.getElementById('userName').value;
    const surname = document.getElementById('userSurname').value;
    const email = document.getElementById('userEmail').value;

    const hasDigits = /\d/;

    if (hasDigits.test(name) || hasDigits.test(surname)) {
        validationMessage.innerText = "Błąd: Imię i nazwisko nie mogą zawierać cyfr!";
        validationMessage.className = "error-text";
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        validationMessage.innerText = "Błąd: Wprowadź poprawny adres e-mail!";
        validationMessage.className = "error-text";
        return;
    }

    validationMessage.innerText = "Formularz został wysłany pomyślnie!";
    validationMessage.className = "success-text";
    contactForm.reset();
});
