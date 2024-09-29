import { Router, Request, Response } from "express";
import { loremIpsum } from 'lorem-ipsum';

const router = Router();

router.get('/lorem/:paragraphs', (req: Request, res: Response) => {
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
});

router.get('/hb1', (req: Request, res: Response) => {
    res.render('hb1', {
        msg: 'Olá você está aprendendo Express + HBS!',
        layout: false,
    });
});

router.get('/hb2', (req: Request, res: Response) => {
    res.render('hb2', {
        poweredByNodeJs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
    });
});

router.get('/hb3', (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1328 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
    ];

    res.render('hb3', { profes, layout: false });
});

export default router;