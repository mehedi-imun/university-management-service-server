import express from 'express';
const router = express.Router();
import userController from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validationZod';
router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  userController.createUser
);

export default router;
