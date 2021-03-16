function setUserId(id, name, email, city, street) {
  const user = {
    id: id,
    name: name,
    email: email,
    city: city,
    street: street,
  };

  let favorites = JSON.parse(localStorage.getItem("favorites"))
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];
  let isElementInFavorites = favorites.find((el) => {
    if (el.id == id) {
      return 1;
    }
  });

  if (!isElementInFavorites) {
    favorites.push(user);
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

function createCard(id, name, email, city, street) {
  const newContainer = document.querySelector(".container");
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const userName = document.createElement("p");
  const userEmail = document.createElement("p");
  const userCity = document.createElement("p");
  const userStreet = document.createElement("p");
  const button = document.createElement("button");

  card.classList.add("card");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  userEmail.classList.add("card-text");
  userCity.classList.add("card-text");
  userStreet.classList.add("card-text");

  button.classList.add("add");
  button.textContent = "add";

  cardTitle.innerHTML = `Id: ${id}`;
  userName.innerHTML = `Name: ${name}`;
  userEmail.innerHTML = `Email: ${email}`;
  userCity.innerHTML = `City: ${city}`;
  userStreet.innerHTML = `Street: ${street}`;

  button.addEventListener("click", () =>
    setUserId(id, name, email, city, street)
  );

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(userName);
  cardBody.appendChild(userEmail);
  cardBody.appendChild(userCity);
  cardBody.appendChild(userStreet);
  cardBody.appendChild(button);
  card.appendChild(cardBody);

  newContainer.appendChild(card);
}

function createFavoritesCard(id, name, email, city, street) {
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const userName = document.createElement("p");
  const userEmail = document.createElement("p");
  const userCity = document.createElement("p");
  const userStreet = document.createElement("p");
  const button = document.createElement("button");
  const favoritesContainer = document.querySelector(".container__favorites");

  card.classList.add("card");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  userEmail.classList.add("card-text");
  userCity.classList.add("card-text");
  userStreet.classList.add("card-text");

  button.classList.add("add");
  button.textContent = "add";

  cardTitle.innerHTML = `Id: ${id}`;
  userName.innerHTML = `Name: ${name}`;
  userEmail.innerHTML = `Email: ${email}`;
  userCity.innerHTML = `City: ${city}`;
  userStreet.innerHTML = `Street: ${street}`;

  button.addEventListener("click", () =>
    setUserId(id, name, email, city, street)
  );

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(userName);
  cardBody.appendChild(userEmail);
  cardBody.appendChild(userCity);
  cardBody.appendChild(userStreet);
  cardBody.appendChild(button);
  card.appendChild(cardBody);

  favoritesContainer.appendChild(card);
}

const btnFavorites = document.querySelector(".favorites");

btnFavorites.addEventListener("click", () => {
  JSON.parse(localStorage.getItem("favorites")).forEach((el) => {
    createFavoritesCard(el.id, el.name, el.email, el.city, el.street);
  });
});

async function getRequest() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    return data;
  } catch (err) {
    //err
  }
}

async function renderCard() {
  try {
    const awaitRequest = await getRequest();

    awaitRequest.forEach((el) => {
      createCard(el.id, el.name, el.email, el.address.city, el.address.street);
    });
  } catch (error) {}
}

renderCard();

// function createCard(name, username, email, address, id) {
//   const { city, street } = address;
//   return `
//   <div class="card" style="width: 20rem;">
//   <div class="card-body">
//   <a class="go" onClick="${setUserId()}}"
//     <h5 class="card-title">${username} ${name}</h5>
//     <p class="card-text">Email: ${email}</p>
//     <p class="card-text">City: ${city}</p>
//     <p class="card-text">Address: ${street}</p>
//     <p class="card-text">Id: ${id}</p>
//     </a>
//   </div>
// </div>
//   `;
// }

// function setUserId(id, username) {
//   // window.localStorage.setItem("selectedUserId", id);
//   console.log(id, username);
// }

// async function getRequest() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = response.json();
//     return data;
//   } catch (err) {
//     //err
//   }
// }

// async function renderCard() {
//   const container = document.querySelector(".container");

//   try {
//     const awaitRequest = await getRequest();

//     awaitRequest.forEach((e) => {
//       container.innerHTML += createCard(
//         e.name,
//         e.username,
//         e.email,
//         e.address,
//         e.id
//       );
//     });
//   } catch (err) {
//     // err
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderCard();
// });
