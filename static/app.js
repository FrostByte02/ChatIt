const socket = io();

const messages = document.getElementById('messages');
const input = document.getElementById('message');

socket.on('message', (data) => {
    const item = document.createElement('li');
    item.textContent = data;
    messages.appendChild(item);
});

function sendMessage() {
    const msg = input.value;
    socket.emit('message', msg);
    input.value = '';
}
