import { uuid } from 'uuidv4';

const getCard = text => ({
    id: uuid(),
    text
});

export const initialState = [
    {
        id: uuid(),
        title: 'To Do',
        cards: [
            getCard('To do task'),
            getCard('TO FILTER: To do task'),
        ]
    },
    {
        id: uuid(),
        title: 'Doing',
        cards: [
            getCard('Doing task'),
            getCard('TO FILTER: Doing task'),
        ]
    },
    {
        id: uuid(),
        title: 'Done',
        cards: [
            getCard('Done task'),
            getCard('TO FILTER: Done task'),
        ]
    }
];