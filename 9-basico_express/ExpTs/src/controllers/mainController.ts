import { Request, Response } from "express";
import { loremIpsum } from 'lorem-ipsum';

const index = (req: Request, res: Response) => {
    res.send('Hello World');
};

const info = (req: Request, res: Response) => {
    res.send('Página de Informações');
};

const sobre = (req: Request, res: Response) => {
    res.send('Page sobre');
};

const lorem = (req: Request, res: Response) => {
    const { paragraphs } = req.params;
    let loremText;
    if (paragraphs) {
        loremText = loremIpsum({
            count: parseInt(paragraphs as string),
            format: 'html',
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            random: Math.random,
            sentenceLowerBound: 5,
            sentenceUpperBound: 15,
            suffix: '\n',
            units: 'paragraphs',
        });
    }

    res.send(loremText);
};

const hb1 = (req: Request, res: Response) => {
    res.render('hb1', {
        msg: 'Olá você está aprendendo Express + HBS!',
    });
};

const hb2 = (req: Request, res: Response) => {
    res.render('hb2', {
        poweredByNodeJs: true,
        name: 'Express',
        type: 'Framework',
    });
};

const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1328 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];

    res.render('hb3', { profes });
};

const hb4 = (req: Request, res: Response) => {
    const techs = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },

    ];
    res.render('hb4', {
        techs
    });
};

export default {
    index,
    info,
    sobre,
    lorem,
    hb1,
    hb2,
    hb3,
    hb4
}