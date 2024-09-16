const express = require('express');
const path = require('path');

const smile = express ();

const port = 3001;

smile.use(express.static(path.join(__dirname, 'public')));

smile.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'index.html'));
});

smile.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});
