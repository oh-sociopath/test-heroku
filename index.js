import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('I\'m dead inside!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})