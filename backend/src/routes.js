import express from 'express';
import * as controller from './controller/index.js';

const router = express.Router();

router.get(
  '/api/example',
  (req, res) => {
    controller.someAction(res, req.body);
  }
);

export default router;
