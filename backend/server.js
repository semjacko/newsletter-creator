const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
    if (req.headers['user-agent']?.toLowerCase().includes('iphone') || req.headers['user-agent']?.toLowerCase().includes('android')) {
        res.send('Sorry, this is only available for Desktop');
        return;
    }
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);