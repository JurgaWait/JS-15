// function rodauVarda(vardas) {
//   console.log(vardas);
// }
// rodauVarda("Jurga");

// // let sarasas [1, 2, 3, 4]

// for (let i = 0; i <= 100; i++) {
//   //   console.log(i);

//   const btn = document.createElement("button");
//   btn.innerText = i;
//   document.body.appendChild(btn);
// }

let amzius = prompt("Įrašykite savo amžių");

if (amzius >= 18 && amzius < 20) {
  let geltona = document.createElement("p");
  geltona.style.backgroundColor = "yellow";
  geltona.innerHTML = "Galite pirkti energetinį gėrimą";

  document.body.appendChild(geltona);

  let btn = document.createElement("button");
  function onclick(event) {
    location.reload();
  }
  btn.innerHTML = "Dar kartą";

  document.body.appendChild(btn);
} else if (amzius >= 20) {
  let zalia = document.createElement("p");
  zalia.style.backgroundColor = "green";
  zalia.innerHTML = "Galite pirkti alko";

  document.body.appendChild(zalia);

  let btn = document.createElement("button");
  function onclick(event) {
    location.reload();
  }
  btn.innerHTML = "Dar kartą";

  document.body.appendChild(btn);
} else {
  let raudona = document.createElement("p");
  raudona.style.backgroundColor = "red";
  raudona.innerHTML = "Nieko negalite pirkti";

  document.body.appendChild(raudona);

  let btn = document.createElement("button");
  function onclick(event) {
    location.reload();
  }
  btn.innerHTML = "Dar kartą";
  document.body.appendChild(btn);
}
