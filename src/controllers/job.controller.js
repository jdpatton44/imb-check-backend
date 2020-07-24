const db = require('../utils/db');
const Job = require('../models/job.model.js');

//    Create a new job
exports.create = (req, res) => {
  console.log('create a new job.');
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  // Create a job from request body
  Job.create({
    jobName: req.body.jobName,
    mailDate: req.body.mailDate,
  })
    .then(job => {
      res.status(200).send(job);
    })
    .catch(error => {
      console.log('Error: ', error);
      res.status(500).send(error);
    });
};

//    Retrieve all jobs

exports.findAll = (req, res) => {
  console.log('attempting to get all jobs');
  Job.findAll()
    .then(jobs => {
      res.status(200).send(jobs);
    })
    .catch(error => {
      console.log('Error: ', error);
      res.status(500).send(error);
    });
};

// Find a Job by Id
exports.findById = (req, res) => {
  Job.findById(req.params.jobId)
    .then(job => {
      res.status(200).send(job);
    })
    .catch(error => {
      console.log('Error: ', error);
      res.status(500).send(error);
    });
};

//    Update a job by ID
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }
  const id = req.params.jobId;
  Job.update({ jobName: req.body.jobName, mailDate: req.body.mailDate }, { where: { id: req.params.jobId } })
    .then(() => {
      res.status(200).send(`updated successfully a job with id = ${id}`);
    })
    .catch(error => {
      console.log('Error: ', error);
      res.status(500).send(error);
    });
};

//    Delete a single record by using ID - Not implemeted on fron-end

exports.delete = (req, res) => {
  const id = req.params.jobId;
  Job.destroy({
    where: { jobId: id },
  })
    .then(() => {
      res.status(200).send(`deleted successfully a job with id = ${id}`);
    })
    .catch(error => {
      console.log('Error: ', error);
      res.status(500).send(error);
    });
};
