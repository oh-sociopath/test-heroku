import 'dotenv/config';
import express from 'express';
import { home_router } from './routes/home/home-router.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(home_router);

app.get('/', (req, res) => {
  res.send('I\'m dead inside!')
})

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`)
})