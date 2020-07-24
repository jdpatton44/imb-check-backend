import express from 'express';

const jobs = require('../controllers/job.controller.js');

function getJobRoutes() {
  const router = express.Router();
  // POST call to create single record
  router.post('/jobs', jobs.create);
  // GET call to retrieve all the jobs in table
  router.get('/jobs', jobs.findAll);
  // GET a single job by id
  router.get('/jobs/:id', jobs.findById);
  // PUT call to update record with jobId and complete body
  router.put('/jobs/:jobId', jobs.update);
  // DELETE call to Delete a recod with jobId
  router.delete('/jobs/:jobId', jobs.delete);
  return router;
}

export { getJobRoutes };
