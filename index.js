console.log("I'm working");

// con la DOM Manipulation noi potremo alterare
// il contenuto di una pagina precedentemente caricata
// INSERIRE/MODIFICARE/ELIMINARE qualsiasi cosa renderizzata al suo interno

// il processo si compone di DUE FASI:
// 1) SELEZIONE (DOM Traversing)
// 2) MANIPOLAZIONE (DOM Manipulation)

// per SELEZIONARE i nostri elementi faremo SEMPRE riferimento al nostro
// document, che è un oggetto già disponibile nel browser,
// rappresenta l'intera pagina

// tutti i metodi che applicheremo riguardernno il document

// 1) Selezione per id
const menu = document.getElementById("main-menu"); // DOM Node di <ul> || null
// nel caso in cui la selezione non trovi l'elemento cercato i metodi ritornano null
console.log("MENU", menu); // ci visualizza il tag html con relativa connessione alla versione renderizzata
console.dir(menu); // ci visualizza le proprietà del nodo

// getElementById ci permette di recuperare un elemento nella pagina tramite il suo attributo id (univoco)

// 2) Selezione per classe
const allTheFooterListItems = document.getElementsByClassName("footer-list-element");
// il metodo getElementsByClassName ritorna comunque un'array
// anche se vuoto nel caso in cui non abbia trovato classi corrispondenti alla ricerca
// console.log("FOOTER LIST ITEMS", allTheFooterListItems);
// console.log("FIRST FOOTER LIST ITEMS", allTheFooterListItems[0]);
const firstFooterItem = document.getElementsByClassName("footer-list-element")[0];
// selezioniamo il primo elemento usando la posizione [0] nella collezione che ci ritornerà dall'eseguire il metodo

for (let i = 0; i < allTheFooterListItems.length; i++) {
  console.log(allTheFooterListItems[i]);
}

// 3) Selezione per tag name
let allTheArticles = document.getElementsByTagName("article");
const h1WithTag = document.getElementsByTagName("h1")[0];
console.log("H1", h1WithTag);

console.log(allTheArticles);

for (let i = 0; i < allTheArticles.length; i++) {
  console.log(allTheArticles[i]);
}

// allTheArticles.forEach(article => console.log(article));
// forEach non esiste su una HTMLCollection, dovrà essere trasformata prima di usarlo
allTheArticles = Array.from(allTheArticles);
// modifichiamo il contenuto della variabile (per non doverne inventare un'altra)
// con l'HTMLCollection modificata in un VERO array
// a questo punto abbiamo piena libertà di usare tutti i metodi più recenti di manipolazione degli array
allTheArticles.forEach((article) => console.log("FROM FOREACH", article));

// 4) querySelector
// questo metodo fa largo uso di selettori CSS (anche avanzati)
// ricordarsi i simboli per selezionare id (#) e classi (.)
// con querySelector, se cercate delle classi, vi tornerà il primo elemento che corrisponde alla classe
// se volete ricevere tutti gli elementi con la stessa classe, riferitevi al successivo metodo in basso (querySelectorAll)
const menuWithQuerySelector = document.querySelector("#main-menu");
console.log("MENU WITH QUERY SELECTOR #", menuWithQuerySelector);

const onlySecondArticle = document.querySelector("main article:last-of-type");

console.log("SECOND ARTICLE", onlySecondArticle);
let menuItem = document.querySelector(".menu-items");
console.log("SINGLE ITEM", menuItem);

// 5) querySelectorAll
// ci ritorna una collezione di elementi sotto forma di NodeList (un po' più avanzata della HTMLCollection)
// potrebbe comunque essere necessario trasformarla in un vero array con il metodo Array.from()
// se avete bisogno di metodi degli array più avanzati per manipolarla
let menuItems = document.querySelectorAll(".menu-items");
console.log(menuItems);

menuItems = Array.from(menuItems);
console.log(
  "MAP",
  menuItems.map((item) => item.innerText)
);

const secondFooterItem = document.querySelector("footer ul li:nth-of-type(2)");
console.log("SECOND FOOTER ITEM", secondFooterItem);

// MANIPOLAZIONE DEGLI ELEMENTI NEL DOM
const h1 = document.querySelector("h1");
// h1.innerText = "Ciao EPICODERS!"; // non interpreta i tag come tag html, ma li vedrete scritti in form testuale
// h1.innerHTML = "Ciao <span style='color: red'>EPICODERS</span>!";
console.log(h1.innerText);

// eliminare PER SEMPRE un elemento dal DOM

// onlySecondArticle.remove(); // stiamo rimuovendo il secondo articolo dalla pagina COMPLETAMENTE
// cercarlo da qui in poi non produrrà risultati

// applicazione indiretta di stili tramite una o più classi applicata a qualsiasi elemento
console.dir(menuItem);
menuItem.classList.add("red-and-bold", "test");

// applicazione di stili diretti

// onlySecondArticle.style.display = "none"; // applica uno style inline, come se l'avessimo applicato in HTML
// onlySecondArticle.style.backgroundColor = "blue"; // per singola regola (N.B. proprietà CSS in camelCase)
// onlySecondArticle.style = "background-color: blue; color: white";

// firstFooterItem.classList.remove("footer-list-element");
// abbiamo la possibilità di gestire facilmente le classi di un elemento (aggiungere/togliere/...)

const toggleColor = function () {
  const mainTitle = document.querySelector("h1");
  mainTitle.classList.toggle("red-and-bold");
};
toggleColor();

onlySecondArticle.className = "new-class";

// onlySecondArticle.className = "another-class"; // NON AGGUNGETE classi succesive ad una prima in questo modo
onlySecondArticle.classList.add("another-class"); // preferite un metodo non distruttivo che aggiunge in maniera coerente una class IN PIU'

const hideElem = function () {
  const elementToRemove = document.getElementById("element-to-remove");
  console.log(elementToRemove);

  elementToRemove.classList.toggle("hidden");
};

// hideElem();

// CREAZIONE DI NUOVI ELEMENTI
const addNewArticle = function () {
  const main = document.querySelector("main"); // 1) trovo il mio contenitore

  // creo un nuovo elemento
  const newArticle = document.createElement("article"); // 2) creare nuovo elemento vuoto
  console.log(newArticle);
  newArticle.innerText =
    "Beatae odit rerum nihil. Accusantium doloremque ducimus rem molestiae in aliquid, voluptate facere nostrum architecto rerum delectus. Atque ipsam libero, eius maxime, rerum molestias officia nesciunt autem fugit dolorum quod natus cupiditate sint animi! Numquam quod voluptatem autem explicabo, earum impedit ut unde dicta magni maiores aliquam enim! Illo voluptas ea odio, explicabo perspiciatis assumenda animi, cumque error, aliquid possimus cupiditate ab aperiam. Dignissimos? Esse, atque aliquam facere, at aspernatur cupiditate ea a nam ipsum labore accusamus optio inventore? Incidunt quis fugit voluptate in asperiores dolorum, omnis aliquid corrupti. Inventore commodi repellat odio explicabo.";
  // 3) dargli un contenuto
  console.log(newArticle);
  // 4) dargli eventuali classi o id o attributi
  newArticle.classList.add("red-and-bold");
  // 5) "appenderlo" nel contenitore selezionato in precedenza
  main.appendChild(newArticle); // questo è il momento in cui l'elemento trova il suo posto nella pagina
};

// L'evento on-click: serve a far scaturire un effetto in un momento preciso nel tempo.
// Quando un preciso elemento riceve il click dall'utente
// colleghiamo una funzione che si occuperà di esegure le operazioni da noi specificate in anticipo

// Seleziono il bottone dalla pagina
// e gli aggancio successivamente l'azione da compiere al "click"
const btn = document.getElementById("toggle-visibility");
btn.onclick = hideElem; // non ci vanno le parentesi!!! è l'evento che ci chiamerà la funzione hideElem
console.dir(btn);

const changeImage = function () {
  const img = document.querySelector("img");
  img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1689020562921-ba28a34c881d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80"
  );

  // equivalente al metodo setAttribute
  // img.src= "https://images.unsplash.com/photo-1689020562921-ba28a34c881d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80"
};

// secondo bottone che cambia la src dell'immagine al click,
// la funzionalità è dichiarata all'interno della funzione changeImage
const changeImgBtn = document.getElementById("change-image");
changeImgBtn.onclick = changeImage;

// questa funzione selezionerà l'h1 e gli cambierà lo stile e rimuoverà
// l'ultima lettera del suo testo, ogni volta che verrà cliccata

const changeColorAndRemoveLast = function () {
  const h1 = document.querySelector("h1"); // seleziono l'elemento
  h1.style.color = "#3F51B5"; // ...e poi lo modifico
  h1.style.userSelect = "none";
  h1.innerText = h1.innerText.slice(0, -1);
  // slice prende una porzione di testo esistente,
  // e riassegna l'innerText allo stesso valore MENO l'ultima lettera,
  // ogni volta che la funzione verrà eseguita
};

h1.onclick = changeColorAndRemoveLast; // agganciando l'onclick all'h1 sto impostando l'esecuzione della funzione changeColorAndRemoveLast ad ogni click

// Metodi per RISALIRE nei nodi del DOM
console.log(menuItem.parentNode.parentNode.parentNode); // <header></header>
console.log(menuItem.closest("header")); // equivalente a quello sopra, con sintassi più concisa
