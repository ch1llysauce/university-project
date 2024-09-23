const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

function toggleDropdown(dropdownClass) {
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    
    var dropdownContent = document.querySelector(dropdownClass);
    dropdownContent.classList.toggle('show');

    window.addEventListener('click', function(event) {
        // Close the dropdown if clicked outside
        if (!event.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
}

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});


dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault();
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});


// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});