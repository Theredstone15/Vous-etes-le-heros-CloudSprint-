let chaptersObj = {
    Matin: {
        subtitle: "Matin",
        text: "Vous êtes livreur pour la compagnie CloudSprint, une compagnie de livraison un peu louche qui ne vous a jamais inspiré confiance. Il est présentement 6:30 AM et vous devriez partir travailler, mais vous pouvez probablement dormir juste un peu plus. Que faites-vous?",
        img:"/Assets/Images/CyberpunkRoom.jpg",
        options: [
        {
            text: "Partir travailler",
            action: "goToChapter('Boite')"
        }, 
        {
            text: "Continuer a dormir",
            action: "goToChapter('M_Retard')"
        }]
    },
    Boite: {
        subtitle: "La boîte",
        text: "Arrivé à l’entrepôt, un de vos collègues vous donne le premier colis du jour et vous partez. 5 minutes plus tard, vous semblez entendre un son régulier tel que le son d’une horloge venant du colis. Que faites-vous avec la boîte?",
        img:"/Assets/Images/Cargo.jpg",
        options: [
            {
                text: "Jeter le colis",
                action: "goToChapter('M_Brise')"
            }, 
            {
                text: "Ignorer le son",
                action:"goToChapter('Devant_club')"
            }]        
    },
    Devant_club: {
        subtitle: "Devant le club",
        text: "Vous arrivez à destination, qui semble être à l’intérieur d’un club privé. Il semble avoir une personne louche qui attend dans une allée juste à côté du club. Vous pouvez aller le voir, ou aller directement au club. Que faites vous?",
        img:"/Assets/Images/Nightclub.jpg",
        options: [
            {
                text: "Aller voir l'entree",
                action: "goToChapter('Garde')"
            }, 
            {
                text: "Aller dans l'allee",
                action:"goToChapter('Allee')"
            }]
    },
    Garde: {
        subtitle: "Le garde",
        text: "Un garde se trouve devant la porte. Vous lui dites que vous avez un colis à livrer à cette adresse, mais on ne vous laisse pas entrer parce que vous n’avez pas de billet. Vous vous éloignez du bâtiment et vous regardez aux alentours. Vous pouvez tenter de menacer le garde ou vous pouvez aller voir la personne louche sur le côté du bâtiment.",
        img:"/Assets/Images/Garde.jpg",
        options: [
            {
                text: "Menacer le garde",
                action: "goToChapter('M_Garde')"
            }, 
            {
                text: "Aller voir l'allee",
                action:"goToChapter('Allee')"
            }]
    },
    Allee: {
        subtitle: "L'homme louche",
        text: "La personne louche vous demande ce que vous faites ici, vous lui dites que vous êtes un livreur pour CloudSprint. Il vous donne un billet pour le club et disparaît dans l’ombre. [Vous obtenez un billet]",
        img:"/Assets/Images/Alley.jpg",
        options: [
            {
                text: "Retourner devant le club",
                action: "goToChapter('Devant_club_2')"
            }]
    },  
    Allee_vide: {
        subtitle: "Plus personne ici",
        text: "La personne louche semble avoir disparue",
        img:"../Assets/Images/Alley.jpg",
        options: [
            {
                text: "Retourner devant le club",
                action: "goToChapter('Devant_club_2')"
            }, 
        ]
        
    },
    Devant_club_2: {
        subtitle: "De retour devant le club",
        text: "Vous retournez devant le club. Vous pouvez retourner voir l’allée ou vous pouvez vous diriger vers l’entrée.",
        img:"../Assets/Images/Nightclub.jpg",
        options: [
            {
                text: "Entrer dans le club",
                action: "goToChapter('Club_interieur')"
            }, 
            {
                text: "Retourner voir l'allee",
                action:"goToChapter('Allee_vide')"
            }]
    },
    Club_interieur: {
        subtitle: "Le club",
        text: "Vous montrez votre billet au garde et il vous laisse entrer. Vous êtes à l'intérieur du club. Il y a de la musique qui joue à tue tête, et des lumières de toutes le couleurs. Vous pouvez aller au salon VIP pour terminer votre livraison, ou vous pouvez aller prendre un verre. Que faites vous?",
        img:"../Assets/Images/InsideNightclub.png",
        options: [
            {
                text: "Boire un verre",
                action: "goToChapter('M_Bataille')"
            }, 
            {
                text: "Aller au salon VIP",
                action:"goToChapter('Livraison_complete')"
            }]
    },
    Livraison_complete: {
        subtitle: "Livraison complétée",
        text: "Vous allez au salon VIP voir le propriétaire et vous livrez la boîte sans encombre. Vous avez encore le temps de faire une autre livraison. Vous pourriez aussi retournez chez vous pour vous reposer. Que faites vous?",
        img:"../Assets/Images/Penthouse.jpg",
        options: [
            {
                text: "Deuxieme livraison",
                action: "goToChapter('Continuer_1')"
            }, 
            {
                text: "Aller a la maison",
                action:"goToChapter('Choix_chemin')"
            }]
    },
    Continuer_1: {
        subtitle: "On continue!",
        text: "Vous décidez de faire une livraison de plus, ce qui vous permet d'avoir un 20$ en bonus! [obtenu 20$] Vous allez vous coucher par la suite.",
        img:"../Assets/Images/Money.jpg",
        options: [
            {
                text: "Dormir",
                action: "cash()"
            }]
    },
    Choix_chemin: {
        subtitle: "On gagne du temps?",
        text: "C'est le deuxième jour. Vous venez de passer à l'entrepôt pour récupérer votre colis à livrer. Deux chemins s'offrent à vous. Il y a un raccourci qui semble un peu dangereux ou bien un chemin entièrement sécuritaire, mais plus long. Que faites vous?",
        video:"../Assets/Videos/Cyberpunk.mp4",
        options: [
            {
                text: "Prendre le chemin normal",
                action: "goToChapter('Chemin_normal')"
            }, 
            {
                text: "Prendre un raccourci",
                action:"goToChapter('M_Explosion')"
            }]
    },
    Chemin_normal: {
        subtitle: "Lent et constant",
        text: "Vous prenez le chemin normal et arrivez à destination à temps.",
        img:"../Assets/Images/Truck.jpg",
        options: [
            {
                text: "Magnifique",
                action: "goToChapter('Kiosque_gateau')"
            }, ]
    },
    Kiosque_gateau: {
        subtitle: "Friandise",
        text: "Vous voyez un kiosque de pâtisseries juste à côté. Vous pourriez vous acheter un gâteau, histoire d'avoir un peu plus d'énergie. Les gâteaux coûtent 20$. En achetez vous un?",
        img:"../Assets/Images/Shop.jpg",
        options: [
            {
                text: "Acheter un gateau (-20$)",
                action: "moneyCheck()"
            }, 
            {
                text: "Ne rien acheter",
                action:"goToChapter('M_Energie')"
            }]
    },
    Gateau: {
        subtitle: "Miam",
        text: "Vous mangez le gâteau. Vous vous sentez beaucoup plus en forme",
        img:"../Assets/Images/Cake.jpg",
        options: [
            {
                text: "Continuons",
                action: "goToChapter('Choix_chemin_2')"
            }, ]
    },
    Choix_chemin_2: {
        subtitle: "Wow!",
        text: "Vous avez beaucoup d'énergie à revendre. Voulez vous retournez chez vous et vaquer à vos occupations ou faire une autre livraison?",
        img:"../Assets/Images/Character.png",
        options: [
            {
                text: "Retourner chez vous",
                action: "goToChapter('Bad_end')"
            }, 
            {
                text: "Une autre livraison",
                action:"goToChapter('Victoire')"
            }]
    },
    Victoire: {
        subtitle: "Victoire!",
        text: "Félicitations! Il se trouve que le propriétaire de la compagnie cherchait un successeur et il a décidé de choisir la première personne qu'il voyait, c'est à dire vous! Plus jamais de problèmes finaciers maintenant!",
        img:"../Assets/Images/Ceo.jpg",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Retard: {
        subtitle: "Retard",
        text: "Vous avec dormi deux heures de plus et vous avez été renvoyé. Vous n’avez plus de revenu et vous mourrez quelques jours plus tard.",
        img:"../Assets/Images/Sleep.jpg",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Brise: {
        subtitle: "Viré",
        text: "La boite contenait simplement une horloge. Vous avez été renvoyé pour destruction d’un colis. Vous n’avez plus de revenu et vous mourrez quelques jours plus tard.",
        img:"../Assets/Images/Clock.jpg",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Garde: {
        subtitle: "Mort",
        text: "Vous menacez le garde de se plaindre à son patron. Il sort une arme et vous tire droit dans la tête.",
        img:"../Assets/Images/Mob.jpg",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Bataille: {
        subtitle: "Mort",
        text: "Un verre est devenu deux verres et trois et quatre... Vous avez fait éclater une bataille et disons juste que vous n'êtes pas fait pour ce genre d'action. Vous êtes mort en vous battant.",
        img:"../Assets/Images/Fainted.png",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Explosion: {
        subtitle: "La vitesse tue",
        text: "La boîte explose violemment, vous tuant instantanément. Vous ne pensiez pas que le contenu pouvait être de la nitroglycérine?",
        img:"../Assets/Images/Explosion.jpg",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Energie: {
        subtitle: "Grosse journée",
        text: "Vous n'avez pas mangé de gâteau et vous en auriez vraiment eu besoin, car vous vous êtez évanoui au volant à cause d'un manque d'énergie. Vous vous êtes écrasé et mourrez quelques secondes plus tard",
        img:"../Assets/Images/Fainted.png",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    M_Energie2: {
        subtitle: "Pas d'argent, pas d'achat",
        text: "Vous n'aviez pas assez d'argent pour manger du gâteau et vous en auriez vraiment eu besoin, car vous vous êtez évanoui au volant à cause d'un manque d'énergie. Vous vous êtes écrasé et mourrez quelques secondes plus tard",
        img:"../Assets/Images/Fainted.png",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    },
    Bad_end: {
        subtitle: "Employé un jour, employé toujours",
        text: "La journée se termine sans encombre, mais votre vie s'annonce des plus ennuyantes. Vous restez livreur pour le restant de vos jours.",
        img:"../Assets/Images/Delivery.jpg",
        options: [
            {
                text: "Retour au debut",
                action: "goToChapter('Matin')"
            }]
    }
};

(function(){
    
    /*
    if(localStorage.getItem("chapitre")){

        var startup = localStorage.getItem("chapitre");
        goToChapter(startup);

    } else {

        goToChapter("Matin");

    }
    */

    goToChapter("Matin");

})();

let money = false;

function goToChapter(chapterName){
    /*
    localStorage.setItem("chapitre", chaptersObj[chapterName]);
    var check = localStorage.getItem("chapitre");
    console.log(check);
    */
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    console.log(chaptersObj[chapterName]["img"]);
    console.log(chaptersObj[chapterName]["video"]);
    document.querySelector(".Contenu").innerHTML = (chaptersObj[chapterName]["subtitle"]);
    document.querySelector(".resume").innerHTML = (chaptersObj[chapterName]["text"]);
    document.querySelector(".Boutons").innerHTML = "";
    document.querySelector(".ConteneurImage").innerHTML =`<img src="${chaptersObj[chapterName]["img"]}" class="Image">`;

    let son = document.querySelector(".sound");

    if(son.checked){
        const boutonSon = new Audio("../Assets/Sons/Button.mp3");
        boutonSon.play();
    }

    if(chaptersObj[chapterName]["video"]){

        document.querySelector(".ConteneurImage").innerHTML = `<video src="${chaptersObj[chapterName]["video"]}" class="Image" autoplay loop muted></video>`

    } else {

        document.querySelector(".ConteneurImage").innerHTML = `<img src="${chaptersObj[chapterName]["img"]}" class="Image" >`

    }
    

    for(i in chaptersObj[chapterName].options){
        const btn = document.createElement("button");
        btn.setAttribute("class", "bouton");
        btn.setAttribute("onclick", chaptersObj[chapterName].options[i].action);
        const node = document.createTextNode(chaptersObj[chapterName].options[i].text);
        btn.appendChild(node);
        const parent = document.querySelector(".Boutons");
        parent.appendChild(btn);
    }
};

function cash(){
    money = true;
    goToChapter("Choix_chemin");
}

function moneyCheck(){
    if (money){
        goToChapter("Choix_chemin_2");
    } else {
        goToChapter("M_Energie2");
    }
}

