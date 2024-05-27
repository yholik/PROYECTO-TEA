if (document.getElementById("centros")) {

  cad = `
        
        <h2>Centros Médicos</h2>
        <div class="container-centros">
        
        `
  for (let i = 0; i < dataCentros.length; i++) {
    cad += `
            
            <div class="card mb-3" style="max-width: 900px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img
                        src="${dataCentros[i].img}"
                        class="img-fluid rounded-start img-card"
                        alt="logo"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${dataCentros[i].nombre}</h5>
                            <p class="card-text">Dirección: 
                            ${dataCentros[i].direccion}
                            </p>
                            <p class="card-text">Barrio:
                            ${dataCentros[i].barrio}
                            </p>
                            <p class="card-text">
                                <small class="text-body-secondary">Teléfono: ${dataCentros[i].telefono}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            `
  }

  cad += `
        </div>
        `
  console.log(cad);
  document.getElementById('centros').innerHTML = cad;

}

// if (document.getElementById("ayuda")){

//     card = `

//         <h2>Enlaces de Ayuda</h2>
//         <div class="row row-cols-1 row-cols-md-3 g-3">


//         `
//         for (let i = 0; i < dataAyuda.length; i++) {
//             card += `


//                 <div class="col">
//                     <div class="card" style="">
//                         <img src="${dataAyuda[i].img}" class="card-img-top img-card" alt="logo">
//                         <div class="card-body">
//                             <h5 class="card-title">${dataAyuda[i].nombre}</h5>
//                             <p class="card-text">${dataAyuda[i].descripcion}</p>
//                             <a href="${dataAyuda[i].url}" class="btn btn-primary">Ir a sitio web</a>
//                         </div>
//                     </div>
//                 </div>


//             `
//         }

//         card+= `
//         </div>
//         `

//         console.log(card);
//         document.getElementById('ayuda').innerHTML=card;

// }

// ----------------------------
if (document.getElementById("article")) {

  cardArticle = `
        
        <h2>Enlaces de Ayuda</h2>
        <div class="articles">
        
        `
  for (let i = 0; i < dataAyuda.length; i++) {
    cardArticle += `
            
            <article>
            <div class="article-wrapper">
            <figure>
              <img src="${dataAyuda[i].img}" alt="" />
            </figure>
            <div class="article-body">
              <h2>${dataAyuda[i].nombre}</h2>
              <p>
                ${dataAyuda[i].descripcion}
              </p>
              <a href="${dataAyuda[i].url}" class="read-more">
                Página Web <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
            </div>
            </article>
                    
            `
  }

  cardArticle += `
        </div>
        `
  console.log(cardArticle);
  document.getElementById('ayuda').innerHTML = cardArticle;

}