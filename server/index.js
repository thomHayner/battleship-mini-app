const express = require('express');
const pg = require('./pgQueries.js')
const app = express();
const port = 8080;

app.use(express.json());
// queryMethods go here

// app.post('/api', );

// app.get('/', (req, res) => {
//     console.log('woot');
//     res.status(200).send('Great Success: ', req)
// });

app.get('/', (req, res) => {
    pg.getHighScoreList(req)
    res.status(200).send('Great Success!')
});

// app.put('/api', cb);

// app.delete('/api', cb);

app.listen(port, () => console.log(`the server is listening on port: ${port}`));