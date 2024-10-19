import { PrismaClient } from "@prisma/client";


export interface UpdateClienteDto {
    nome?: string,
    celular?: string
    email?: string;
    dataNasc?: Date
}

const prisma = new PrismaClient();

const createClient = async () => {
    try {
        const cliente = await prisma.cliente.create({
            data: {
                nome: 'Bruce Wayne',
                celular: '97 9891-1233',
                email: 'euBatman@email.com',
                dataNasc: new Date('1980-04-09')
            },
        });
        console.log('Cliente criado: ', cliente)
    } catch (error) {
        console.error(error);
    }
};

const getAllClients = async () => {
    try {
        const allClientes = await prisma.cliente.findMany();
        console.log('Todos os Clientes ', allClientes);
    } catch (error) {
        console.error(error);
    }
};

const findClienteById = async (id: number) => {
    try {
        const cliente = await prisma.cliente.findFirst({
            where: {
                id: id,
            },
        });

        // return cliente;
        console.dir(cliente, { depth: null });
    } catch (error) {
        console.error(error);
    }
};

const updateCliente = async (id: number, cliente: UpdateClienteDto) => {
    try {
        const updatedCliente = await prisma.cliente.update({
            where: { id: id },
            data: cliente,
        });
        console.dir(updatedCliente, { depth: null });
    } catch (error) {
        console.error(error);
    }
}

const deleteCliente = async (id: number) => {
    try {
        const deletedCliente = await prisma.cliente.delete({
            where: { id: id },
        });
        console.dir(deletedCliente, { depth: null });
    } catch (error) {
        console.error(error);
    }
};




const main = async () => {
    await createClient();
    await getAllClients();
    await findClienteById(6);
    await updateCliente(1, {
        nome: 'Sasuke Uchiha',
        celular: '92 9876-342',
        email: 'sasuke_uchiha@email.com',
        dataNasc: new Date('1998-09-01'),
    });
    await deleteCliente(1);
};

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});