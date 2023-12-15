class Article {
  static naming = "Создание статей";

  constructor(title, data) {
    this.title = title;
    this.data = data;
  }

  static createTodays() {
    return new this("Сегодняшний дайджест", new Date());
  }
}

class ArticleLegacy extends Article {}

let article = Article.createTodays();



ArticleLegacy.naming = "Взлом жопы";

console.log(ArticleLegacy.naming);
console.log(Article.naming);