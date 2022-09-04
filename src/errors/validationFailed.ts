class ValidationFailedError extends Error {
  name: string;
  data: string;

  constructor(
    message: string,
    data: string,
    name: string = "Validation Failed"
  ) {
    super(message);
    this.name = name;
    this.data = data;
  }
}

export default ValidationFailedError;
