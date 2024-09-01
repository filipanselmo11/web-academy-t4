document.addEventListener('DOMContentLoaded', () => {

    let novoProdForm = document.getElementById('novoProdForm');
    let inputs = document.querySelectorAll('input[required]');
    let modal = new bootstrap.Modal(document.getElementById('novoProdModal'));
    let tableElement = document.getElementsByTagName('table')[0];
    let nextID = tableElement.rows.length;

    novoProdForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let valido = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                valido = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (valido) {
            let newTableItem = document.createElement('tr');
            newTableItem.classList.add('align-middle');

            let cellId = document.createElement('td');
            cellId.textContent = nextID++;
            cellId.classList.add('fw-bold');
            newTableItem.appendChild(cellId);

            inputs.forEach(input => {
                let prodContent = document.createTextNode(input.value);
                let newCell = document.createElement('td');
                newCell.appendChild(prodContent);
                newTableItem.appendChild(newCell);
            });

            let cellActions = document.createElement('td');
            cellActions.innerHTML = `
                <button class="btn btn-secondary mr-3" type="button">Editar</button>
                <button class="btn btn-secondary" type="button">Excluir</button>
            `;


            newTableItem.appendChild(cellActions);

            tableElement.appendChild(newTableItem);
            novoProdForm.reset();
            modal.hide();
        }
    });
});