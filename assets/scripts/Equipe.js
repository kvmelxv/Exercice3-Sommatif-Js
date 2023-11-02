export class Equipe {
    #_el;
    #_elLabel;
    #_elsInput;
    #_elsBtn;
    #_elsBtnChanger;
    #_elsBtnSupprimer;


    constructor(el){
        this.#_el = el;
        this.#_elLabel = this._el.querySelectorAll('label');
        this.#_elsInput = this._el.nom;
        this.#_elsBtn = this._el.querySelector('[data-js-actions]');
        this.#_elsBtnChanger = this._elsBtn.querySelector('[data-js-action="changer"]');
        this.#_elsBtnSupprimer = this._elsBtn.querySelector('[data-js-action="supprimer"]');

        this.init();
    }

    init(){

        this.#_elsBtnChanger.addEventListener('click', function(e){
            e.preventDefault();
            this.changeNomEquipe();
        }.bind(this))

        this.#_elsBtnSupprimer.addEventListener('click', function(e){
            e.preventDefault();
            this.supprimeEquipe();
        }.bind(this))
    }

    changeNomEquipe(){

        let equipe = {
            
            nom: this.#_elsInput.value,
            id: this.#_elsInput.getAttribute('id')
        }

        let oOptions = { 
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(equipe)
        };

        fetch('./requetes/changeNomEquipe.php', oOptions)
        .then(function(reponse){
            if(reponse.ok) return reponse.text()
            else throw new error('404')
        })
        .then(function(data){
            this.#_elLabel[0].textContent = equipe.nom + ' :';          
        }.bind(this))

        this.#_elsInput.value = ''; 

    }

    supprimeEquipe(){

        let equipe = {

            id: this.#_elsInput.getAttribute('id')
        }

        let oOptions = { 
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(equipe)
        };

        fetch('./requetes/supprimeEquipe.php', oOptions)
        .then(function(reponse){
            if(reponse.ok) return reponse.text()
            else throw new error('404')
        })
        .then(function(data){
            this.#_el.remove() 
        }.bind(this))
    }
}