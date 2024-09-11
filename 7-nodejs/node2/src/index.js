import http from 'http';
import fs from 'fs';
import dotenv from 'dotenv';
import createLink from './utils/createLink.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        
        fs.readdir('./src/public', (error, data) => {
            if (error) {
                res.write("Erro ao ler o diretório");
                res.end();
            } else {
                data.forEach(item => {
                    res.write(createLink(item));
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