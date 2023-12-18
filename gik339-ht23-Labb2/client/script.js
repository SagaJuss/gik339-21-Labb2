async function getPromise() {
  const res = await fetch("http://localhost:3000/users");
  console.log(res.json)
  return res.json();
}

async function getData() {
  const users = await getPromise();
  const container = document.getElementById("container");

  users.forEach((user) => {
    let element = `<div class ="colorbox" style="background-color: ${user.color}"> 
    <p class="box">ID nummer: ${user.id}</p>
    <p class="box">Namn: ${user.firstName} ${user.lastName}</p>
    <p class="box">Användarnamn: ${user.username}</p>
    <p class="box">Favoritfärg: ${user.color}</p>
    </div>`;

    container.insertAdjacentHTML("beforeend", element);
  });
}

getData();


