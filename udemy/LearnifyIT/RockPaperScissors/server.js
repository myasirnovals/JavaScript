const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

let players = {};

wss.on('connection', (ws) => {
    console.log('New Player Connected');
    const playerId = Date.now();

    players[playerId] = {
        ws, choice: null
    };

    ws.send(JSON.stringify({
        type: 'WAITING',
        message: 'Waiting for opponent'
    }));

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'CHOICE') {
            players[playerId].choice = data.choice;
            checkGameResult();
        }
    });

    ws.on('close', () => {
        delete players[playerId];
        console.log('Player disconnected');
    });
});

function checkGameResult() {
    const playerId = Object.keys(players);
    if (playerId.length === 2) {
        const [p1, p2] = playerId;
        const choice1 = players[p1].choice;
        const choice2 = players[p2].choice;

        if (choice1 && choice2) {
            let resultP1, resultP2;

            if (choice1 === choice2) {
                resultP1 = 'TIE';
                resultP2 = 'TIE';
            } else if (
                (choice1 === 'ROCK' && choice2 === 'SCISSORS') ||
                (choice1 === 'PAPER' && choice2 === 'ROCK') ||
                (choice1 === 'SCISSORS' && choice2 === 'PAPER')
            ) {
                resultP1 = 'YOU WIN';
                resultP2 = 'YOU LOSE';
            } else {
                resultP1 = 'YOU LOSE';
                resultP2 = 'YOU WIN';
            }

            players[p1].ws.send(JSON.stringify({
                type: 'RESULT',
                message: resultP1
            }));

            players[p2].ws.send(JSON.stringify({
                type: 'RESULT',
                message: resultP2
            }))

            players[p1].choice = null;
            players[p2].choice = null;
        }
    }
}

app.use(express.static('public'));
server.listen(3000, () =>
    console.log('Server is running on http://localhost:3000')
);