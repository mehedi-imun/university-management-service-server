import mongoose from 'mongoose';
import { IGenericErrorMessage } from './errorInterface';
import { IGenericErrorResponse } from './errorResponseInterface';
const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    }
  );

  const statusCode = 400;
  return {
    statusCode,
    message: 'user validation error',
    errorMessages: errors,
  };
};

export default handleValidationError;
