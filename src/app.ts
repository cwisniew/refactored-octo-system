/*
 * This software Copyright by Craig Wisniewski
 * license TBD
 */

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  return console.log(`Express app listening on port ${port}!`);
});
