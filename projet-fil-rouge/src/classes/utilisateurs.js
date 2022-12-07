export default class users {
    constructor(nom = "", prenom = "", mail = "", mpd = "") {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.mpd = mpd;
        this.status = "visiteur";
    }
    changeNom(x){
        this.nom = x;
    }
    changePrenom(x){
        this.prenom = x;
    }
    changeMail(x){
        this.mail = x;
    }
    changeMdp(x){
        this.mpd = x;
    }
}