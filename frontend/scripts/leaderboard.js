function load(){
    var userscores = {
      "Player 1": 10,
      "Player 2": 40,
      "Player 3": 24,
      "Player 4": 8,
      "Player 5": 12,
      "Player 6": 14,
      "Player 7": 124,
      "Player 8": 150,
      "Player 9": 209,
      "Player 10": 12054,
    };
    var max = 0;
    var sorted = [];
    for(var prop in userscores){
      if(userscores[prop] >= max){
        max = userscores[prop];
      }
    }
    var cur = max;
    for(var i = max; i > 0; i--)
      for(var prop in userscores){
        if(userscores[prop] == i){
          sorted.push(prop);
        }
      
    }
    var html = "";
    for(var i = 0; i < sorted.length; i++){
      html = "<tr><td>" + (i + 1) + "</td><td>" + sorted[i] + "</td><td>" + userscores[sorted[i]] + "</td></tr>";
      document.getElementById("leaderboard").innerHTML += html;
    }
  }