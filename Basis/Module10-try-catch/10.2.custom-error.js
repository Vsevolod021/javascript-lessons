class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("Нет свойства: " + property);
    this.property = property;
  }
}

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = this.constructor.name;    
  }
}

function validateUser(user) {
  if (!user.firstName) {
    throw new PropertyRequiredError('firstName');
  };

  if (!user.lastName) {
    throw new PropertyRequiredError('lastName');
  };

  if (!user.age) {
    throw new PropertyRequiredError('age');
  };
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch(err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err); 
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch(err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);
    } else {
      throw err;
    }
  }
}

try {
  const json = '{ "firstName" : "Jack", "lastName": "Antonoff" }';

  readUser('{bad хуйня}');
} catch (err) {
  if (err instanceof ReadError) {
    alert('ошибка: ' + err);
    // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
    alert("Исходная ошибка: " + err.cause);
  } else {
    throw err;
  }
}

