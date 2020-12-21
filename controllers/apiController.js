exports.post_timestamp = (req, res) => {
  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  };

  let date;
  // const date = new Date(req.params.time);
  if (!req.params.time) {
    date = new Date();
  } else if (new Date(req.params.time).isValid()) {
    date = new Date(req.params.time);
  } else if (new Date(Number(req.params.time))) {
    date = new Date(Number(req.params.time));
  }

  if (!date.isValid()) {
    return res.json({ error: 'Invalid Date' });
  }
  return res.json({ unix: `${date.getTime()}`, utx: `${date.toUTCString()}` });
};
