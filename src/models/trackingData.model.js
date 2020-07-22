const sql = require("../utils/db");


// Defining a constructor for handling single records

const trackingData = function(trackingData) {
    this.jobId = trackingData.jobId;
    this.IMB = trackingData.IMB;
    this.zipPlusFour = trackingData.zipPlusFour;
    this.state = trackingData.state;
    this.package = trackingData.package;
  };
  
  
/*
SQL table structure
===========================================
Field	                Type
==========================================
jobid	               int(11)      
IMB	                   varchar(32) *PRIMARY KEY
zipPlusFour	           varchar(11)
state	               varchar(3)
package	               varchar(15)
*/

// Bulk Creation of records from csv 

trackingData.bulkCreate = (jobId, req_arr, result) => {
    sql.query(`INSERT INTO Tracking Data(${jobId}, level_col, cvss, title, vulnerability, solution, reference_col) VALUES ?`, [req_arr], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      console.log(`input ${req_arr.length} IMbs` );
      result(null, {records:req_arr.length, status:'Sucess'});
    });
  };
  

  
// Search record by imb

trackingData.findByImb = (imb, result) => {
    sql.query(`SELECT * FROM Tracking Data WHERE IMB = ${imb}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found record: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // did not find imb
      result({ kind: "not_found" }, null);
    });
  };
  