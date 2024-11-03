import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
import { UserTypes } from './resources/userType/userType.constants';

dotenv.config();

const doc = {
  info: {
    title: 'Loja Virtual API',
    description: 'Documentação da API'
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  definitions: {
    CreateProductDto: {
      nome: "Martelo",
      preco: 29.0,
      estoque: 10
    },
    Product: {
      id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
      nome: "Bacon",
      preco: 261,
      estoque: 1,
      createdAt: "2023-11-07T19:27:15.645Z",
      updatedAt: "2023-11-07T19:27:15.645Z",
    },
    UpdateProductDto: {
      name: "Novo nome do produto"
    },
    CreateUSerDto: {
      name: "Fílip Anselmo",
      email: "filipanselmo@email.com",
      password: "senhaForte123",
      userTypeId: UserTypes.client
    },
    User: {
      id: "f2ee37ed-9306-4f7c-86a5-62c9cd6ac5b0",
      name: "Joao Carlos",
      email: "joao@email.com",
      createdAt: "2023-11-07T19:27:15.645Z",
      updatedAt: "2023-11-07T19:27:15.645Z",
      userTypeId: UserTypes.admin
    },
    UpdateUserDto: {
      name: "Novo nome de usuário",
      password: "senhaNova",
      userType: UserTypes.admin
    },
    SignupDto: {
      name: "Fulano de tal",
      email: "fulano@email.com",
      password: "1234"
    },
    LoginDto: {
      email: "fulano@email.com",
      password: "1234"
    },
  },
};

const output = "./swagger.json";
const routes = ["./router/index.ts"];

swaggerAutogen()(output, routes, doc);
