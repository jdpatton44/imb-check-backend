import express from 'express'
import {getMathRoutes} from './math'
import {getUspsRoutes} from './usps'

function getRoutes() {
  const router = express.Router()
  router.use('/math', getMathRoutes())
  router.use('/usps', getUspsRoutes())
  return router
}

export {getRoutes}
