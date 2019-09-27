import express from 'express';
import bodyParser from 'body-parser';
import debug from 'debug';

import postRoutes from './routes/postRoutes';

const app = express();
const log = debug('dev');
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', postRoutes);
app.get('/', (request, response) => {
  response.json('Its been a while');
});

app.listen(PORT, () => {
  log(`app listening on port ${PORT}`);
});
