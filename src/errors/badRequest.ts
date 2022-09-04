class BadRequestError extends Error {
  name: string;

  constructor(message: string, name: string = "Bad Request") {
    super(message);
    this.name = name;
  }
}

export default BadRequestError;
