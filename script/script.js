let library = [];
    // Tableau de livres (vide au départ)
const bibliotheque = [];

// Fonction pour ajouter un livre à la bibliothèque
function ajouterLivre(livre) {
  bibliotheque.push(livre);
  console.log("Livre ajouté :", livre);
  console.log("Bibliothèque actuelle :", bibliotheque);
}

// Exemple d'utilisation
const nouveauLivre = {
  title: "L'Étrange Bibliothécaire",
  author: "Claire Duval",
  publicationYear: 2022,
  borrowed: false
};

ajouterLivre(nouveauLivre);

    // Ajouter un livre
    function addBook(title, author, publicationYear) {
      const book = {
        title,
        author,
        publicationYear,
        borrowed: false
      };
      library.push(book);
      renderBooks();
    }

    // Emprunter un livre
    function borrowBook(index) {
      if (!library[index].borrowed) {
        library[index].borrowed = true;
      }
      renderBooks();
    }

    // Rendre un livre
    function returnBook(index) {
      if (library[index].borrowed) {
        library[index].borrowed = false;
      }
      renderBooks();
    }

    // Afficher les livres
    function renderBooks() {
      const container = document.getElementById("books");
      container.innerHTML = "";

      library.forEach((book, index) => {
        const div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Auteur :</strong> ${book.author}</p>
          <p><strong>Année :</strong> ${book.publicationYear}</p>
          <p><strong>Status :</strong> ${book.borrowed ? "📕 Emprunté" : "📖 Disponible"}</p>
          <button onclick="borrowBook(${index})" ${book.borrowed ? "disabled" : ""}>Emprunter</button>
          <button onclick="returnBook(${index})" ${!book.borrowed ? "disabled" : ""}>Rendre</button>
        `;
        container.appendChild(div);
      });
    }

    // Gérer le formulaire
    document.getElementById("book-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const year = document.getElementById("year").value;
      addBook(title, author, year);
      this.reset();
    });

    // Initial render
    renderBooks();

    // ...existing code...
function afficherLivresDisponibles() {
  library.forEach((book) => {
    if (!book.borrowed) {
      console.log(`Titre : ${book.title}, Auteur : ${book.author}, Année : ${book.publicationYear}`);
    }
  });
}
// ...existing code...