import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './routes/intex';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// application router
app.use('/api/v1/', router);

app.get('/', async (req: Request, res: Response) => {
  // console.log(req)
  res.send('Hello World!');
});

app.use(globalErrorHandler);
//handle not found
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
});
export default app;
