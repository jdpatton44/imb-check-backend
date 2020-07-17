import express from 'express';
import IVtoken from '../utils/IVtoken';
import singleIMB from '../utils/singleIMB'

function getUspsRoutes() {
  const router = express.Router()
  router.get('/token', token)
  router.get('/checkImb/:imb', singleImb)
  return router
}


async function token(req, res) {
    const token = IVtoken();
    res.send(token)
  }
  
  async function singleImb(req, res) {
    const {imb} = req.params;
    const token = IVtoken();
    const scanData = singleIMB(token, imb)
    res.send(scanData)
  }
  
  export {getUspsRoutes}
  
