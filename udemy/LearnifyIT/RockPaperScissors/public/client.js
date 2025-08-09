const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'WAITING') {
        document.getElementById('status').innerText = data.message;
    }

    if (data.type === 'RESULT') {
        document.getElementById('result').innerText = `Game Result: ${data.message}`;
        document.getElementById('status').innerText = `Play again!`;
    }
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.dataset.choice;
        socket.send(JSON.stringify({
            type: 'CHOICE',
            choice
        }));

        document.getElementById('status').innerText = `Waiting for opponent...`;
    });
});

document.querySelectorAll('.choice').forEach(button =>
    button.addEventListener('click', () => {
        button.style.transform = 'scale(1.2)';
        setTimeout(() =>
            button.style.transform = 'scale(1)',
            300
        );
    }),
);