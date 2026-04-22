const themeBtn = document.getElementById('theme-btn');
const themeLink = document.getElementById('theme-link');
const toggleBtn = document.getElementById('toggle-section-btn');
const skillsSection = document.querySelector('section:nth-of-type(3)');

themeBtn.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === 'red.css') {
        themeLink.setAttribute('href', 'green.css');
    } else {
        themeLink.setAttribute('href', 'red.css');
    }
});

toggleBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleBtn.textContent = 'Ukryj sekcję Umiejętności';
    } else {
        skillsSection.style.display = 'none';
        toggleBtn.textContent = 'Pokaż sekcję Umiejętności';
    }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const surnameError = document.getElementById('surnameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const hasNumber = /\d/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nameError.textContent = '';
    surnameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (name.value.trim() === '') {
        nameError.textContent = 'Podaj imię';
        isValid = false;
    } else if (hasNumber.test(name.value)) {
        nameError.textContent = 'Imię nie może zawierać cyfr';
        isValid = false;
    }

    if (surname.value.trim() === '') {
        surnameError.textContent = 'Podaj nazwisko';
        isValid = false;
    } else if (hasNumber.test(surname.value)) {
        surnameError.textContent = 'Nazwisko nie może zawierać cyfr';
        isValid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Podaj e-mail';
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Niepoprawny e-mail';
        isValid = false;
    }

    if (message.value.trim() === '') {
        messageError.textContent = 'Wpisz wiadomość';
        isValid = false;
    }

    if (isValid) {
        alert('Formularz wysłany');
        form.reset();
    }
});
