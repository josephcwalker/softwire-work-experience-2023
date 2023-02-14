function load(){
    var userscores = {
      "Player 1": 10,
      "noncy": 40,
      "del3tus": 24,
      "the_r0ck": 8,
      "MONSTER_OSITY": 120
    };
    alert("hola")
    var max = 0;
    var sorted = [];
    for(var prop in userscores){
      if(userscores[prop] >= max){
        max = userscores[prop];
      }
    }
    var cur = max;
    for(var i = max; i > 0; i--){
      for(var prop in userscores){
        if(userscores[prop] == i){
          sorted.push(prop);
        }
      }
    }
    var html = "";
    for(var i = 0; i < sorted.length; i++){
      html = "<tr><td>" + (i + 1) + "</td><td>" + sorted[i] + "</td><td>" + userscores[sorted[i]] + "</td></tr>";
      document.getElementById("leaderboard").innerHTML += html;
    }
  }