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
        },
        {
            "name": "player 5",
            "score": 120
        },
        {
            "name": "player 6",
            "score": 90
        },
        {
            "name": "player 7",
            "score": 2
        },
        {
            "name": "player 8",
            "score": 1
        },
        {
            "name": "player 9",
            "score": 50
        },
        {
            "name": "player 10",
            "score": 723
        },
        {
            "name": "player 11",
            "score": 2034
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
  let leaderboard_table = `"<table id="leaderboard"><tr><th>RANK</th><th>PLAYER</th><th>SCORE</th></tr>"`;

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