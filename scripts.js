function openNav() {
    document.getElementById("myFilterbutton").style.width = "250px";
   
  }
  
  function closeNav() {
    document.getElementById("myFilterbutton").style.width = "0";
    document.body.style.backgroundColor = "white";

    
  }

  var button_showAantal = document.querySelector("#filterbutton1");
  console.log(button_showAantal)
  var fieldset_aantal = document.querySelector("#filter_aantal")
  
  
  var button_showBewerking = document.querySelector("#filterbutton2");
  var fieldset_bewerking = document.querySelector("#filter_bewerking")
  console.log(button_showBewerking)
  console.log(fieldset_bewerking)
  
  var button_showKwaliteitl = document.querySelector("#filterbutton3");
  var fieldset_kwaliteit = document.querySelector("#filter_kwaliteit")
  // console.log(button_showKwaliteitl)
  // console.log(fieldset_kwaliteit)
  
  var button_Showall = document.querySelector("#filterbutton0")
  console.log(button_Showall)
  
  
  
  
  
  
  //stap 2 click event
  
  button_Showall.addEventListener("click",function(){
    //   console.log("klik")
      //stap 3 functie aanroepen
  
      if(button_Showall.textContent=="Show all"){
          fieldset_aantal.classList.remove("hide")
          fieldset_bewerking.classList.remove("hide")
          fieldset_kwaliteit.classList.remove("hide")
          button_Showall.textContent=  "Hide all";
      } else if(button_Showall.textContent == "Hide all"){
          fieldset_aantal.classList.add("hide")
          fieldset_bewerking.classList.add("hide")
          fieldset_kwaliteit.classList.add("hide")
          button_Showall.textContent=  "Show all";
      }
  
  })
  
  button_showAantal.addEventListener("click",function(){
  //   console.log("er is op een button geklikt")
    //stap 3 functie aanroepen
  
    fieldset_aantal.classList.toggle("hide")
  
  
  
  })
  
  button_showBewerking.addEventListener("click",function(){
    // console.log("er is op een button geklikt")
    // stap 3 functie aanroepen
  
    fieldset_bewerking.classList.toggle("hide")
  
  })
  button_showKwaliteitl.addEventListener("click",function(){
  //   console.log("er is op een button geklikt")
    //stap 3 functie aanroepen
  
    fieldset_kwaliteit.classList.toggle("hide")
  
  })
  
  


