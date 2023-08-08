//let nom; //declaration de la variable
/*let prenom, age;
 // affectation de variable
let nomEtudiant="Valentin";
const nombreDeVie= 100;
console.log(nom,nomEtudiant,nombreDeVie);
nom= prompt("Quel est votre nom?");
prenom= prompt("Quel est votre prenom?");
age= prompt("Quel est votre age?");
alert("Mineur");
console.log("Bienvenu" + nom, prenom, age); */
/* let nombre;
nombre= Number(prompt("entre un nombre")

console.log(typeof nombre);
if(nombre<0)
{
    console.log("Ce nombre est negatif")
}
else if(nombre>0){
    console.log("Ce nombre est positif")
}
else{
    console.log("Ce nombre est nulle")
} */

/* let sexe= prompt("Quelle est ton sexe? F pour feminin , M pour masculin");
let fesse= prompt("Est ce que tu as fesse ?, O pour oui et N pour non")
if(sexe=="F" && fesse=="O"){
    console.log("Ton avenir est deja.....");
}
else{
    console.log("Travaille dur");
} */

/* let lundi = "Kodjo", mardi="Ablam", mercredi="Kokou", jeudi="yao";
let vendredi="Koffi", samedi="Komi", dimanche="Koffi";
let nom;
nom=prompt("Entrer votre nom");
switch (nom) {
    case "Kodjo":
        console.log("Tu es nee lundi ");
        break;
    case "Ablam":
        console.log("Tu es nee un mardi");
        break;
    case "Kokou":
        console.log("Tu es nee un mercredi");
        break;
    case "yao":
        console.log("Tu es nee un jeudi");
        break;
    case "Koffi":
        console.log("Tu es nee un Vendredi");
        break;
    default:
        console.log("Tu es nee un weekend")
        break;
} */

//boucle while&for
/* let specialite=prompt("Quelle specialité faite vous ");
let i=1;
while (specialite!= "IT" ) {
    console.log("T");
    i++;  
} */

/* let compteur=0;
for (compteur; compteur < 5 ; compteur++) {
   console.log(`tour ${compteur}`);
    
} */
/* 
let math=0 , physique=0 , hG=0 , svt=0;
let note, moyenne;
for (let index = 0; index < 4; index++) {
    note=Number(prompt("Entrer vos note dans ce ordre Math - Physique - Histoire Geo - SVT "));
    if (index==0) {
        math= note;
        console.log("Vous avez deja rentrer la note de math");
    }
    else if (index==1){
        physique=note;
        console.log("Vous avez deja rentrer la note de physique");
    }
    else if(index==2){
        hG=note;
        console.log("Vous avez deja rentrer la note de HG");
    }
    else if(index==3){
        svt=note;
        console.log("Vous avez deja rentrer la note de SVT");
    }
}
moyenne= ( math + physique + hG + svt )/4;
console.log("Votre moyenne est " + moyenne);
if (moyenne<10) {
    console.log("Desolé vous ferais mieux l'année prochaine");
}
else if(moyenne>10){
    console.log("Bravo");
}
else{
    console.log("Juste ce qu'il faut pour ne pas mourir , Bravo quand meme")
} */
/* 
let jour = prompt("Entrer le jour");  */
/* let test=1;
console.log(`${1}`); */

/* let jour= prompt("Entrer le jour d'aujourd'hui")
switch (jour) {
    case "Dimanche":
        console.log("lundi");
        break;
    case "Lundi":
        console.log("mardi");
        break;
    case "Mardi":
        console.log("mercredi");
        break;
    case "Mercredi":
        console.log("jeudi");
        break;
    case "Jeudi":
        console.log("Vendredi");
        break;
    case "Vendredi":
        console.log("Samedi");
        break;
     case "Samedi":
        console.log("Dimanche");
        break;
    default:
        break;
} */

let heure=Number(prompt("Entrer l'heure qu'il est "));
let minuite=Number(prompt("Entrer la minuite"));
let Seconde=Number(prompt("Entrer la seconde qu'il est"));
if (Seconde>=0 && Seconde<59) {
    Seconde=Seconde+1;
    
}
if (Seconde==59) {
    minuite=minuite + 1;
    Seconde=0;
}
if(minuite==59 || minuite==60){
    if (minuite==59 && Seconde==59) {
        heure = heure + 1;
        minuite=0;
        Seconde=0;
    }
    if(minuite==60 ){
        heure=heure + 1;
        minuite=0;
        Seconde=0;
        
    }
}
if(heure==24){
    heure=0;
}

console.log(heure + "h ", minuite + "Min", Seconde + "s")