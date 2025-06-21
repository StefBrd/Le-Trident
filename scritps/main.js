
document.querySelector("h1").addEventListener("click", function() {
    window.location.reload();
});

document.getElementById("ImgTitre").addEventListener("click", function() {
    window.location.reload();
});

//changement d'image//
let myImage = document.getElementById("TridentImg");

myImage.addEventListener("click", function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "image/trident logo mini.png") {
        myImage.setAttribute("src", "image/Le trident logo.png");
    } else {
        myImage.setAttribute("src", "image/trident logo mini.png");
    }
});

//Bouton pseudo//
let myButton = document.getElementById("pseudo");
let myHeading = document.querySelector("h3");
function setUserName() {
    let myName = prompt ("Saisis un pseudo : ");
    localStorage.setItem("pseudo", myName);
    myHeading.textContent = "On y va " + myName + " !";
}
if (!localStorage.getItem("pseudo")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("pseudo");
    myHeading.textContent = "On y va " + storedName + " !";
}
myButton.addEventListener("click", function(){
    setUserName();
});

//Bouton Règles//
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".open-modal");
const btnOpenModal2 = document.querySelector("h4");

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
btnOpenModal.addEventListener("click", openModal);
btnOpenModal2.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//Bouton Crédit//
const credits = document.querySelector(".credits");
const btnCloseCredits = document.querySelector(".close-credits");
const btnOpenCredits = document.querySelector(".open-credits");
const btnOpenCredits2 = document.querySelector("h6");

const openCredits = function(){
    credits.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeCredits = function(){
    credits.classList.add("hidden");
    overlay.classList.add("hidden");
};
btnOpenCredits.addEventListener("click", openCredits);
btnOpenCredits2.addEventListener("click", openCredits);
btnCloseCredits.addEventListener("click", closeCredits);
overlay.addEventListener("click", closeCredits);

//Bouton Projet//
const projet = document.querySelector(".projet");
const btnCloseProjet = document.querySelector(".close-projet");
const btnOpenProjet = document.querySelector(".open-projet");
const SwipeRight = document.querySelector(".swipe-right");
let img1 = document.getElementById("Plan1");
let img2 = document.getElementById("Plan2");

const openProjet = function(){
    projet.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeProjet = function(){
    projet.classList.add("hidden");
    overlay.classList.add("hidden");
};

function swiperight(){
    if(getComputedStyle(img1).display != "none"){
        img1.style.display = "none";
        var exp = document.getElementById("exp").textContent = "Schéma complet";
    } else{
        img1.style.display = "block";
        var exp = document.getElementById("exp").textContent = "Schéma de la maquette";
    }
    
    if(getComputedStyle(img2).display != "none"){
        img2.style.display = "none";
    } else{
        img2.style.display = "block";
    }
};

btnOpenProjet.addEventListener("click", openProjet);
btnCloseProjet.addEventListener("click", closeProjet);
overlay.addEventListener("click", closeProjet);

//Commencer//
const commencer = document.querySelector("h5");
let start = document.getElementById("block2");
let startBg = document.getElementById("block0-5");
let commencerBg = document.getElementById("block1");

function togg(){
    if(getComputedStyle(start).display != "none"){
        start.style.display = "none";
    } else{
        start.style.display = "block";
    }
};

function togg2(){
    if(getComputedStyle(startBg).display != "none"){
        startBg.style.display = "none";
    } else{
        startBg.style.display = "flex";
    }
};

function togg3(){
    if(getComputedStyle(commencerBg).display != "none"){
        commencerBg.style.display = "none";
    } else{
        commencerBg.style.display = "block";
    }
};

function T1(){
    var text0 = document.querySelector("h7").textContent = "Ton réveil sonne, il est 8h du matin...";
    var text05 = document.querySelector("h7-1").textContent = "Ton réveil sonne, il est 8h du matin...";
};

//Continuer//
let continuer = document.getElementById("block0");

function choo(){
    if(getComputedStyle(continuer).display != "none"){
        continuer.style.display = "none";
    } else{
        continuer.style.display = "block";
    }
};

//Histoire//
var text1 = document.querySelector("h8");
var text2 = document.querySelector("h9");
var text3 = document.querySelector("h10");
let chooseBg = document.getElementById("block0");

function togg4(){
    if(getComputedStyle(chooseBg).display != "none"){
        chooseBg.style.display = "none";
    } else{
        chooseBg.style.display = "block";
    }
};

function C1(){
    text1.textContent = "Se rendormir";
    text2.textContent = "Regarder par la fenêtre";
    text3.textContent = "Regarder son téléphone";
};



//Choix 1//
function T2_1(){
    var text0 = document.querySelector("h7").textContent = "Tu te replonge dans un sommeil profond...";
    var text05 = document.querySelector("h7-1").textContent = "Tu te replonge dans un sommeil profond...";
};

function B_1(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C2_1();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); T3_1(); B_1_1();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); T3_2(); B_1_2();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); T3_3(); B_1_3();};
};

function C2_1(){
    text1.textContent = "Penser au présent";
    text2.textContent = "Penser au passé.....";
    text3.textContent = "Penser au futur";
};

//Choix 1-1//
function T3_1(){
    var text0 = document.querySelector("h7").textContent = "Ton téléphone sonne et te réveille";
    var text05 = document.querySelector("h7-1").textContent = "Ton téléphone sonne et te réveille";
};

function B_1_1(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C3_1();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); T2_3_3(); B_3_3();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); T2_3_2(); B_3_2();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); T2_3_1(); B_3_1();};
};

function C3_1(){
    text1.textContent = "Décrocher......";
    text2.textContent = "Ignorer et déverouiller";
    text3.textContent = "Ouvrir le message";
};

//Choix 1-2//
function T3_2(){
    var text0 = document.querySelector("h7").textContent = "Tu rêves de l'Olympe grecque";
    var text05 = document.querySelector("h7-1").textContent = "Tu rêves de l'Olympe grecque";
};

function B_1_2(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C3_2();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_2();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_3();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_4();};
};

function C3_2(){
    text1.textContent = "Prier Zeus..........";
    text2.textContent = "Prier Poseidon............";
    text3.textContent = "Prier Athena";
};

function End_1_2(){
    var text0 = document.querySelector("h7").textContent = "Il abat immédiatement sa foudre sur toi et te grille sur place.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock2").style.display = "flex";
};

function End_1_3(){
    var text0 = document.querySelector("h7").textContent = "Il te donne gracieusement son trident, bravo.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphBlock").style.display = "flex";
};

function End_1_4(){
    var text0 = document.querySelector("h7").textContent = "Elle te découpe immédiatement en rondelle.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock3").style.display = "flex";
};

//Choix 1_3//
function T3_3(){
    var text0 = document.querySelector("h7").textContent = "Tu rêves de Jordan Connard, héros de la rébellion";
    var text05 = document.querySelector("h7-1").textContent = "Tu rêves de Jordan Connard, héros de la rébellion";
};

function B_1_3(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C3_3();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_5();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_6();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_7();};
};

function C3_3(){
    text1.textContent = "Prendre les armes";
    text2.textContent = "Ne pas combattre..";
    text3.textContent = "Empoisonner Jordan";
};

function End_1_5(){
    var text0 = document.querySelector("h7").textContent = "Ta motivation t'honore. Mais tu meurres dès le premier lazer.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock4").style.display = "flex";
};

function End_1_6(){
    var text0 = document.querySelector("h7").textContent = "Les robots ne font pas de prisonnier...";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock1").style.display = "flex";
};

function End_1_7(){
    var text0 = document.querySelector("h7").textContent = "Une autopsie a lieu, tu est désigné coupable. La rebellion te livre au robots.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock6").style.display = "flex";
};



//Choix 2//
function T2_2(){
    var text0 = document.querySelector("h7").textContent = "Le ciel est bleu et nuageux, quelle belle journée...";
    var text05 = document.querySelector("h7-1").textContent = "Le ciel est bleu et nuageux, quelle belle journée...";
};

function B_2(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C2_2();};
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); T2_2_1(); B_2_1();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); T2_2_2(); B_2_2();};
};

function C2_2(){
    text1.textContent = "Sortir vite du lit";
    text2.textContent = "Regarder les gens...";
    text3.textContent = "Regarder son téléphone";
};

//Choix 2_1//
function T2_2_1(){
    var text0 = document.querySelector("h7").textContent = "Tu te dirige directement dans ta cuisine";
    var text05 = document.querySelector("h7-1").textContent = "Tu te dirige directement dans ta cuisine";
};

function B_2_1(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C4_1();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_8();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_9();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_10();};
};

function C4_1(){
    text1.textContent = "Faire le petit-dej'";
    text2.textContent = "Vider la poubelle....";
    text3.textContent = "Faire la vaisselle";
};

function End_1_8(){
    var text0 = document.querySelector("h7").textContent = "Y'a rien dans le frigo, tu meurs de faim.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock5").style.display = "flex";
};

function End_1_9(){
    var text0 = document.querySelector("h7").textContent = "L'odeur de ta poubelle en retard t'asphyxie.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock7").style.display = "flex";
};

function End_1_10(){
    var text0 = document.querySelector("h7").textContent = "Le liquide vaisselle pénètre tes poumons et te tue.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock8").style.display = "flex";
};

//Choix 2_2//
function T2_2_2(){
    var text0 = document.querySelector("h7").textContent = "Tu apperçois un vieux qui te regarde depuis un moment";
    var text05 = document.querySelector("h7-1").textContent = "Tu apperçois un vieux qui te regarde depuis un moment";
};

function B_2_2(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C4_2();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_11();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_12();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_13();};
};

function C4_2(){
    text1.textContent = "Ignorer le vieux";
    text2.textContent = "Partir, il fait trop peur";
    text3.textContent = "Le fixer encore plus";
};

function End_1_11(){
    var text0 = document.querySelector("h7").textContent = "Pendant que tu regardes ailleur, il marmone et te tue mystérieusement.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock9").style.display = "flex";
};

function End_1_12(){
    var text0 = document.querySelector("h7").textContent = "Tu te retourne. Le vieux se trouve en face de toi et te tue.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock10").style.display = "flex";
};

function End_1_13(){
    var text0 = document.querySelector("h7").textContent = "Malheureusement il gagne la bagarre de regard. La honte te fait succomber.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock11").style.display = "flex";
};

//Choix 2_3//
    //->Choix 3//


//Choix 3//
function T2_3(){
    var text0 = document.querySelector("h7").textContent = "Vous avez (1) nouveau message de : Boss";
    var text05 = document.querySelector("h7-1").textContent = "Vous avez (1) nouveau message de : Boss";
};

function B_3(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C2_3();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); T2_3_1(); B_3_1();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); T2_3_2(); B_3_2();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); T2_3_3(); B_3_3();};
};

function C2_3(){
    text1.textContent = "Ouvrir le message";
    text2.textContent = "Ignorer le message";
    text3.textContent = "Appeller le Boss";
};

//Choix 3_1//
function T2_3_1(){
    var text0 = document.querySelector("h7").textContent = "Message : 'Tu est viré. Bise, Fabrice'";
    var text05 = document.querySelector("h7-1").textContent = "Message : 'Tu est viré. Bise, Fabrice'";
};

function B_3_1(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C5_1();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_14();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_15();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_16();};
};

function C5_1(){
    text1.textContent = "Répondre : 'm'enfou'";
    text2.textContent = "Répondre : 'Pitié...'";
    text3.textContent = "Répondre : 'J'arrive'";
};

function End_1_14(){
    var text0 = document.querySelector("h7").textContent = "T'as énervé le Boss. Il vient chez toi et te casse la gueule.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock12").style.display = "flex";
};

function End_1_15(){
    var text0 = document.querySelector("h7").textContent = "Nouveau message : 'Rééssaie et trouve moi le Trident'.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Rééssayer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock13").style.display = "flex";
};

function End_1_16(){
    var text0 = document.querySelector("h7").textContent = "Vous arrivez devant votre bureau mais le Boss vous casse la gueule.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock14").style.display = "flex";
};

//Choix 3_2//
function T2_3_2(){
    var text0 = document.querySelector("h7").textContent = "Pour deverouiller votre téléphone, il vous faut votre code";
    var text05 = document.querySelector("h7-1").textContent = "Pour deverouiller votre téléphone, il vous faut votre code";
};

function B_3_2(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C5_2();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_17();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_18();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_19();};
};

function C5_2(){
    text1.textContent = "0847 [Entrer]";
    text2.textContent = "Balancer le téléphone !";
    text3.textContent = "8302 [Entrer]";
};

function End_1_17(){
    var text0 = document.querySelector("h7").textContent = "Ça fonctionne ! Mais ton portable est piégé et explose.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock15").style.display = "flex";
};

function End_1_18(){
    var text0 = document.querySelector("h7").textContent = "Il rebomdit sur le canapé et te revient en pleine figure pour t'assomer.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock16").style.display = "flex";
};

function End_1_19(){
    var text0 = document.querySelector("h7").textContent = "Ça marche pas. Le téléphone active son auto-défense et télectrocute.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock17").style.display = "flex";
};

//Choix 3_3//
function T2_3_3(){
    var text0 = document.querySelector("h7").textContent = "'Allo ?! Ca y est tu l'a chopé ?!'";
    var text05 = document.querySelector("h7-1").textContent = "'Allo ?! Ca y est tu l'a chopé ?!'";
};

function B_3_3(){
    document.getElementById("B-0").onclick = function onclick(event) {choo(); togg2(); C5_3();}
    document.querySelector("h8").onclick = function onclick(event) {togg2(); togg4(); End_1_20();};
    document.querySelector("h9").onclick = function onclick(event) {togg2(); togg4(); End_1_21();};
    document.querySelector("h10").onclick = function onclick(event) {togg2(); togg4(); End_1_22();};
};

function C5_3(){
    text1.textContent = "'Ouais trop simple'";
    text2.textContent = "'Je comprends pas'";
    text3.textContent = "'C'est dimanche patron'";
};

function End_1_20(){
    var text0 = document.querySelector("h7").textContent = "Ton mensonge passe pas. Tu es pétrifié de honte et meurs sur place.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Terminer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock18").style.display = "flex";
};

function End_1_21(){
    var text0 = document.querySelector("h7").textContent = "Le Boss t'ordonnes de recommencer et de chercher le Trident.";
    document.getElementById("B-0").onclick = function onclick(event) {window.location.reload();};
    document.getElementById("B-0").innerHTML = "Recommencer";
    document.getElementById("B-0").style.backgroundColor = "#FF5733";
    document.getElementById("GiphlooseBlock13").style.display = "flex";
};

function End_1_22(){
    var text0 = document.querySelector("h7").textContent = "Le Boss s'excuse. Vous retournez vous coucher.";
    document.getElementById("B-0").onclick = function onclick(event) {togg4(); T2_1(); B_1();};
};