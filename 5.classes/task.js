class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    return this.state *= 1.5;
  }
  set state (newState) {
    if (newState <= 0) {
      this._state = 0;
    } else if (newState >= 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super (name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super (name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books = []){
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    if (this.books === undefined && this.state > 30) {
      this.books = [book]; 
    } else {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let rezult = null;
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i][type] === value) {
        rezult = this.books[i];
      } 
    }
    return rezult;
  }
  giveBookByName(bookName) {
    let rez = null;
    let removed;
    for (let i = 0; i < this.books.length; i++) {
      if (bookName === this.books[i].name) {
        rez = this.books[i];
        removed = this.books.splice(i, 1);
      } 
    }
    return rez;
  }
}