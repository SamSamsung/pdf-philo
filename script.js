function handleClick(event) {
    event.target.classList.toggle("clicked");
    
  }


  var L = [
           "Affaire Caillaux",
           "Althusser",
           "Anneau de Gyges", 
           "Article la loi du Kanun",
           "Articles Vendetta",
           "Axel Kahn",
           "Beigbeder",
           "Bernays texte",
           "Bonheur au travail", 
           "Coca pepsi doc eleves",
           "Cours Rousseau",
           "criminalite et determinisme",
           "Critique du travail textes", 
           "Diogene", 
           "Documents scannes",
           "Dossier de textes Don Juan",
           "Droits de l'homme robespierre et tocqueville doc", 
           "Experience de Libet",
           "garcon de cafe",
           "Jaures", 
           "Kant Prince",
           "L'experience de Milgram Description de l'experience de base", 
           "Le cas Eichmann Arendt et la banalite du mal", 
           "Le desir du desir de l'autre Texte",
           "Le travail est le propre de l'homme", 
           "Les fusilles pour l'exemple",
           "Marx alienation",
           "Montesquieu",
           "Mythe d'Aristphane",
           "Pierre Clastres", 
           "Sarkozy Onfray",
           "Second Discours", 
           "Singer texte", 
           "Telephone portable", 
           "Texte Callicles Socrate",
           "Texte le divertissement",
           "Texte Rousseau",
           "Textes Bakounine Staline", 
           "TEXTES ROUSSEAU", 
           "Textes technique"
          ]
  window.addEventListener('load', (event) => {
    titles = document.getElementsByClassName("title");
    for(i=0; i< L.length; i++){
        var p = document.createElement("p")
        p.classList.add("title")
        p.innerText = L[i]
        
        var a = document.createElement("a")
        a.href = L[i].split("'").join(" ").split(" ").join("-") + ".pdf"
        
        var element = document.createElement("div")
        element.classList.add("box");
        element.onclick = handleClick
        document.getElementsByClassName("contain")[0].appendChild(a)
        a.appendChild(element)
        element.appendChild(p)
        /*titles[i].innerText = L[i].replace(" ", "-") + ".pdf"*/
    }
  });
