import { ErrorRequestHandler } from 'express'
import ApiError from '../errors/ApiError'
import { IGenericErrorMessage } from '../errors/errorInterface'
import handleValidationError from '../errors/handleValidation'
const globalErrorHandler: ErrorRequestHandler = (
  error: any,
  req,
  res,
  next
) => {
  let statusCode = 500
  let message = 'opps! something went wrong'
  let errorMessages: IGenericErrorMessage[] = []
  if (error?.name === 'ValidationError') {
    const simplyErrorMessage = handleValidationError(error)

    statusCode = simplyErrorMessage.statusCode
    message = simplyErrorMessage.message
    errorMessages = simplyErrorMessage.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: process.env.NODE_ENV === 'production' ? undefined : error?.stack,
  })
  next()
}
export default globalErrorHandler
