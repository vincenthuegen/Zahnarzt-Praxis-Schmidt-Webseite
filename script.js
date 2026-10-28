const leistungen = [
"Anamnese",
"Bisshebung",
"Prophylaxe",
"Kariesdiagnostik",
"Professionelle Zahnreinigung",
"Endodontie",
"Parodontitisbehandlung",
"Funktionsanalyse",
"Abformung",
"Nachsorge"
];

const nav = document.getElementById("navigation");
const respoButton = document.getElementById('respo-button');
const cardContainer = document.getElementById("card-container");
const menuButton = document.getElementById('open_menu_button');


respoButton.addEventListener('click', function() {
  nav.classList.toggle('default-hide');
});


menuButton.addEventListener('click', function() {
  cardContainer.classList.toggle('hide');
  
  // Prüfen, ob das Menü gerade eingeklappt ist oder nicht
  const isHidden = cardContainer.classList.contains('hide');
  
  if (isHidden) {
    // Pfeile zeigen nach unten (Menü ist zu)
    menuButton.innerHTML = '&#8650;';
  } else {
    // Pfeile zeigen nach oben (Menü ist offen)
    menuButton.innerHTML = '&#8648;';
  }
});

leistungen.forEach(leistung => {
const card = document.createElement("div");
card.className = "service-card";
card.textContent = leistung;
cardContainer.appendChild(card);
});