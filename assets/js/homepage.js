var getUserRepos = function(user) {
  // format the GitHub API URL
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the URL
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

getUserRepos("Chis517");