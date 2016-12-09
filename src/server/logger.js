const logger = server =>
  server.on('response', request =>
    console.log(`${request.info.remoteAddress}: ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode}`));

export default logger;
