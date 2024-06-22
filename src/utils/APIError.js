class APIError extends Error {
  //
  constructor(message = "ERR : Something went wrong", errors = []) {
    super(message);
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}

export { APIError };
