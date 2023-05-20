function handleClick(event) {
    event.target.classList.toggle("clicked");
    
  }


  var L = ["Anneau de Gyges", "Bonheur au travail", "Cours Rousseau", "Critique du travail textes", "Diogene", "Droits de l'homme robespierre et tocqueville doc", "Jaures", "L'experience de Milgram Description de l'experience de base","Le travail est le propre de l'homme", "Marx alienation", "Pierre Clastres", "Telephone portable", "Textes Bakounine Staline", "TEXTES ROUSSEAU", "Textes technique"]
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
