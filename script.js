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

const editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log("hello edit !!!")
	})
})

function editModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	modifyModal("Mode Edition")
}

function modifyModal(modalTitle) {
	// Écrir le nom du jeu dans le titre du modal
    document.querySelector(".modal-title").textContent = gamesList[result].title
	//document.querySelector(".modal-title").textContent = modalTitle
}