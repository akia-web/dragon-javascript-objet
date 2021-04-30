export default class Personnage{
    constructor(vie, nom){
        this.vie = vie;
        this.nom = nom;
    }
}

// Fonction de l'attaque coup de poing
// rappratriemet de la fonction detailCombat
 export function poing(ennemy, hero , min , max) {
   let info = document.getElementById('infoHero');
   let degatHero = Math.floor(Math.random() * (max - min +1)) + min
   document.getElementById('barreD').style.width = ennemy.vie /2+  "px"
   ennemy.vie -= degatHero 
   detailCombat(ennemy, hero)
    info.innerHTML='<p> Vous avez fait ' + degatHero + ' points de dégats </p>'
}

// Fonction de l'attaque coup de se retourner et peter
// rappratriemet de la fonction detailCombat
 export function pet(ennemy , hero, min, max) {
    let info = document.getElementById('infoHero');
    let degatHero = Math.floor(Math.random() * (max - min +1)) + min
    document.getElementById('barreD').style.width = ennemy.vie /2+  "px"
    ennemy.vie -= degatHero 
    detailCombat(ennemy, hero)
    info.innerHTML='<p> Vous avez fait ' + degatHero + ' points de dégats </p>'
}

// Fonction de l'attaque coup de pieds bien placé
// rappratriemet de la fonction detailCombat
 export function pied(ennemy, hero, min, max) {
    let info = document.getElementById('infoHero');
    let degatHero = Math.floor(Math.random() * (max - min +1)) + min
    document.getElementById('barreD').style.width = ennemy.vie /2+  "px"
    ennemy.vie -= degatHero 
    detailCombat(ennemy, hero)
    info.innerHTML='<p> Vous avez fait ' + degatHero + ' points de dégats </p>'
}

// Fonction de l'attaque Taper avec la force d'un chamalow
// rappratriemet de la fonction detailCombat
 export function tapper(ennemy, hero, min, max) {
    let info = document.getElementById('infoHero');
    let degatHero = Math.floor(Math.random() * (max - min +1)) + min
    document.getElementById('barreD').style.width = ennemy.vie /2+  "px"
    ennemy.vie -= degatHero 
    detailCombat(ennemy, hero)
    info.innerHTML='<p> Vous avez fait ' + degatHero + ' points de dégats </p>'
}

// Fonction de l'attaque du dragon
 function attaqueEnnemy(hero){
    let info = document.getElementById('infoDragon');
    let degatDragon = Math.floor(Math.random() * 15);
    document.getElementById('barreH').style.width = hero.vie +  "px"
    hero.vie -= degatDragon;
    info.innerHTML ='<p> Le dragon vous a fait ' + degatDragon + ' points de dégats </p>'  
  
}

// Remets la vie du héro ou du dragon à 0 si celle-ci est négative
 function vie0(cible){
    if(cible.vie < 0){
        cible.vie = 0;
    }
}

// Si la vie du héro est à 0 fait apparaitre l'écran de fin perdu
function loose(hero){
    if(hero.vie == 0){
        resultat.classList.add("resultat");
        resultat.innerHTML = `
        <div class="infoResultat">
        <p> Tu as perdu :( </p>
        <a href="index.html">Réessayer </a>
        </div>`
    }
}

// Si la vie de l'ennemy est à 0 fait apparaitre l'écran de fin gagné
function win(ennemy){
    if(ennemy.vie == 0){
        resultat.classList.add("resultat");
        resultat.innerHTML = ` 
        <div class="infoResultat">
        <p> Tu as gagné!!! </p>
        <a href="index.html">Réessayer </a>
        </div>
        `
    }
}

// définit les émojies du héro en fonction de sa vie
function sante(hero){
    let sante = document.getElementById('hero');
    if(hero.vie < 80){
        sante.innerHTML='😃';
    }
    if(hero.vie < 60){
        sante.innerHTML='😅';
    }
    if(hero.vie < 40){
        sante.innerHTML='🙄';
    }
    if(hero.vie < 20){
        sante.innerHTML='😫';
    }
    if(hero.vie < 10){
        sante.innerHTML='😰';
    }
}

// regroupes toutes les fonctions répétables pour chaque attaques du héro.
function detailCombat(ennemy, hero){
    attaqueEnnemy(hero);
    sante(hero);
    vie0(hero);
    vie0(ennemy);
    loose(hero);
    win(ennemy)
    document.getElementById('vieDragon').innerHTML=`<p> ${ennemy.vie}</p>`;
    document.getElementById('viePerso').innerHTML=`<p> ${hero.vie}</p>`; 
}