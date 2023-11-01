export class AjoutEquipe {
    
    constructor(el){
            this._el = el;
            this._elInputNom = this._el.nom;
            this._elInputQuartier = this._el.quartier;
            this._elBtn = this._el.querySelector('button');
            this._sectionEquipe = document.querySelector('[data-js-equipes]');

            this.init();
    }

    init(){

        this._elBtn.addEventListener('click', function(e){
            e.preventDefault()
            this.ajoutEquipe();  
        }.bind(this))
    }

        ajoutEquipe(){

            let equipe = {
                
                nom: this._elInputNom.value,
                quartier: this._elInputQuartier.value

            }

            let oOptions = { 
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(equipe)
            };

            fetch('./requetes/ajouteEquipe.php', oOptions)
            .then(function(reponse){
                if(reponse.ok) return reponse.json()
            })
            .then(function(data){

                let dom = `

                <form class="equipe" data-js-equipe="${data}">
						<div>
							<label for="${data}">${equipe.nom}: </label>
							<input type="text" name="nom" id="${data}" />
						</div>
						<div data-js-actions>
							<button data-js-action="changer">Changer</button>
							<button data-js-action="supprimer">Supprimer</button>
						</div>
				</form> `;

                this._sectionEquipe.insertAdjacentHTML('beforeend', dom);

                this._elInputNom.value = '';
                this._elInputQuartier.value = '';


            }.bind(this))

        } 
}