async function getUsers() {
    let url = "https://localhost:8080/pages/leaderboard.json";
    try {
            //fetch is like not local. i am using import to test it with dummy data
            //let res = await fetch(url);
            let res = await import(url);
            return await res.json();
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
    users.map(users => {
        let tableRow = "<tr><td>" + index + "</td><td>" + users.name + "</td><td>" + users.score + "</td></tr>";
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