import express from 'express'

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API');
});

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  
});

export default app;