// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Готово!'), 5000)
//   });

//   let result = await promise;

//   alert('boom');
//   alert(result);
// }

// f();


// task #1

async function loadJson(url) {
  response = await fetch(url)

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } 

  throw new Error(response.status);
}

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

// task #2

// Запрашивать логин, пока github не вернёт существующего пользователя.
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status == 200) {
    const json = await response.json();
    return json;
  } 

  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;
  
  while(true) {
    let name = prompt("Введите логин?", "iliakan");  

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Полное имя: ${user.name}.`);
      return user;      
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    } 
  }
}

// demoGithubUser();

// task #3
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(alert);
}

f();