class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class= "card card-body mb-3">
       <div class="row">
        <div class="col-md-3">
          <img class="img-fluid" mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary mb-3 mt-3 "> View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary mb-2">Public Repos: ${user.public_repos}</span>
          <span class="badge bg-secondary mb-2">Public Gists: ${user.public_gists}</span>
          <span class="badge bg-success mb-2">Followers: ${user.followers}</span>
          <span class="badge bg-info mb-2">Following: ${user.following}</span>
          <br>
          <br>
          <ul class="list-group">
          <li class="list-group-item">Company: ${user.company} </li>
          <li class="list-group-item">Website/Blog: ${user.blog} </li>
          <li class="list-group-item">Location: ${user.location} </li>
          <li class="list-group-item">Member Since: ${user.created_at} </li>
          </ul>
        </div>
       </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repoos
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
      <div class = "card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
           <span class="badge bg-primary mb-2">Stars : ${repo.stargazers_count}</span>
           <span class="badge bg-secondary mb-2">Watchers: ${repo.watchers_count}</span>
           <span class="badge bg-success mb-2">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>

      `;
    });

    // output depositories
    document.getElementById("repos").innerHTML = output;
  }

  // Show alert msg
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // add classes
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // insert alert
    container.insertBefore(div, search); //what we pass, before what element are we passing

    // Timeout after 2 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert msg
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile when empty
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
