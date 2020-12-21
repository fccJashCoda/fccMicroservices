const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 5444;

app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req, res) => {
  res.json({ msg: 'all clear' });
});

app.post('/api/timestamp/:time', (req, res) => {
  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  };

  const date = new Date(Number(req.params.time));
  console.log(date);
  console.log(date.isValid());

  if (!date.isValid()) {
    return res.json({ err: 'invalid Date' });
  }
  return res.json({ unix: `${date.getTime()}`, utx: `${date.toUTCString()}` });
});

app.use((req, res, next) => {
  res.status(404).send('404 - Page Not Found');
  next();
});

app.listen(port, () => console.log(`App listening on port ${port}...`));
