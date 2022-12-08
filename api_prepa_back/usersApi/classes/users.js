export default class users {
    constructor(id, title, firstname, lastname, dateOfBirth, phone, email, password, status, urlImg = " ", created = new Date(), updated = " ") {
        this.id = id;
        this.title = title;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.status = status;
        this.urlImg = urlImg;
        this.created = created;
        this.updated = updated;
        this.status = "visiteur";
    }
}