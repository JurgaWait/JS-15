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
