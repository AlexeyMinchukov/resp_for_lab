function getUserInterface(
  name,
  email,
  country,
  telephone,
  username,
  firstName,
  secondName
) 
{
  return `
        <div class="information"><p>Name: ${name}</p></div>
        <div class="information"><p>Email: ${email}</p></div>
        <div class="information"><p>Country: ${country}</p></div>
        <div class="information"><p>Telephone: ${telephone}</p></div>
        <div class="information"><p>Username: ${username}</p></div>
        <div class="information"><p>First name: ${firstName}</p></div>
        <div class="information"><p>Second name: ${secondName}}</p></div>
        <button>Delete</button>
        `;
}
