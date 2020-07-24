const trackingData = require('../models/trackingData.model.js');

exports.bulkImportImbData = (req, res) => {
  const req_arr = Object.values(req.body).map(v => Object.values(v));

  // Validate request incase body is not empty
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // calling bulkCreate() in trackingData.models, to save the received data into the db
  trackingData.bulkCreate(req_arr, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while sending data.',
      });
    else res.send(data);
  });
};
