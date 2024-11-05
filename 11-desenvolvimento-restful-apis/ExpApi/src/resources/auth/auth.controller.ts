import { Request, Response } from "express";
import { LoginDto, SignupDto } from "./auth.types";
import { createUser, findUserByEmail } from "../user/user.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { UserTypes } from "../userType/userType.constants";
import { checkCredentials } from "./auth.service";


const signUp = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Cria um novo usuário (registro).'
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/SignupDto' }
    }
    #swagger.responses[201] = {
        description: 'Usuário criado com sucesso.',
        schema: { $ref: '#/definitions/User' }
    }
    #swagger.responses[409] = {
        description: 'Usuário já existe.'
    }
    #swagger.responses[500] = {
        description: 'Erro interno do servidor.'
    }
    */
  const user: SignupDto = req.body;
  try{
    if (await findUserByEmail(user.email)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const newUser = await createUser({ ...user, userTypeId: UserTypes.client });
      res.status(StatusCodes.CREATED).json(newUser);
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};


const login = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Autentica um usuário existente.'
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/LoginDto' }
    }
    #swagger.responses[200] = {
        description: 'Login bem-sucedido.'
    }
    #swagger.responses[401] = {
        description: 'Credenciais inválidas.'
    }
    #swagger.responses[500] = {
        description: 'Erro interno do servidor.'
    }
    */
  const credentials: LoginDto = req.body;
  try {
    const user = await checkCredentials(credentials);
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    } else {
      req.session.uid = user.id;
      req.session.tipoUsuario = user.userTypeId;
      res.status(StatusCodes.OK);
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
}

const logout = async (req: Request, res: Response) => {
  /*
    #swagger.summary = 'Faz logout do usuário atual.'
    #swagger.responses[204] = {
        description: 'Logout bem-sucedido (sem conteúdo).'
    }
    #swagger.responses[400] = {
        description: 'Requisição inválida, usuário não autenticado.'
    }
    #swagger.responses[500] = {
        description: 'Erro interno do servidor.'
    }
    */
  if (!req.session.uid) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
  } else {
    req.session.destroy((error) => {
      if (error) {
        console.log(error);
      }
      res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
    });
  }
};

export default {
  signUp,
  login,
  logout
}