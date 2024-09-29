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

export default router;