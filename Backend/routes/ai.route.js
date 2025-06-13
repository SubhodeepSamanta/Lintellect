import express from 'express'
import { aiController } from '../controllers/aiController.js';

const aiRouter= express.Router();

aiRouter.post('/code-review',aiController);


export default aiRouter;