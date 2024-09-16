const net = require('net');

const client = new net.Socket();

client.connect(8000, '127.0.0.1', () => {
    console.log('Connected to server');
    client.write('Hello, server!'); 
});

client.on('data', (data) => {
    console.log('Received from server: ' + data);
});

client.on('error', (err) => {
    console.log('Error: ' + err.message);
});

// Close the connection when the server closes
client.on('close', () => {
    console.log('Connection closed');
});
