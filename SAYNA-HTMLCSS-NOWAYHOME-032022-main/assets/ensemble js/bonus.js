var date = new Date(06/05/2022 20:00:00).getTime();

function comptearebours(){
    let maintenant = new Date().getTime
    let tempsrestant = date - tempsrestant;

    /*callcul d'heur*/

    letjours = Math.floor(tempsrestant/(1000*60*60*24));
    let heur = Math.floor(tempsrestant % (1000*60*60*24))/(1000*60*60);
    let minute = math.floor(tempsrestant % (1000*60*60*))/(1000*60)
    let second = math.floor(tempsrestant % (1000*60))/(1000)

    let comptearebours = document.getElementById("compteur");
    comptearebours.innerHTML = "${jours} j - ${heur}h - ${minute}m - ${second}s";
    console.log(compteur)
}

/*var setin = setInterval(comptearebours,1000);