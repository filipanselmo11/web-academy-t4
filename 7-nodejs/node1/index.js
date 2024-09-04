const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    fs.readdir('./public', (error, dados) => {
        dados.forEach(item => {
            res.write(item + '<br/>');
        });
        res.end();
    });
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});