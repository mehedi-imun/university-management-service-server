import dotenv from 'dotenv';
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import { errorLogger, logger } from './shared/logger';
dotenv.config();
let server: Server;
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});
async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION as string);
    logger.info('db connect successfully');
    server = app.listen(process.env.PORT, () => {
      logger.info(`university app listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    errorLogger.error('connect felid', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);

        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();
process.on('SIGTERM', () => {
  logger.info('sigterm is received');
  if (server) {
    server.close();
  }
});
