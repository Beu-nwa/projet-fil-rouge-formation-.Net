import users from "./users.js";

export default class stagiaires extends users {
    constructor(nom, prenom, mail, mpd, status){
        super(nom, prenom, mail, mpd, status);
        this.status = "stagiaire";
    }
}