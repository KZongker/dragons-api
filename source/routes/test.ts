import express, { Router, Request, Response, NextFunction } from 'express';
import TestController from '../controllers/test.controller';

// Define the type for the controller function
type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>> | void;

const router: Router = express.Router();

// Assert the type of the controller function
const typedTestFunction: ControllerFunction = TestController.testFunction;

router.get('/testRoute', typedTestFunction);

export default router;