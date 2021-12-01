exports.responseHandle = async (request, response, next) => {
  return response.status(request.info).send({ data: request.data });
};
