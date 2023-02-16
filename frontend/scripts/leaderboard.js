async function getUsers() {
    const response = await fetch('http://localhost:3000/scores');
    // try {
    const json = await response.json();
    console.log(json);
    return json.data
    // if (response.status >= 200 && response.status <= 299) {
    //     const jsonResponse = await response.json();
    //     console.log(jsonResponse);
    //   } else {
    //     // Handle errors
    //     console.log(response.status, response.statusText);
    //   }
    // return await json.json;
    // }
    //  catch (error) {
    //   console.log(error);
    //  }
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