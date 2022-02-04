console.log('js ok');

console.log(' Vue ok', Vue);

Vue.config.devtools = true;

/* Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

const root = new Vue({

    el: '#root',

    data: {

        maxItems: 10, // variabile che indica il numero di oggetti massimi 

        emails: [], // Inizializzo un array vuoto dove saranno contenute le mie email
    },

    methods: {

        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                console.log(res.data.response);
                this.emails.push(res.data.response);
            });
        }
    },

    mounted() {
        this.getRandomEmail();
    }

});