export class AuthService {
  loggedIn = false;

  // Simulating that this takes time to finish, like we reached out to a server
  isAuthenticated() {
    const promise = new Promise(
      // Promise takes functions as arguments
      // Resolve and reject methods we can execute
      (resolve, reject) => {
        // setTimeout waits 800ms then executes another method
        // This method resolves the promise and returns loggedIn
        setTimeout(()=> {
          resolve(this.loggedIn)
        },800)
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
