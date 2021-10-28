//client id and secret from github
class Github {
  constructor() {
    this.client_id = "a83d5ee43bf4d5a1ef1d";
    this.client_secret = "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";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, //ES6 Allows u to if return is profile = profile u just put one profile
      repos,
    };
  }
}
