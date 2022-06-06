let menuUserCreate = document.querySelector(".personal_info");
let inputsOfMenu = menuUserCreate.querySelectorAll(".info");
let btnCreateUser = menuUserCreate.querySelector("button");
let container = document.querySelector(".users");
let usersArr = [];

btnCreateUser.addEventListener("click", () => {
  if (!inputsOfMenu[0].value) {
    alert("Enter the name please!");
  } else if (!inputsOfMenu[1].value) {
    alert("Enter the email please!");
  } else if (!inputsOfMenu[2].value) {
    alert("Enter the country please!");
  } else if (!inputsOfMenu[3].value) {
    alert("Enter the telephone please!");
  } else if (!inputsOfMenu[4].value) {
    alert("Enter the username please!");
  } else if (!inputsOfMenu[5].value) {
    alert("Enter the first name please!");
  } else if (!inputsOfMenu[6].value) {
    alert("Enter the second name please!");
  } else {
    let user = new User(
      inputsOfMenu[0].value,
      inputsOfMenu[1].value,
      inputsOfMenu[2].value,
      inputsOfMenu[3].value,
      inputsOfMenu[4].value,
      inputsOfMenu[5].value,
      inputsOfMenu[6].value,
      container,
      deleteUser
    );
    console.log(user);
    usersArr.push(user);
  }
});

function deleteUser(id) {
  for (let i = 0; i < usersArr.length; i++) {
    if (id === usersArr[i]?.id) {
      delete usersArr[i];
      return true;
    }
  }
}
