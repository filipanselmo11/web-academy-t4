const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
const createLink = require("./utils/createLink");
const path = require("path");

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });

        fs.readdir('./public', (error, data) => {
            if (error) {
                res.write("Erro ao ler o diretório");
                res.end();
            } else {
                data.forEach(item => {
                    res.write(createLink.createLink(item));
                });
                res.end();
            }
        });
    } else {
        const caminhoAbsoluto = path.join(__dirname, 'public', req.url);
        fs.readFile(caminhoAbsoluto, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/html;charset=utf-8"
                });
                res.write("Arquivo não encontrado");
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html;charset=utf-8"
                });
                res.write('<a href="/">Voltar</a>');
                res.write('<br/>');
                res.write(data);
                res.end();
            }

        });
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});