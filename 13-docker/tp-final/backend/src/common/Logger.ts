import { Dotenv } from "./Dotenv";
import { Formatador } from "./Formatador";

import {
    existsSync,
    mkdirSync,
    writeFileSync
} from "node:fs";
import { join } from "node:path";
import { format } from "node:util";

Dotenv.carregarVariaveis();

class Logger {

    private diretorioLog: string;

    private deveEscreverEmArquivo: boolean;

    private static instancia: Logger | null = null;

    private constructor(){
        this.diretorioLog = join(process.cwd(), "/log");
        this.deveEscreverEmArquivo = (JSON.parse(process.env.ESCREVER_LOG_ARQUIVO as string)) as boolean;

        if(this.deveEscreverEmArquivo){
            if(!existsSync(this.diretorioLog))
                mkdirSync(this.diretorioLog);
        }
    }

    public info(mensagem: string): void {
        const mensagemLog = `[INFO] ${this.prepararMensagemLog(mensagem)}`;

        if(this.deveEscreverEmArquivo)
            this.escreverLogEmArquivo("infos.log", `${mensagemLog}\n`);

        process
            .stdout
            .write(
                format.apply(
                    this,
                    [`\x1b[92m${mensagemLog}\x1b[0m\n`]
                )
            );
    }

    public warning(mensagem: string): void {
        const mensagemLog = `[WARN] ${this.prepararMensagemLog(mensagem)}`;

        if(this.deveEscreverEmArquivo)
            this.escreverLogEmArquivo("warnings.log", `${mensagemLog}\n`);

        process
            .stdout
            .write(
                format.apply(
                    this,
                    [`\x1b[93m${mensagemLog}\x1b[0m\n`]
                )
            );
    }

    public error(mensagem: string): void {
        const mensagemLog = `[ERROR] ${this.prepararMensagemLog(mensagem)}`;

        if(this.deveEscreverEmArquivo)
            this.escreverLogEmArquivo("errors.log", `${mensagemLog}\n`);

        process
            .stdout
            .write(
                format.apply(
                    this,
                    [`\x1b[91m${mensagemLog}\x1b[0m\n`]
                )
            );
    }

    private prepararMensagemLog(mensagem: string): string {
        const dataLog: string = Formatador.formatarData(new Date());

        return `${dataLog}: ${mensagem}`;
    }

    private escreverLogEmArquivo(nomeArquivo: string, mensagemLog: string): void {
        writeFileSync(
            join(this.diretorioLog, nomeArquivo),
            mensagemLog,
            { flag: "a+" }
        );
    }

    public static pegarInstancia(): Logger {
        if(Logger.instancia === null)
            Logger.instancia = new Logger();

        return Logger.instancia;
    }
}

export { Logger };
