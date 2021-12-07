exports.responseHandle = async (request, response, next) => {
  return response.status(request.data.code).send(request.data);
};
