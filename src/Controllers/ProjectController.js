import _repositoryProject from "../Databases/Repository/Project.repository";
import dataFormat from "../DTO/nextRequest";
exports.create = async(request, response, next) => {
  console.log(request)
  try {
    const {
      body,
      payload: {
        data: { organisation_id },
      },
    } = request;
    const project_body = {
      name: body.name,
      description: body.description,
      start_date: body.start_date,
      organisation_id: organisation_id,
    };
    const project = await _repositoryProject.createPoject(project_body);
    request.data = dataFormat(
      201,
      true,
      "Successfully Project created",
      project
    );
    next();
  } catch (error) {
    console.log(error)
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.get =async (request, response,next) => {
  try {
    const {
      payload: {
        data: { organisation_id },
      },
      params: { id },
    } = request;

    
    const project = await _repositoryProject.findProject(id,organisation_id);
    if (!project) {
      request.data = dataFormat(404, false, "Not found");
      next();
    }

    request.data = dataFormat(200, true, "Fetched project", project);
    next();
  } catch (error) {
console.log(error)
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.gets = async(request, response,next) => {
  try {

    const {
      payload: {
        data: { organisation_id },
      }
     
    } = request;
    const project = await _repositoryProject.getProjects(organisation_id);

    request.data = dataFormat(200, true, "Fetched projects", project);
    next();
  } catch (error) {
    console.log(error)
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.update = async(request, response,next) => {
  try {
    const {
      params: { id },
      body,
    } = request;

    const project_body = {
      id: id,
      name: body.name,
      description: body.description,
      start_date: body.start_date,
      organisation_id: organisation_id,
    };
    const project = await _repositoryProject.updateProject(id, project_body);

    request.data = dataFormat(
      200,
      true,
      "Successfuly project updated",
      project
    );
    next();
  } catch (error) {
    console.log(error)
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.remove = async(request, response,next) => {
  try {
    const {
      params: { id },
    } = request;

    await _repositoryProject.deleteProjects(id);
    request.data = dataFormat(
      200,
      true,
      "Successfuly deleted project",
      project
    );
    next()
  } catch (error) {
    console.log(error)
    request.data = dataFormat(400, false, "Something went wrong");
    next();
  }
};

exports.assignUserToProject = (request, response,next) => {
  try {
  } catch (error) {}
};
