import CustomError from '../errors/custom-error';

const errorHandler = (err, req, res) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  return res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};

export default errorHandler;
