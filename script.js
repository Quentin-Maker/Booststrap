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
		imageUrl:
			"A7309728.JPG",
		id: 2,
	},
	{
		title: "Etas-Unis",
		year: 21,
		imageUrl:
			"SD.PNG",
		id: 3,
	},
	{
		title: "Allemagne",
		year: 7,
		imageUrl:
			"Castle.png",
		id: 4,
	},
	{
		title: "Portugal",
		year: 8,
		imageUrl:
			"Algarve.PNG",
		id: 5,
	},
	{
		title: "France",
		year: 14,
		imageUrl:
			"France.jpg",
		id: 6,
	},
]
function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
        <div class="card shadow-sm">
           <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />

           <div class="card-body">
           <h3 class="card-title">${game.title}</h3>
              <p class="card-text">
                       ${game.year}      
              </p>
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
                         data-bs-toggle="modal" data-bs-target="#exampleModal"
                         data-edit-id="${game.id}"
                     >
                           Edit
                     </button>
                   </div>
              </div>
            </div>
       </div>
    </article>`
	})
}

writeDom()


// Fonction pour gérer l'édition via le modal
function editModal(gameId) {
    // Trouver le jeu correspondant à l'id
    const game = gamesList.find((game) => game.id === parseInt(gameId));

    if (game) {
        modifyModal(game); // Passer le jeu trouvé à modifyModal
    } else {
        console.error("Jeu non trouvé pour l'ID :", gameId);
    }
}

// Modifier le contenu du modal avec les informations du jeu
function modifyModal(game) {
    // Écrir le titre du jeu dans le modal
    document.querySelector(".modal-title").textContent = game.title;

    // Optionnel : ajouter d'autres informations au modal
    const modalBody = document.querySelector(".modal-body");
    modalBody.textContent = `Année : ${game.year}`;
}