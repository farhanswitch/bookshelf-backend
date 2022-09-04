class notFoundError extends Error {
  name: string;
  data: string;

  constructor(message: string, data: string, name: string = "Not Found") {
    super(message);
    this.name = name;
    this.data = data;
  }
}

export default notFoundError;
