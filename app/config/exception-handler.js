const logger = require('../helpers/logger');
const moment = require('moment');
const {
  DataError,
  ConstraintViolationError,
  ForeignKeyViolationError,
  UniqueViolationError,
  NotNullViolationError,
  DBError,
  wrapError,
} = require('objection-db-errors');

/**
 * Router exception handler wrapper.
 *
 * @param {CallableFunction} cb Controller body
 * @return {function (req,res,next)}  exception free controller logic as a function
 */
module.exports.asyncWrapper = (cb) => {
  return (req, res, next) => {
    try {
      const wrappedRoute = cb(req, res, next);
      if (wrappedRoute && wrappedRoute.catch) {
        wrappedRoute.catch((err) => {
          next(err);
        });
      }
    } catch (err) {
      next(err);
    }
  };
};

/**
 * Error handling middleWare.
 *
 * @param {object} app express object
 */
module.exports.expressExceptionHandler = (app) => {
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    let exceptionBody = [];
    err = wrapError(err);

    /**
     * Catch validation errors.
     */
    if (statusCode == 422) {
      exceptionBody = exceptionBody.concat(err.errors);
    /**
     * Catch database errors.
     */
    } else if (err instanceof UniqueViolationError) {
      exceptionBody.push(`Unique constraint ${err.constraint}`);
    } else if (err instanceof NotNullViolationError) {
      exceptionBody.push(`Not null constraint `);
    } else if (err instanceof DataError) {
      exceptionBody.push(`Data error `);
    } else if (err instanceof ConstraintViolationError) {
      exceptionBody.push(`Constraint violation `);
    } else if (err instanceof ForeignKeyViolationError) {
      exceptionBody.push(`Foreign key violation `);
    } else if (err instanceof DBError) {
      exceptionBody.push(`Some unknown DB error`);
    } else {
      exceptionBody.push(err.response || err.message || 'Unidentified Error');
    }

    /**
     * Log error using custom logger.
     */
    if ( ! statusCode || statusCode === 500) {
      logger.log('error', `[${moment().format('YYYY-MM-DD hh:mm:ss')}] ${err.stack}`);
      exceptionBody = container.config.node_env == 'production' ? ['server error'] : exceptionBody;
    }

    /**
     * Send response to the client.
     */
    res.status(statusCode).json({errors: exceptionBody});
  });
};


module.exports.exceptionHandler = () => {
  /**
   * Catch unhandeled promis and throw exception.
   */
  process.on('unhandledRejection', (reason, p) => {
    throw reason;
  });

  /**
   * Catch exception and log it using winston.
   */
  process.on('uncaughtException', (err) => {
    /**
     * Log error using custom logger.
     */
    logger.log('error', `[${moment().format('YYYY-MM-DD hh:mm:ss')}] ${err.stack}`);
  });
};
