
const themeBtn = document.getElementById('theme-btn');
const toggleBtn = document.getElementById('toggle-section-btn');
const skillsSection = document.getElementById('skills-section');


themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('theme-green');
    document.body.classList.toggle('theme-red');
});


toggleBtn.addEventListener('click', () => {
    skillsSection.classList.toggle('hidden');

    if (skillsSection.classList.contains('hidden')) {
        toggleBtn.textContent = 'Pokaż sekcję Umiejętności';
    } else {
        toggleBtn.textContent = 'Ukryj sekcję Umiejętności';
    }
});
