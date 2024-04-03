document.addEventListener("DOMContentLoaded", function() {
    
    const titulo = document.getElementById("titulo");
    const listaNaoOrdenada = document.querySelector("ul");
    const link = document.querySelector("a");
    const listaOrdenada = document.getElementById("lista-ordenada");

    titulo.innerText = "Título da Página";
    link.innerText = "Visitar Proz Educação";
    
    listaNaoOrdenada.innerHTML += "<li>Item 1</li>";
    listaNaoOrdenada.innerHTML += "<li>Item 2</li>";
    listaNaoOrdenada.innerHTML += "<li>Item 3</li>";
    
    listaOrdenada.innerHTML += "<li><a href='https://www.site1.com'>Site 1</a></li>";
    listaOrdenada.innerHTML += "<li><a href='https://www.site2.com'>Site 2</a></li>";
    listaOrdenada.innerHTML += "<li><a href='https://www.site3.com'>Site 3</a></li>";
});
