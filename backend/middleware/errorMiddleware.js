//
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// If any error occurs, statusCode is pulled off of res
//  message field is extracted from err and statusCode from response and saved in message object
// then sent to middleware as a response
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: [err.message, res.statusCode],
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
