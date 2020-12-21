const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const router = require('./routes/router');

const port = process.env.PORT || 5444;

app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/api', router.api);

app.get('/', (req, res) => {
  res.json({ msg: 'all clear' });
});

app.use((req, res, next) => {
  res.status(404).send('404 - Page Not Found');
  next();
});

app.listen(port, () => console.log(`App listening on port ${port}...`));
