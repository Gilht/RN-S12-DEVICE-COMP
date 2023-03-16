class Place {
    constructor(title, imgUrl, adress, location) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.adress = adress;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString();
    }
}