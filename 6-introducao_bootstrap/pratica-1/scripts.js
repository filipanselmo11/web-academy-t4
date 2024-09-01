
let novoProdForm = document.getElementById('novoProdForm');
let inputs = document.querySelectorAll('input[required]');
let valido = true;
let modal = new bootstrap.Modal(document.getElementById('novoProdModal'));
//Validando o form para fechar o modal
novoProdForm.addEventListener('submit', (event) => {
    event.preventDefault();
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            valido = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (valido) {
        modal.hide();
    }
});