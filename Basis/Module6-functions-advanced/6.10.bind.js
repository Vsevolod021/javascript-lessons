// task #1
function f() {
  alert(this.name);
}

function g() {
    alert(this.name);
}

f = f.bind( {name: "Вася"} )
g = g.bind( {name: "Петя" } );

// f();
// g();

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
   name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));