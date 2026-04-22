
const themeBtn = document.getElementById('theme-btn');
const themeLink = document.getElementById('theme-link');

themeBtn.addEventListener('click', function() {
    if (themeLink.getAttribute('href') === 'red.css') {
        themeLink.setAttribute('href', 'green.css');
    } else {
        themeLink.setAttribute('href', 'red.css');
    }
});


const toggleBtn = document.getElementById('toggle-section-btn');
const skillsSection = document.getElementById('skills-section');

toggleBtn.addEventListener('click', function() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleBtn.textContent = 'Ukryj sekcję Umiejętności';
    } else {
        skillsSection.style.display = 'none';
        toggleBtn.textContent = 'Pokaż sekcję Umiejętności';
    }
});
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    let isValid = true;


    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMsg = document.getElementById('success-msg');

 
    const hasNumber = /\d/; // Szuka jakiejkolwiek cyfry
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Wzór poprawnego e-maila

    function showError(input, errorId, text) {
        input.classList.add('input-error');
        document.getElementById(errorId).textContent = text;
        document.getElementById(errorId).style.display = 'block';
        isValid = false;
    }


    function clearError(input, errorId) {
        input.classList.remove('input-error');
        document.getElementById(errorId).style.display = 'none';
    }

    // Czyszczenie wszystkich błędów przed nową walidacją
    clearError(firstName, 'error-firstName');
    clearError(lastName, 'error-lastName');
    clearError(email, 'error-email');
    clearError(message, 'error-message');
    successMsg.style.display = 'none';


    if (firstName.value.trim() === '') {
        showError(firstName, 'error-firstName', 'Pole imię jest wymagane.');
    } else if (hasNumber.test(firstName.value)) {
        showError(firstName, 'error-firstName', 'Imię nie może zawierać cyfr.');
    }

 
    if (lastName.value.trim() === '') {
        showError(lastName, 'error-lastName', 'Pole nazwisko jest wymagane.');
    } else if (hasNumber.test(lastName.value)) {
        showError(lastName, 'error-lastName', 'Nazwisko nie może zawierać cyfr.');
    }


    if (email.value.trim() === '') {
        showError(email, 'error-email', 'Pole e-mail jest wymagane.');
    } else if (!emailPattern.test(email.value)) {
        showError(email, 'error-email', 'Podaj poprawny adres e-mail (np. test@test.com).');
    }


    if (message.value.trim() === '') {
        showError(message, 'error-message', 'Wiadomość nie może być pusta.');
    }

   
    if (isValid) {
        successMsg.style.display = 'block';
        contactForm.reset(); // Czyścimy formularz
    }
});
