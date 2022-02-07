// var app = new Vue({
//     el: '#app',
//     data: {
//         message : "Hello World"
//     }
// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         url: "1.jpg",
//         caption: {
//             attr: "title",
//             text: "Hello ini adalah caption"
//         }
//     } 
// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         title: "Tutorial Vuejs untuk Pemula",
//         content: "<pre>Ini adalah tutorial Vuejs dari nol</pre>"
//     }
// })

// var app = new Vue({
//     el: "#app",
//     data: {
//         showBonus: true,
//         name: "Buku Talentpedia",
//         cover: "R.jpg",
//         price: 140000,
//         qty: 1 
//     }
// })

var app = new Vue({
    el: "#app",
    data: {
        newTask: "",
        todolists: [
            {'done': true, task: "Belajar Vuejs di Talentpedia"},
            {'done': false, task: "Siram tanaman di kebun"},
            {'done': false, task: "Beli bibit baru"},
        ]
    },
    method: {
        addTask: function() {
            this.todolists.push({'done': false,
            'task': this.newTask});
            this.newTask = "";
        }
    }
})