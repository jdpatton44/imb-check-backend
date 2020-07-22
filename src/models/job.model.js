const sql = require("../utils/db");

const Job = function(job) {
    this.jobId = job.jobId;
    this.jobName = job.jobName;
    this.mailDate = job.mailDate;
  };
  
  
/*
SQL table structure
===========================================
Field	                Type
==========================================
jobid	               int(11)   *PRIMARY KEY 
jobName	               varchar(50) 
mailDate	           date
*/


// enter job into table

Job.create = (newJob, result) => {
    sql.query("INSERT INTO Jobs SET ?", newJob, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      console.log("created new Job: ", { id: res.insertId, ...newJob });
      result(null, { id: res.insertId, ...newJob });
    });
  };
  


// Search for job by id

Job.findById = (jobId, result) => {
    sql.query(`SELECT * FROM Jobs WHERE id = ${jobId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found job: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };
  
// Fetch all jobs

Job.getAll = result => {
  sql.query("SELECT * FROM Jobs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Jobs: ", res);
    result(null, res);
  });
};
  
  // Update job by ID

Job.updateById = (id, job, result) => {
  sql.query(
    "UPDATE Jobs SET jobName = ?, mailDate = ?, WHERE id = ?",
    [job.jobName, job.mailDate, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found job with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated job: ", { id: id, ...job });
      result(null, { id: id, ...job });
    }
  );
};

// Delete job record by id

Job.remove = (id, result) => {
  sql.query("DELETE FROM Jobs WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};
