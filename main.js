var app = new Vue({
    el: '#app',
    data: {
        description: 'Lorem ipsus',
        product: 'Longaniza de Brocolli',
        img: './assets/1.jpg',
        link: './longanizas.html',
        stock: 12,
        details: ["5oo gr", "Organica", "Libre de Colesterol"],
        // AGREGGANDO OBJETOS
        variants: [{
            id: 5,
            type: 'Roja',
            img: './assets/1.jpg'
        },
        {
            id: 4,
            type: 'Blanca',
            img: './assets/2.png',
        }
        ],
        // VAMOS A AGREGAR BOTONES
        cart: 0
    },
    methods: {
        updateImg(img) {
            this.img = img;
        },
        addToCart() {
            this.cart += 1
            this.stock -= 1
        },
        removeFromCart() {
            if (this.cart > 0) {
                // debugger pone en pausa la pagina en donde queramos hay que poner el debugger
                this.cart -= 1
                this.stock += 1
            }
        }
    },
    computed: {
        inStock(){
            return this.stock > 0 ? true : false //retorna el stock >0 ? (if) es verdadero : (else) es falso
        }
    },
})