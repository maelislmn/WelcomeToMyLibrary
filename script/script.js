// Déclaration d'un tableau de livres initialement vide
let library = [];

// Fonction pour ajouter un livre
function addBook(book) {
  library.push(book);
}

// Fonction pour savoir quels livres sont disponibles dans la librairie
function getAvailableBooks() {
  /*for (let i = 0; i < library.length; i++) {
    const book = library[i]
        if (book.borrowed === false) {
            console.log(book)
            }
        }*/
  library.forEach((book) => {
    if (book.borrowed === false) {
      console.log(book);
    }
  });
}

// Rechercher un livre par son titre dans le tableau de livres
function searchByTitle(title) {
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    if (book.title.toLowerCase().trim() == title.toLowerCase().trim()) {
      return book;
    }
  }
}

// Emprunter un livre dans le tableau de livres s'il est disponible
function borrowBook(title) {
  const book = searchByTitle(title);

  if (book) {
    if (book.borrowed === false) {
      console.log("Vous avez emprunté " + book.title + ".");
      book.borrowed=true
    } else {
      console.log(`Le livre ${book.title} est déjà emprunté.`);
    }
  } else {
    console.log(
      "Le livre " + book.title + " n'existe pas dans la bibliothèque."
    );
  }
}

// Retourner un livre dans le tableau de livres s'il est déjà emprunté
function returnBook(title) {
  const book = searchByTitle(title);

  if (book) {
    if (book.borrowed === false) {
        console.log(`Le livre ${book.title} n'est pas emprunté.`);
    } else {
        console.log(`Vous avez rendu le livre ${book.title}.`);
        book.borrowed=false
    }
  } else {
    console.log(`Le livre ${book.title} n'existe pas dans la bibliothèque.`);
  }
}

// Ajouter un livre dans le tableau
addBook({
  title: "Apprentice to the Villain",
  author: "Hannah Nicole Maehrer",
  publicationYear: 2025,
  borrowed: false,
});

addBook({
  title: "La Tisseuse de Mélodies",
  author: "Sarah Abassi",
  publicationYear: 2024,
  borrowed: true,
});

addBook({
  title: "Un été à New York",
  author: "Alex Aster",
  publicationYear: 2025,
  borrowed: true,
});

// Afficher le tableau de livres
console.table(library);

// Afficher les livres non empruntés
console.log("Les livres disponibles :");
getAvailableBooks();

//Afficher le livre recherché dans le tableau
console.log("Le livre que vous recherchez est");
console.log(searchByTitle("La Tisseuse de Mélodies"));

//Emprunter le livre 'La Tisseuse de Mélodies'
borrowBook("Apprentice to the Villain");

//Affiche la mise à jour du tableau
console.table(library);

//Retourner le livre 'Un été à New York'
returnBook("Un été à New York");

//Affiche la dernière mise à jour du tableau
console.table(library);
