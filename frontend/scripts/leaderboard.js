async function getUsers() {
  //let url = "http://127.0.0.1:5500/frontend/leaderboard.json";
  try {
     
      //let res = await fetch(url);
      //let res = await import(url);
      return [
        {
            "name": "player 1",
            "score": 150
        },
        {
            "name": "player 2",
            "score": 76
        },
        {
            "name": "player 3",
            "score": 20
        },
        {
            "name": "player 4",
            "score": 100
        }
    ]
  } catch (error) {
      console.log(error);
  }
}
//you call the function above. 
async function renderUsers() {
  let users = await getUsers(); 
  users.sort(function(user1, user2) {return user2.score - user1.score});
  console.log(users);
  //dynamically makes a table with contents of the stuff fetched.
  let leaderboard_table = `"<table id="leaderboard"><tr><th>Rank</th><th>Player</th><th>Score</th></tr>"`;

  //map = for each of the elements in the arary (for each user) it makes a new row
  let index = 1;
  users.map(user => {
      let tableRow = "<tr><td>" + index + "</td><td>" + user.name + "</td><td>" + user.score + "</td></tr>";
      console.log(tableRow);
      leaderboard_table += tableRow;
      console.log(leaderboard_table);
      index++;
  });
  leaderboard_table += "</table>";
  //then we print it out on the console
  console.log(leaderboard_table);
  // we replace the container in the html with the table 
  let container = document.querySelector('.container');
  container.innerHTML = leaderboard_table;
}

renderUsers();