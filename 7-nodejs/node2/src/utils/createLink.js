
export default function createLink(filename) {
    return `
        <a href="/${filename}">
            ${filename}
        </a>
        <br>\n
    `;
}