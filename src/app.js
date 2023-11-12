// Desc: Simple express app to test docker
// Inhalte wurden aus https://www.youtube.com/watch?v=pKd0Rpw7O48 übernommen sowie aus den Vorlesungen Webprogrammierung und Big Data.
// Funktion welche express importiert und eine Instanz erstellt
const express = require ('express');
const app = express();
// Port auf dem der Server laufen soll
const port = 3000;

app.get('/', (req, res) => {
    //res.json({ message: 'Hello Docker is easy' });
    res.send('Hello Docker is easy');
});

// Funktion welche den Server startet und auf dem Port laufen lässt sowie eine Konsolen Ausgabe macht
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));