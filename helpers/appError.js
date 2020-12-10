class AppError extends Error {
  constructor(statusCode, status, message) {
    super();
    this.statusCode = statusCode;
  }
}
