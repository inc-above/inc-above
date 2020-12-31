form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function setErrorFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'global-input-access-bigger error-global-input';
}