Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

var app = new Vue(
    {
        el: '#root',
        data : {
            titlePage : 'hello VueJS',
            image: {
                imgSrc : 'https://unsplash.it/300/300?image=',
                imgAlt : 'Foto pagina'
            } 
        }
    }
)