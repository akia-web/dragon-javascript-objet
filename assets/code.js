import Personnage, {poing, pet, pied, tapper} from '../class/Personnage.js'



// Fonction pour récuperer le get
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

// Instancie l'objet personnage du héro
let hero = new Personnage(100, $_GET('nom'));
document.getElementById('nomHero').innerHTML=`<p> ${hero.nom}</p>`;
document.getElementById('viePerso').innerHTML=`<p> ${hero.vie}</p>`;


// Instancie l'objet personnage du dragon
let ennemy = new Personnage(200, 'Super Dragon')
document.getElementById('nomDragon').innerHTML=`<p> ${ennemy.nom}</p>`;
document.getElementById('vieDragon').innerHTML=`<p> ${ennemy.vie}</p>`;


// Attaque Poing dans le pif
document.getElementById('attaque1').onclick = function(){
    poing(ennemy, hero , 5, 10);    
}

// Attaque Poing dans le peter
document.getElementById('attaque2').onclick = function(){
    
    pet(ennemy, hero , 0, 2);
    
}

// Attaque Poing dans le coup de pieds
document.getElementById('attaque3').onclick = function(){
    
    pied(ennemy, hero, 10 , 15);
    
}

// Attaque Poing dans le tapper de toute ses forces
document.getElementById('attaque4').onclick = function(){
    
    tapper(ennemy, hero, 5 , 30);
    
}








