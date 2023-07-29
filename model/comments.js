class Comments {
  constructor(id, avatar, text, data) {
    this.id = id;
    this.avatar = avatar;
    this.text = text;
    this.data = data;
  }
}

export const COMMENTS = [
  new Comments(
    "01",
    require("../assets/images/comments/first.png"),

    "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    "09 червня, 2020 | 08:40"
  ),
  new Comments(
    "02",
    require("../assets/images/comments/second.png"),

    "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    "09 червня, 2020 | 09:14"
  ),
  new Comments(
    "03",
    require("../assets/images/comments/first.png"),

    "Thank you! That was very helpful!",
    "09 червня, 2020 | 09:20"
  ),
];
