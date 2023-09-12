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

const fetchPhoneData = async (name, isViewMore) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${name}`
  );
  const data = await res.json();
  //   loadData(data);
  const phones = data.data;
  displayPhones(phones, isViewMore);
};

// function loadData(data) {
//   for (const a of data) {
//     console.log(a);
//   }
// }
const displayPhones = (phones, isViewMore) => {
  const phoneContainer = document.getElementById("phone-container");
  const viewMoreButton = document.getElementById("more-btn");

  phoneContainer.textContent = ``;

  if (phones.length > 16 && !isViewMore) {
    viewMoreButton.classList.remove("hidden");
  } else {
    viewMoreButton.classList.add("hidden");
  }
  if (!isViewMore) {
    phones = phones.slice(0, 16);
  }

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
  toggleLoadingSpinner(false);
};

// fetchPhoneData();

const searchButtonPressed = (isViewMore) => {
  const searchField = document.getElementById("search-field");
  fetchPhoneData(searchField.value, isViewMore);
  toggleLoadingSpinner(true);
  console.log(searchField.value);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

//Show all
const showAllHandler = () => {
  searchButtonPressed(true);
};
