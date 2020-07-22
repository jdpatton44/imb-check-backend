const Job = require("../models/job.model.js");

//    Create a new job

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }
  
    // Create a job from request body 
    const job = new Job({ 
      jobName: req.body.jobName,
      mailDate: req.body.mailDate,
    });
    
    // calling create() in job.model, to save the received data
    Job.create(job, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message ||
            "Some error occurred while creating the Customer data.",
        });
        else res.send(data);
    });
};

//    Retrieve all jobs

exports.findAll = (req, res) => {
    console.log('attempting to get all jobs')
    Job.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data.",
        });
      else res.send(data);
    });
};
  

//    Update a job by ID

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }
  
    console.log(req.body);
  
  // Calling the upadteById() form models
  // it returns an object { kind: "not_found" } when not found 
  
    Job.updateById(
      req.params.jobId,
      new Job(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Could not find job with id ${req.params.customerId}.`,
            });
          } else {
            res.status(500).send({
              message: "Error updating job with id " + req.params.customerId,
            });
          }
        } else res.send(data);
      }
    );
  };
  
  
  
  //    Delete a single record by using ID - Not implemeted on fron-end
  
  exports.delete = (req, res) => {
    Customer.remove(req.params.jobId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Could not find job with id ${req.params.jobId}.`,
          });
        } else {
          res.status(500).send({
            message: "Could not delete job with id " + req.params.jobId,
          });
        }
      } else res.send({ message: `Job was deleted successfully!` });
    });
  };
  
  