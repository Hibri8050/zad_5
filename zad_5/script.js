
const themeBtn = document.getElementById('themeButton');
const toggleBtn = document.getElementById('toggleBtn');
const projectsSection = document.getElementById('projects-section');

themeBtn.addEventListener('click', () => {
    if (!document.body.classList.contains('green-theme') && !document.body.classList.contains('red-theme')) {
        document.body.classList.add('green-theme');
    } else if (document.body.classList.contains('green-theme')) {
        document.body.classList.remove('green-theme');
        document.body.classList.add('red-theme');
    } else {
        document.body.classList.remove('red-theme');
    }
});

toggleBtn.addEventListener('click', () => {
    projectsSection.classList.toggle('hidden');
});

const contactForm = document.getElementById('contactForm');
const validationMessage = document.getElementById('validationMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const surname = document.getElementById('userSurname').value;
    const email = document.getElementById('userEmail').value;
    const hasDigits = /\d/;

    if (hasDigits.test(name) || hasDigits.test(surname)) {
        validationMessage.innerText = "Błąd: Imię i nazwisko nie mogą zawierać cyfr!";
        validationMessage.style.color = "red";
        return;
    }

    if (!email.includes('@')) {
        validationMessage.innerText = "Błąd: Wprowadź poprawny adres e-mail!";
        validationMessage.style.color = "red";
        return;
    }

    validationMessage.innerText = "Formularz został wysłany pomyślnie!";
    validationMessage.style.color = "green";
    contactForm.reset();
});
