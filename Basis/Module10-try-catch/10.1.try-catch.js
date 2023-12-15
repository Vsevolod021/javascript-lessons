class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'VadidationError';
  }
}

const IResponse = {
  firstName: 'string',
  lastName: 'string',
  age: 'number'
}

const json = '{ "firstName": "Jack", "lastName": "Antonoff", "age": "39"}';

try {
  const res = JSON.parse(json);

  for (let key in IResponse) {
    if (!res.hasOwnProperty(key)) {
      throw new ValidationError(`field ${key} is missing`);
    }
  }
} catch(e) {
  console.log(e.message);
}