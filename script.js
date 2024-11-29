const gamesList = [
	{
		title: "Sri Lanka 2",
		year: 1994,
		imageUrl: "A7309728.JPG",
		id: 1,
	},
	{
		title: "Italie",
		year: 2009,
		imageUrl:
			"A7309728.JPG",
		id: 2,
	},
	{
		title: "Etas-Unis",
		year: 2022,
		imageUrl:
			"A7309728.JPG",
		id: 3,
	},
	{
		title: "Allemagne",
		year: 2015,
		imageUrl:
			"A7309728.JPG",
		id: 4,
	},
	{
		title: "Autriche",
		year: 2004,
		imageUrl:
			"A7309728.JPG",
		id: 5,
	},
	{
		title: "France",
		year: 2011,
		imageUrl:
			"A7309728.JPG",
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
                   This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
               </p>
              <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button
                            type="button"
                         class="btn btn-sm btn-outline-secondary"
                         data-bs-toggle="modal"
                         data-bs-target="#exampleModal"
                     >
                         View
                     </button>
                     <button
                         type="button"
                         class="btn btn-sm btn-outline-secondary"
                         data-bs-toggle="modal"
                         data-bs-target="#exampleModal"
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