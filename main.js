// alert("hola mundo")

// //prompt para ingresar valores del usuario
// var yoandel=prompt("yoandel")

// //alert para mostrar mensaje al usuario
// //alert(yoandel + "Bienvenido a la api de Ricky Morty")
// var numero= parseInt(prompt ("ingrese un numero"
// )
// ); //convierte un string a un numero entero
// var numero2= parseInt(
//     prompt("ingresa otro numero"
//     )
// );//convierte un string a un numero entero

// var suma= numero + numero2
// alert("la suma de los numeros es: " + suma)



// parseInt ("");//convierte un string a un numero entero
personajes(mostrarDatos)
function personajes(done) {
    const url = "https://rickandmortyapi.com/api/character";
         fetch(url)
        .then(Resp=>Resp.json())
        .then(data=> done(data))
        .catch((error)=> console.log(error))
        .finally((personajes)=>console.log("finalizo"));
    }





function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

personajes(mostrarDatos);

