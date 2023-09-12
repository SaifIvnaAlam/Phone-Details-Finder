// console.log("js connected");

// const fetchData = async () => {
//   const res = await fetch("https://fakestoreapi.com/products/categories");
//   const myJson = await res.json();
//   console.log(myJson);
// };

// const searchbutton = document
//   .getElementById("search-btn")
//   .addEventListener("click", fetchData());

//load Phone call

const fetchPhoneData = async (name) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${name}`
  );
  const data = await res.json();
  //   loadData(data);
  const phones = data.data;
  displayPhones(phones);
};

// function loadData(data) {
//   for (const a of data) {
//     console.log(a);
//   }
// }
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  // phoneContainer.innerText = ``;
  // phoneContainer.innerHTML = "";
  phoneContainer.textContent = ``;

  phones.forEach((element) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("card", "w-96", "bg-base-100", "shadow-xl");
    phoneCard.innerHTML = `  <figure class="px-10 pt-10">
      <img
        src="${element.image}"
        alt="Shoes"
        class="rounded-xl"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${element.phone_name}</h2>
      <p>${element.brand}</p>
      <div class="card-actions">
        <button class="btn btn-primary">Show details</button>
      </div>
    </div>`;
    phoneContainer.appendChild(phoneCard);
  });
};

// fetchPhoneData();

const searchButtonPressed = () => {
  const searchField = document.getElementById("search-field");
  fetchPhoneData(searchField.value);
  console.log(searchField.value);
};
