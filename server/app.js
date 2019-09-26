import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (request, response) => {
    response.json('Its been a while');
});

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});