const input = document.querySelector("#city");
const submit = document.querySelector("#button");
const destination = document.querySelector("#destination");
const container = document.querySelector(".container");
const venueDivs = document.querySelectorAll("section#venues > .venue");
const weatherDiv = document.querySelector("#weather1");

submit.addEventListener("click", () => {
  const city = search.value;
  console.log(city);
});
