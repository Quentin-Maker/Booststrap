const gamesList = [
    {
        title: "Sri Lanka",
        year: 20,
        imageUrl: "SriLanka.png",
        id: 1,
    },
    {
        title: "Italie",
        year: 7,
        imageUrl: "A7309728.JPG",
        id: 2,
    },
    {
        title: "Etats-Unis",
        year: 21,
        imageUrl: "SD.PNG",
        id: 3,
    },
    {
        title: "Allemagne",
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

document.addEventListener("DOMContentLoaded", () => {
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const gameId = btn.getAttribute("data-edit-id");
            editModal(gameId);
        });
    });
});

function editModal(gameId) {
    const game = gamesList.find((game) => game.id === parseInt(gameId));
    if (game) {
        modifyModal(game);
    } else {
        console.error("Jeu non trouvé pour l'ID :", gameId);
    }
}

function modifyModal(game) {
    document.querySelector(".modal-title").textContent = game.title;
    document.querySelector(".modal-body").textContent = `Année : ${game.year}`;
}
