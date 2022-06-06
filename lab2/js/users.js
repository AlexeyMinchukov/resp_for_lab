class User {
  constructor(
    name,
    email,
    country,
    telephone,
    username,
    firstName,
    secondName,
    container,
    callback
  ) {
    index++;
    this.id = name + index;
    this.name = name;
    this.email = email;
    this.country = country;
    this.username = username;
    this.telephone =telephone;
    this.firstName = firstName;
    this.secondName = secondName;
    this.callback = callback;  
    this.interface = getUserInterface(
      this.name,
      this.email,
      this.country,
      this.telephone,
      this.username,
      this.firstName,
      this.secondName
    );
    this.render(container);
    this.button = document.getElementById(this.id).querySelector("button");
    this.button.addEventListener('click', this.delete.bind(this));
  
  }

  delete() {
    if (this.callback(this.id)) {
      container.removeChild(this.elem)
      alert('Delete')
    }
  }

  render(container) {
    this.elem = document.createElement("div");
    this.elem.id = this.id;
    this.elem.innerHTML = this.interface;
    container.appendChild(this.elem);
 }
}

let index = 0;
