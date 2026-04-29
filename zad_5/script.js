const themeBtn = document.getElementById('themeButton');
const toggleBtn = document.getElementById('toggleBtn');

const sections = document.querySelectorAll('section');
const targetSection = sections[sections.length - 1]; 

themeBtn.addEventListener('click', () => {
    if (!document.body.classList.contains('green-theme') && !document.body.classList.contains('red-theme')) {
        document.body.classList.add('green-theme');
    } else if (document.body.classList.contains('green-theme')) {
        document.body.classList.remove('green-theme');
        document.body.classList.add('red-theme');
    } else {
        document.body.classList.remove('red-theme');
    }
    console.log("Motyw zmieniony: " + document.body.className);
});

toggleBtn.addEventListener('click', () => {
    targetSection.classList.toggle('hidden');
    console.log("Widoczność sekcji zmieniona");
});
#contactForm input, #contactForm textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    max-width: 300px;
    padding: 8px;
    box-sizing: border-box;
}

#contactForm textarea {
    height: 100px;
    resize: vertical;
}

.error-text {
    color: #d9534f;
}

.success-text {
    color: #5cb85c;
}
