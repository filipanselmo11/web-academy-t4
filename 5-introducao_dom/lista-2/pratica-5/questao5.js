let inputItem = document.getElementsByTagName('input')[0];
let addButtonElement = document.getElementsByTagName('button')[0];
let removeButtonElement = document.getElementsByTagName('button')[1];
let ulElement = document.getElementsByTagName('ul')[0];

const addItem = () => {
    if (inputItem.value !== '') {
        let userContent = document.createTextNode(inputItem.value);
        let newLi = document.createElement('li');
        newLi.appendChild(userContent);
        ulElement.appendChild(newLi);
        inputItem.value = '';
    } else {
        alert('Erro: O campo de item precisa ser preenchido !');
    }
};

const removeLastItem = () => {
    if (ulElement.children.length > 0) {
        ulElement.removeChild(ulElement.lastElementChild);
    } else {
        alert('Erro: Não é possível remover itens de uma lista vazia');
    }
};

addButtonElement.addEventListener('click', addItem);
removeButtonElement.addEventListener('click', removeLastItem);

