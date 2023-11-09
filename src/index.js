const app = require ('express')();

app.get('/', (req, res) => {
    res.json({ message: 'Hello Docker is easy' });
});

const port = process.env.PORT || 8080;

