// please describe all env vars here, this method helps us to know the env vars that required to this apps
module.exports = {
  port: process.env.PORT || 3000,
  stage: process.env.NODE_ENV,
  loggingFile: process.env.LOGGING_FILE || "./log/error.log",
};
