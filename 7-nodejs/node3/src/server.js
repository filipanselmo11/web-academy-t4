import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const contentTypeMap = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
};

const server = http.createServer(async (req, res) => {
    try {
        const filePath = req.url === '/' ? 'index.html' : req.url;
        const filePathAbs = path.join('public', filePath);
        const extname = path.extname(filePathAbs);
        const contentType = contentTypeMap[extname] || 'application/octet-stream';
        const data = await fs.readFile(filePathAbs);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Arquivo não encontrado</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});
