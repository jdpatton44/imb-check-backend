import express from 'express'
const trackingData = require("../controllers/trackingDataController.js");


function getTrackingDataRoutes() {
    const router = express.Router()
    // POST call route to create records in bulk 
    router.post("/bulkcreate", trackingData.bulkImportImbData);
    return router
  }

export {getTrackingDataRoutes}
