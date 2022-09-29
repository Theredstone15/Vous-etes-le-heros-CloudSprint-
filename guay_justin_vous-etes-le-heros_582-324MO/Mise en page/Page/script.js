let chaptersObj = {
    Matin: {
        subtitle: "Matin",
        text: "L’année est 2314 et vous êtes livreur pour la compagnie CloudSprint, une compagnie de livraison un peu louche qui ne vous a jamais inspiré confiance. C’est un des derniers emplois qui n’ont pas encore été remplacés par des robots. Vous n’aviez pas vraiment le choix. La règle numéro un chez CloudSprint est: Ne jamais demander ce qu’il y a dans la boîte. Il est présentement 6:30 AM et vous devriez partir travailler, mais vous pouvez probablement dormir juste un peu plus. Que faites-vous?",
        img:"../Assets/Images/CyberpunkRoom.jpg",
        options: [
        travailler = {
            text: "Partir travailler",
            action: "goToChapter('Boite')"
        }, 
        dormir = {
            text: "Continuer à dormir",
            action: "goToChapter('M_Retard')"
        }]
    },
    Boite: {
        subtitle: "La boîte",
        text: "Vous vous préparez et vous partez travailler. Arrivé à l’entrepôt un de vos collègues vous donne le premier colis du jour et vous partez. 5 minutes plus tard, vous semblez entendre un son régulier tel que le son d’une horloge venant du colis. Vous pouvez jeter le colis par la fenêtre ou ignorer le son et continuer. Que faites-vous?",
        img:"../Assets/Images/Cargo.jpg",
        options: [
            Jeter = {
                text: "Jeter le colis",
                action: "goToChapter('M_Brise')"
            }, 
            Ignorer = {
                text: "Ignorer le son",
                action:"goToChapter('Devant_club')"
            }]        
    },
    Devant_club: {
        subtitle: "Devant le club",
        text: "Vous continuez votre chemin et vous arrivez à destination qui semble être à l’intérieur d’un club privé. Il semble avoir une personne louche qui attend dans une allée juste à côté du club. Vous pouvez aller voir à l’entrée principale ou vous pouvez aller voir la personne louche. Que faites vous?",
        img:"../Assets/Images/Nightclub.jpg",
        options: [
            Entree = {
                text: "Aller voir l'entrée",
                action: "goToChapter('Garde')"
            }, 
            Allee = {
                text: "Aller dans l'allée",
                action:"goToChapter('Allee')"
            }]
    },
    Garde: {
        subtitle: "Le garde",
        text: ": Un garde se trouve devant la porte. Vous lui dites que vous avez un colis à livrer à cette adresse, mais on ne vous laisse pas entrer parce que vous n’avez pas de billet. Vous vous éloignez du bâtiment et vous regardez aux alentours. Vous pouvez tenter de menacer le garde ou vous pouvez aller voir la personne louche sur le côté du bâtiment.",
        img:"",
        options: [
            Menacer = {
                text: "Menacer le garde",
                action: "goToChapter('M_Garde')"
            }, 
            Allee = {
                text: "Aller voir l'allée",
                action:"goToChapter('Allee')"
            }]
    },
    Allee: {
        subtitle: "L'homme louche",
        text: "La personne louche vous demande ce que vous faites ici, vous lui dites que vous êtes un livreur pour CloudSprint. Il vous donne un billet pour le club et disparaît dans l’ombre. [Vous obtenez un billet]",
        img:"",
        options: [
            travailler = {
                text: "Retourner devant le club",
                action: "goToChapter('Devant_club_2')"
            }]
    },  
    Allee_vide: {
        subtitle: "Plus personne ici",
        text: "La personne louche semble avoir disparue",
        img:"",
        options: [
            travailler = {
                text: "Retourner devant le club",
                action: "goToChapter('Devant_club_2')"
            }, 
        ]
        
    },
    Devant_club_2: {
        subtitle: "De retour devant le club",
        text: "Vous retournez devant le club. Vous pouvez retourner voir l’allée ou vous pouvez vous diriger vers l’entrée.",
        img:"",
        options: [
            Entrer = {
                text: "Entrer dans le club",
                action: "goToChapter('Club_interieur')"
            }, 
            Allee = {
                text: "Retourner voir l'allée",
                action:"goToChapter('Allee')"
            }]
    },
    Club_interieur: {
        subtitle: "Le club",
        text: "Vous montrez votre billet au garde et il vous laisse entrer. Vous êtes à l'intérieur du club. Il y a de la musique qui joue à tue tête, et des lumières de toutes le couleurs. Vous pouvez aller au salon VIP pour terminer votre livraison, ou vous pouvez aller prendre un verre. Que faites vous?",
        img:"",
        options: [
            Boire = {
                text: "Boire un verre",
                action: "goToChapter('M_Bataille')"
            }, 
            Livrer = {
                text: "Aller au salon VIP",
                action:"goToChapter('Livraison_complete')"
            }]
    },
    Livraison_complete: {
        subtitle: "Livraison complétée",
        text: "Vous allez au salon VIP voir le propriétaire et vous livrez la boîte sans encombre. Vous avez encore le temps de faire une autre livraison. Vous pourriez aussi retournez chez vous pour vous reposer. Que faites vous?",
        img:"",
        options: [
            AutreLivraison = {
                text: "Deuxième livraison",
                action: "goToChapter('Continuer_1')"
            }, 
            Maison = {
                text: "Aller à la maison",
                action:"goToChapter('Choix_chemin')"
            }]
    },
    Continuer_1: {
        subtitle: "On continue!",
        text: "Vous décidez de faire une livraison de plus, ce qui vous permet d'avoir un 20$ en bonus! [obtenu 20$] Vous allez vous coucher par la suite.",
        img:"",
        options: [
            Lendemain = {
                text: "Dormir",
                action: "goToChapter('Choix_chemin')"
            }]
    },
    Choix_chemin: {
        subtitle: "On gagne du temps?",
        text: "C'est le deuxième jour. Vous venez de passer à l'entrepôt pour récupérer votre colis à livrer. Deux chemins s'offrent à vous. Il y a un raccourci qui semble un peu dangereux ou bien un chemin entièrement sécuritaire, mais plus long. Que faites vous?",
        img:"",
        options: [
            ChemNormal = {
                text: "Prendre le chemin normal",
                action: "goToChapter('Chemin_normal')"
            }, 
            Raccourci = {
                text: "Prendre un raccourci",
                action:"goToChapter('M_Explosion')"
            }]
    },
    Chemin_normal: {
        subtitle: "Lent et constant",
        text: "Vous prenez le chemin normal et arrivez à destination à temps.",
        img:"",
        options: [
            Continuer = {
                text: "Magnifique",
                action: "goToChapter('Kiosque_gateau')"
            }, ]
    },
    Kiosque_gateau: {
        subtitle: "Friandise",
        text: "Vous voyez un kiosque de pâtisseries juste à côté. Vous pourriez vous acheter un gâteau, histoire d'avoir un peu plus d'énergie. Les gâteaux coûtent 20$. En achetez vous un?",
        img:"",
        options: [
            Gateau = {
                text: "Acheter un gâteau (-20$)",
                action: "goToChapter('Gateau')"
            }, 
            PasGateau = {
                text: "Ne rien acheter",
                action:"goToChapter('M_Energie')"
            }]
    },
    Gateau: {
        subtitle: "Miam",
        text: "Vous mangez le gâteau. Vous vous sentez beaucoup plus en forme",
        img:"",
        options: [
            Next = {
                text: "Continuons",
                action: "goToChapter('Choix_chemin_2')"
            }, ]
    },
    Choix_chemin_2: {
        subtitle: "Wow!",
        text: "Vous avez beaucoup d'énergie à revendre. Voulez vous retournez chez vous et vaquer à vos occupations ou faire une autre livraison?",
        img:"",
        options: [
            Maison = {
                text: "Retourner chez vous",
                action: "goToChapter('Bad_end')"
            }, 
            Livraison_2 = {
                text: "Une autre livraison",
                action:"goToChapter('Victoire')"
            }]
    },
    Victoire: {
        subtitle: "Victoire!",
        text: "Félicitations! Il se trouve que le propriétaire de la compagnie cherchait un successeur et il a décidé de choisir la première personne qu'il voyait, c'est à dire vous! Plus jamais de problèmes finaciers maintenant!",
        img:"../Assets/Images/Ceo.jpg",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    M_Retard: {
        subtitle: "Retard",
        text: "Vous avec dormi deux heures de plus et vous avez été renvoyé. Vous n’avez plus de revenu et vous mourrez quelques jours plus tard.",
        img:"",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    M_Brise: {
        subtitle: "Viré",
        text: "La boite contenait simplement une horloge. Vous avez été renvoyé pour destruction d’un colis. Vous n’avez plus de revenu et vous mourrez quelques jours plus tard.",
        img:"../Assets/Images/Clock.jpg",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    M_Garde: {
        subtitle: "Mort",
        text: "Vous menacez le garde de se plaindre à son patron. Il sort une arme et vous tire droit dans la tête.",
        img:"",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    M_Bataille: {
        subtitle: "Mort",
        text: "Un verre est devenu deux verres et trois et quatre... Vous avez fait éclater une bataille et disons juste que vous n'êtes pas fait pour ce genre d'action. Vous êtes mort en vous battant.",
        img:"",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    M_Explosion: {
        subtitle: "La vitesse tue",
        text: "La boîte explose violemment, vous tuant instantanément. Vous ne pensiez pas que le contenu pouvait être de la nitroglycérine?",
        img:"../Assets/Images/Explosion.jpg",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    M_Energie: {
        subtitle: "Grosse journée",
        text: "Vous n'avez pas mangé de gâteau et vous en auriez vraiment eu besoin, car vous vous êtez évanoui au volant à cause d'un manque d'énergie. Vous vous êtes écrasé et mourrez quelques secondes plus tard",
        img:"",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    },
    Bad_end: {
        subtitle: "Employé un jour, employé toujours",
        text: "La journée se termine sans encombre, mais votre vie s'annonce des plus ennuyantes. Vous restez livreur pour le restant de vos jours.",
        img:"",
        options: [
            Mort = {
                text: "Retour au début",
                action: "goToChapter('Matin')"
            }]
    }
}

function gotochapter(chapterName){

    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);

}

