import express from 'express';
import debug from 'debug';

const app = express();
const log = debug('dev');
const PORT = process.env.PORT || 4000;


app.get('/', (request, response) => {
  response.json('Its been a while');
});

app.listen(PORT, () => {
  log(`app listening on port ${PORT}`);
});
