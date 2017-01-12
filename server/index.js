import http from 'http';
import express from 'express';

let app = express();
app.server = http.createServer(app);

app.server.get('/', (req, res) => res.send('Hello World!'));

app.server.listen(process.env.PORT || 9000);

console.log(`Started on port ${app.server.address().port}`);

export default app;
