const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.info(`🚀🚀🚀 The Server is running Ready on http://localhost:${port} 🚀🚀🚀`);
    });
});
