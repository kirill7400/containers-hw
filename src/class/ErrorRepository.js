class ErrorRepository {
  constructor() {
    this.errorList = new Map([
      [404, 'Not Found'],
      [500, 'Server Error']
    ]);
  }

  translate(code) {
    return this.errorList.get(code) || 'Unknown error'
  }
}

export default ErrorRepository