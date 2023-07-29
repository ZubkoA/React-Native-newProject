class Profile {
  constructor(id, img, title, message, like, location) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.message = message;
    this.like = like;
    this.location = location;
  }
}

export const PROFILE = [
  new Profile(
    "01",
    require("../assets/images/default1.png"),

    "Ліс",
    "8",
    "153",
    "Ukraine"
  ),
  new Profile(
    "02",
    require("../assets/images/default.png"),

    "Захід на Чорному морі",
    "3",
    "200",
    "Ukraine"
  ),
  new Profile(
    "03",
    require("../assets/images/default2.png"),

    "Старий будиночок у Венеції",
    "50",
    "200",
    "Italy"
  ),
];
