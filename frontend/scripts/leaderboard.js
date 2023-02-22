async function getUsers() {
    let backendUrl = new URL(window.location);
    backendUrl.port = 3000;
    const response = await fetch(`${backendUrl.origin}/scores`);
    const json = await response.json();
    return json.data

  }
async function renderUsers() {
  let users = await getUsers(); 
  users.sort(function(user1, user2) {return user2.score - user1.score});
  let leaderboard_table = `"<table id="leaderboard"><tr><th>RANK</th><th>PLAYER</th><th>SCORE</th></tr>"`;

  let index = 1;
  users.map(user => {
      let tableRow = "<tr><td>" + index + "</td><td>" + user.name + "</td><td>" + user.score + "</td></tr>";
      leaderboard_table += tableRow;
      index++;
  });
  leaderboard_table += "</table>";

  let container = document.querySelector('.container');
  container.innerHTML = leaderboard_table;
}

renderUsers();