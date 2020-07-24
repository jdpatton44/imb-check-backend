/*
SQL table structure
===========================================
Field	                Type
==========================================
jobid	               int(11)   *PRIMARY KEY 
jobName	             varchar(50) 
mailDate	           date
*/

module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define('job', {
    jobName: {
      type: Sequelize.STRING,
    },
    mailDate: {
      type: Sequelize.STRING,
    },
  });

  return Job;
};
