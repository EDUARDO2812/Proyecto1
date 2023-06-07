var app = new Vue({
    el: '#app',
    data:
    {
        url:"https://rickandmortyapi.com/api/character",
        results: [],
        count:0,
        pages:0,
        next: '',
        prev: '',
        personaje:'',

    },
    mounted(){
        console.log("ejecutando mounted");
        this.pedirDatos();
    },
    methods:{
        pedirDatos: async function(){
            console.log("ejecutando pedirDatos")
            const response = await fetch(this.url);
            this.results= await response.json();
            this.results = this.results.results;
            console.log(this.results);
           
            

        },

    }
})