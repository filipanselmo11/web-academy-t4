const loremIpsumTextos = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const generateLoremIpsum = (n) => {
    let paragrafo = "";

    for (let index = 0; index < n; index++) {
        const frase = loremIpsumTextos[Math.floor(Math.random() * loremIpsumTextos.length)];
        paragrafo = paragrafo + `<p>${frase}</p>`;
    }

    return paragrafo;
};

document.getElementById("gerar").addEventListener("click", () => {
    const numParagrafos = document.getElementById("paragrafo").value;
    const container = document.getElementById("container-paragrafo");

    container.innerHTML = "";

    const paragrafos = generateLoremIpsum(numParagrafos);

    container.innerHTML = paragrafos;
});