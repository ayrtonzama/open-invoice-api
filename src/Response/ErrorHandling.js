exports.errorHandler = (request, response, next) => {
 
  let status = request.data.code;
  if (status >= 200 && status < 400) {
    return next();
  }
  switch (status) {
    case 400:
      return response.status(400).send({ message: "Bad Method" });

    case 401:
      return response.status(401).send({ message: "Unauthorized" });

    default:
      return response.status(500).send({ message: "Unknown error" });
  }
};
