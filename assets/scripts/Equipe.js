export class Equipe {
    
    constructor(el){
        this._el = el;
        this._elLabel = this._el.querySelectorAll('label');
        this._elsInput = this._el.nom;
        this._elsBtn = this._el.querySelector('[data-js-actions]');
        this._elsBtnChanger = this._elsBtn.querySelector('[data-js-action="changer"]')
        this._elsBtnSupprimer = this._elsBtn.querySelector('[data-js-action="supprimer"]')
        //console.log(this._elsBtnSupprimer);

        this.init();
    }

    init(){

        this._elsBtnChanger.addEventListener('click', function(e){
            e.preventDefault();
            //console.log('Changer')
            this.changeNomEquipe();
        }.bind(this))

        this._elsBtnSupprimer.addEventListener('click', function(e){
            e.preventDefault();
            console.log('Supprimer')
            //this.supprimeEquipe();
        }.bind(this))
    }

    changeNomEquipe(){

        let equipe = {
            
            nom: this._elsInput.value,
            id: this._elsInput.getAttribute('id')
        }

        //console.log(equipe.nom)
        //console.log(equipe.id)

        let oOptions = { 
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(equipe)
        };

        fetch('./requetes/changeNomEquipe.php', oOptions)
        .then(function(reponse){
            //console.log(reponse)
            if(reponse.ok) return reponse.json()
            else throw new error('404')
        })
        .then(function(data){
            console.log(data); 
        })

    }
}