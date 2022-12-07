import users from "./users.js";

export default class formateurs extends users {
    constructor(nom, prenom, mail, mpd, status){
        super(nom, prenom, mail, mpd, status);
        this.status = "formateur";
    }
}