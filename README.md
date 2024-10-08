# Projekt README

## Használt technológiák
Frontend
- React (Vite)
  - Tailwind CSS
  - shadcn/ui

Backend
- Node.js (Express)
- PhpMyAdmin

## Ami kell:
npm (10.5.0)   
xampp-phpmyadmin (egy root adatbázis jelszó nélkül):

```
{
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travelappdb',
}
```

adatbázis (travelappdb.sql) a travelapp mappában

## Futtatás
(travelapp mappában):

```
cd client
npm install
npm run dev
```

(másik terminál)

```
cd server
npm run dev
```
oldal: http://localhost:5173  
szerver: http://localhost:5000

## Leírás
### Elkészítési idő

Frontend - kb 10 óra  
Backend - <1 óra


### Hibák
Bal Drawer lenyitásánál néha eltűnik egy pillanatra a felső sáv  
Bal Drawer görgetésénél görgül a főoldal is  
Subscribe menü-nél egy kicsit balra csúszik az oldal (ShadCN-nél valamilyen bug)  
popularNews látható, de kódban nem elérhető (valamilyen setState hiba)  
előző miatt a kategóriák sem működik

### Gyorsaság szempontjából
minden szöveg alapból kap Fontot (a kiskapitálist), kivéve ha van "nofont" class rajta  
Nincs jól szegmentelve a Navbar (bele kell mászni a módosításhoz)  
A hírekhez nem használtam State management package-t (zustand amit szoktam), így csak az App.tsx ből elérhető (popularNews mindenhol)  
Néha md-nél néha lg-nél vált nagyképernyős módra  

### Ai generálás
VSCode add-ont "Cody AI"-t használtam, főleg css és syntax hibák kijavítására, és 1-2 boilerplate kódra  

- "fix xy":

dark mode a NewsBlocknál


- teljesen AI generált:

Bal Drawer-be a kategóriák menü  
Footer szekció (idő szempontjából)  
A div, amiben az ImageSlider szeckió van  
Subscribe-ban az isValidEmail  

- adatbázis sablon hírek:

"create 7 example data for this database:
```
id- autoincrement
title-VARCHAR
section-VARCHAR(sport, politics, money, world)
date - DATE
LIKES - (1-1000)
COMMENTS - (1-1000)
```
make sure its an insert into" 