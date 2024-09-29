import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

type LogType = 'complete' | 'simple';

const logDir = path.join(__dirname, '../logs');
const logFilePath = path.join(logDir, 'logs.txt');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logger = (type: LogType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const logMsg = type === 'simple'
            ? `Log Simples: ${new Date().toString()}, ${req.url}, ${req.method}\n`
            : `Log completo: ${new Date().toISOString()}, ${req.url}, ${req.method}, ${req.httpVersion}, ${req.get('User-Agent')}\n`;

        fs.appendFile(logFilePath, logMsg, (err) => {
            if (err) {
                console.error('Erro ao gravar o log: ', err);
            }
        });

        console.log(logMsg.trim());
        next();
    };
};

export default logger;