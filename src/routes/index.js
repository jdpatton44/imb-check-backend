import express from 'express'
import {getMathRoutes} from './math'
import {getUspsRoutes} from './usps'
import {getJobRoutes} from './job'
import {getTrackingDataRoutes} from './trackingData'


function getRoutes() {
  const router = express.Router()
  router.use('/math', getMathRoutes())
  router.use('/usps', getUspsRoutes())
  router.use('/job', getJobRoutes())
  router.use('/trackingData', getTrackingDataRoutes())
  return router
}

export {getRoutes}
