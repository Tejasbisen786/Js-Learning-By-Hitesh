function User(email, password) {
  this._email - email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

}

const tejas = new User("t@gmail.com","tejas123")
console.log(tejas.email);
// console.log(tejas.password);

