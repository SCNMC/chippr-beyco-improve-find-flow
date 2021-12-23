
# ☕ BEYCO-improve-find- flow ☕

## 📗 Beschrijving
Een duidelijk sorteer/filter syseem bouwen

<img width="400" alt="Schermafbeelding 2021-12-23 om 00 30 07" src="https://user-images.githubusercontent.com/90189750/147166513-d34c1071-d5d5-4c89-b5a8-d4c8e248cdc9.png"> De mobile versie van de website

<img width="1400" alt="Schermafbeelding 2021-12-23 om 00 31 13" src="https://user-images.githubusercontent.com/90189750/147166550-e312fefd-6027-4d7b-ad2a-d84bd205d851.png"> De desktop versie van de website met filter/sorteer menus en buttons

## 📖 Inhoud

Het huidige systeem van beyco is op dit moment nog wat onoverzichtelijk. Het systeem heeft veel filter/sorteer opties die veel ruimte in beslag nemen. Ik ben gaan kijken hoe dit op een nette manier gedaan kan worden. Ik heb 4 buttons gemaakt die de kern zijn van het nieuwe systeem. Op de buttons staat het volgende:
- Show all
- Arabica
- Robusta
- Filter opties

Deze 4 buttons staan weergeven op website. Door te klikken op show all zullen alle beschikbare koffies tevoorschijn komen. Ik heb vervolgens besloten om 2 aparte buttons te maken voor de 2 soorten koffies die beyco tot beschikking heeft. Door op "arabica" te klikken zullen alleen deze koffie soorten filteren en ditzelfde geldt voor "robusta". Ik heb hiervoor gekozen omdat er maar 2 koffiesoorten zijn voor consumptie arabica en robustabonen. Dus het filteren op deze 2 bonen vond ik een goeie manier en gebruikers zullen hierdoor direct op hun gewenste koffieboon kunnen filteren. Als laatste heb ik een button gemaakt met "filter opties". Wanneer je op deze button klikt verschijnt er een side menu aan de rechterkant. In deze side menu vind je de overige filter/sorteer opties. Ik heb gekozen voor een side menu omdat op deze manier de pagina er wat netter uitziet. Ook zorgde de vele filter opties voor een te drukke overzicht. Door een side menu te maken kan de gebruiker zelf ervoor kiezen wanneer hij/zij hiervan gebruik wilt maken. Ook heb ik de side menu zo ingedeelt dat alles op een overzichtelijke manier word weergeven.

Doormiddel van onderzoek doen naar de filter opties ben ik erachter gekomen dat van de 249 landen er maar 6 van belang zijn er gebruik worden. Dit heb ik ook meegenomen naar het maken van het filter systeem. Ditzelfde geld ook voor de grades. Ik ben gaan kijken welke grades op dit moment gebruikt worden, daarom heb ik ervoor gekozen om alleen wat van belang is te weergeven in de opties voor countries en grades. Voor quantity en cupping score heb ik gebruikt gemaakt van een range. Hierdoor kunnen gebruikers voor quantity de range aanpassen op minimale en maximaal. Ditzelfde geld voor de cupping score, de score kan aangepast worden van laag naar hoog.


## 💡 Kenmerken

### Buttons HTML/CSS/JS:

voor de buttons heb ik een ```≤button≥``` element gebruikt. Hieraan heb ik een id gekkopelt om later JS aan toe te voegen.
De styling van buttons heb ik gedaan in CSS. Ik heb de buttons een background-colour gegeven van ![#3a8070](https://via.placeholder.com/15/3a8070/000000?text=+) `#3a8070` met een ```≤border-radius≥``` van 3.4px. De tekst in de button heeft de kleur wit . Ik heb hiervoor gekozen omdat dit volgens de styleguide van beyco gaat.

### Coffee cards filtering:
Het filtern gaat doormiddel van javascript. Ik heb gebruikt gemaakt van deze methode:

1. document.querySelector("#filterbutton1");

   var fieldset_aantal = document.querySelector("#filter_aantal")
2. button_showAantal.addEventListener("click", function () {
3. fieldset_aantal.classList.toggle("hide")

Dit heb ik gedaan voor de buttons "show all" en "Arabica" "Robusta". 

### Side menu:

De side menu heeft een ```<background-colour>``` van ![#3a8070](https://via.placeholder.com/15/3a8070/000000?text=+) `#3a8070`. Ik heb de volgende HTML elementen gebruikt voor deze opties:
-Countries ```<option>```
- Port of Export ```<option>```
- Quantity ```<input type= "range">```
- Grades, Certifications en process ```<input type= "checkbox">```
- Cupping score ```<input type= "range">```

### ✍️ Sketch tools:
- Figma
- Pen & papier

### 🔎 Technieken/ methodes
- HTML
-  CSS
-  JS
-  Cart sorting
-  Dev lifecycle

## Installatie

## ✅ Gebruik

Gebruik de navigatie syteem door op de gewenste buttons te klikken. Wilt u op alle koffies filteren klik dan op "show all". Wilt u op een specifieke soort filteren klik dan op de opties "Arabica" of "Rpbusta". Extra filter opties vind u bij de button "filter opties"

## Bronnen

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
