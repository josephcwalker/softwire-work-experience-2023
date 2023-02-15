import express from 'express';
import * as controller from './controller/index.js';

const router = express.Router();

router.post(
  '/newscore',
  (req, res) => {
   
    controller.newScore(res, req.body);
  }
);

router.get(
  '/scores',
  (req, res) => {
    
    controller.getScores(res, req.body);
  }
);


export default router;
