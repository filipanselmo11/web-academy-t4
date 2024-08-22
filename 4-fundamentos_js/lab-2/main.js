
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const button = document.querySelector('.dark');

const imagens = [
    'pick-1.jpg',
    'pick-2.jpg',
    'pick-3.jpg',
    'pick-4.jpg',
    'pick-5.jpg'
];

for (let i = 0; i < imagens.length; i++) {
    const novaImagem = document.createElement('img');
    console.log('Imagem clicada', imagens[i]);
    novaImagem.setAttribute('src', `./images/${imagens[i]}`);
    novaImagem.setAttribute('alt', `Imagem ${i + 1}`);
    novaImagem.addEventListener('click', (e) => {
        const imgSrc = e.target.getAttribute('src');
        displayedImg.setAttribute('src', imgSrc);
    });
    thumbBar.appendChild(novaImagem);
}

button.addEventListener('click', () => {
    const classeCorrente = button.getAttribute('class');
    if (classeCorrente === 'dark') {
        button.setAttribute('class', 'light');
        button.textContent = 'Lighten';
        document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        button.setAttribute('class', 'dark');
        button.textContent = 'Darken';
        document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
