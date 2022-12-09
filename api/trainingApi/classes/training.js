export default class training {
    constructor(id, name, category, difficulty, price, duration, startDate, endDate, location, description, urlImg = " ", created = new Date(), updated = " ") {
        this.id = id;
        this.name = name;
        this.category = category;
        this.difficulty = difficulty;
        this.price = price;
        this.duration = duration;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.description = description;
        this.urlImg = urlImg;
        this.created = created;
        this.updated = updated;
    }
}