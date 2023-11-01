import { AjoutEquipe } from './AjoutEquipe.js';
import {Equipe} from './Equipe.js';

(function(){

    let elFormAjout = document.querySelectorAll('[data-js-ajout-equipe]'),
        elsEquipes = document.querySelectorAll('[data-js-equipe]');

        for (let i=0, l = elFormAjout.length; i<l ; i++){
            new AjoutEquipe(elFormAjout[i]);
        }


        for (let i=0, l = elsEquipes.length; i<l ; i++){
            new Equipe(elsEquipes[i]);
        }

})();