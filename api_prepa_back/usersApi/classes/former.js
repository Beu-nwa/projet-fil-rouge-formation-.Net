import users from "./users.js";

export default class former extends users {
    constructor(id, title, firstname, lastname, dateOfBirth, phone, email, password, status, urlImg, created, updated) {
        super(id, title, firstname, lastname, dateOfBirth, phone, email, password, status, urlImg, created, updated);
        this.status = "formateur";
    }
}