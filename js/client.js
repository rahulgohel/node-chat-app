const socket = io('http://localhost:8000');

const form = document.getElementById('sendContainer');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('container');

const name = prompt('enter your name to join');