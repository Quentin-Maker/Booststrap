const gamesList = [
    {
        title: "Sri Lanka",
        year: 20,
        imageUrl: "SriLanka.png",
        id: 1,
    },
    {
        title: "Italy",
        year: 7,
        imageUrl: "A7309728.JPG",
        id: 2,
    },
    {
        title: "United States",
        year: 21,
        imageUrl: "SD.PNG",
        id: 3,
    },
    {
        title: "Germany",
        year: 7,
        imageUrl: "Castle.png",
        id: 4,
    },
    {
        title: "Portugal",
        year: 8,
        imageUrl: "Algarve.PNG",
        id: 5,
    },
    {
        title: "France",
        year: 14,
        imageUrl: "France.jpg",
        id: 6,
    },
];

function writeDom() {
    gamesList.forEach((game) => {
        const articleContainer = document.querySelector(".row");
        articleContainer.innerHTML += `<article class="col">
            <div class="card shadow-sm">
               <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />
               <div class="card-body">
                   <h3 class="card-title">${game.title}</h3>
                   <p class="card-text">${game.year}</p>
                   <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary view"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                data-edit-id="${game.id}"
                            >
                                View
                            </button>
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary edit"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                data-edit-id="${game.id}"
                            >
                                Edit
                            </button>
                        </div>
                   </div>
                </div>
            </div>
        </article>`;
    });
}

writeDom();

// Ajouter des gestionnaires pour les boutons "View"
const viewButtons = document.querySelectorAll(".view");
viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        viewModal(e.target.getAttribute("data-edit-id"));
    });
});

function viewModal(gameId) {
    // Trouver le jeu correspondant
    const game = gamesList.find((game) => game.id === parseInt(gameId));

    // Modifier le contenu du modal
    if (game) {
        const modalTitle = document.querySelector("#exampleModalLabel");
        const modalBody = document.querySelector(".modal-body");

        // Mettre à jour le titre et l'image dans le modal
        modalTitle.textContent = game.title;
        modalBody.innerHTML = `<img src="${game.imageUrl}" alt="${game.title}" style="width: 100%; height: auto;" />`;
    }
}

// Ajouter des gestionnaires pour les boutons "Edit"
const editButtons = document.querySelectorAll(".edit");
editButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        editModal(e.target.getAttribute("data-edit-id"));
    });
});

function editModal(gameId) {
    // Trouver le jeu correspondant
    const game = gamesList.find((game) => game.id === parseInt(gameId));

    // Modifier le contenu du modal pour l'édition
    if (game) {
        const modalTitle = document.querySelector("#exampleModalLabel");
        const modalBody = document.querySelector(".modal-body");

        // Mettre à jour le titre et afficher les détails dans un formulaire pour modification
        modalTitle.textContent = `Edit: ${game.title}`;
        modalBody.innerHTML = `
            <form id="editForm">
                <div class="mb-3">
                    <label for="editTitle" class="form-label">Country</label>
                    <input type="text" class="form-control" id="editTitle" value="${game.title}" />
                </div>
                <div class="mb-3">
                    <label for="editYear" class="form-label">Days</label>
                    <input type="number" class="form-control" id="editYear" value="${game.year}" />
                </div>
                <div class="mb-3">
                    <label for="editImageUrl" class="form-label">Image Name</label>
                    <input type="text" class="form-control" id="editImageUrl" value="${game.imageUrl}" />
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
        `;

        // Gestion de la soumission du formulaire
        const editForm = document.querySelector("#editForm");
        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Mettre à jour les données du jeu
            game.title = document.querySelector("#editTitle").value;
            game.year = parseInt(document.querySelector("#editYear").value, 10);
            game.imageUrl = document.querySelector("#editImageUrl").value;

            // Fermer la modale et recharger la liste
            document.querySelector(".btn-close").click();
            document.querySelector(".row").innerHTML = "";
            writeDom();
        });
    }
}
