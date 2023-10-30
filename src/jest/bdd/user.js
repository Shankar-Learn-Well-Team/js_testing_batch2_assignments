class User {
    constructor(name) {
        this.name = name;
        this.loggedIn = false;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}

module.exports = User;
