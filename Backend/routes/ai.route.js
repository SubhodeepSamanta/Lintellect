import express from 'express'
import { aiController } from '../controllers/aiController.js';

const aiRouter= express.Router();

aiRouter.get('/code-review',aiController);


export default aiRouter;