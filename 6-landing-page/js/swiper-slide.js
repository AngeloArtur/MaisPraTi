const slidesData = [
    {
        id: "slide-1",
        imgSrc: "images/super_mario_odyssey_dinosaur_4k.jpeg",
        imgAlt: "Banner do Super Mario Odyssey",
        gameName: "Mario",
        score: "9.7",
        description: "Ótimo",
        metaDescription: "Descrição do Jogo Mario Odyssey",
        platform: "Plataforma, Aventura, Ação",
        releaseDate: "27 de Outubro 2017",
        modes: "Modo TV, Modo Semiportátil, Modo Portátil",
        trailerUrl: "https://www.youtube.com/embed/5kcdRBHM7kM",
        gameImage: "images/mario.png",
        gameUrl:
            "https://www.nintendo.com/pt-br/store/products/super-mario-odyssey-switch/?srsltid=AfmBOoo310MZSSohfT6uOGZg7qEVAYqCAeL2rhIJHzWWHv_J7DxBoCqP",
    },
    {
        id: "slide-2",
        imgSrc: "images/pokemon-legends-arceus.jpeg",
        imgAlt: "Banner do Pokemon Legends Arceus",
        gameName: "Pokémon",
        score: "8.3",
        description: "Bom",
        metaDescription: "Descrição do Jogo Pokemon Legends Arceus",
        platform: "Ação, RPG",
        releaseDate: "28 de Janeiro de 2022",
        modes: "Modo TV, Modo Semiportátil, Modo Portátil",
        trailerUrl: "https://www.youtube.com/embed/I4RynqpahT8",
        gameImage: "images/red.png",
        gameUrl: "https://www.nintendo.com/pt-br/store/products/pokemon-legends-arceus-switch/",
    },
    {
        id: "slide-3",
        imgSrc: "images/The-Legend-of-Zelda-Breath-of-the-Wild.jpeg",
        imgAlt: "Banner Legends of Zelda",
        gameName: "Zelda",
        score: "9.7",
        description: "Ótimo",
        metaDescription: "Descrição do Jogo Legends of Zelda",
        platform: "Ação, RPG",
        releaseDate: "3 de Março de 2017",
        modes: "Modo TV, Modo Semiportátil, Modo Portátil",
        trailerUrl: "https://www.youtube.com/embed/1rPxiXXxftE",
        gameImage: "images/link.png",
        gameUrl: "https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/",
    },
];

function createSlide(slide) {
    return `
      <div class="swiper-slide" id="${slide.id}">
        <img src="${slide.imgSrc}" alt="${slide.imgAlt}" />
  
        <div class="backscene"></div>
        <div class="banner">
          <div class="left">
            <div class="features">
              <div class="rating">
                <span class="score note">${slide.score}</span>
                <div class="content">
                  <span class="subtitle">M E T A S C O R E</span>
                  <h4>${slide.description}</h4>
                  <span>${slide.metaDescription}</span>
                </div>
              </div>
              <div class="pricing">
                <span class="score" onclick="showModal('${slide.gameUrl}')">
                  <img src="images/shopping-cart.png" alt="Carrinho de compras" id="cart">
                </span>
                <div class="content">
                  <span class="subtitle">${slide.gameName}</span>
                  <h4>COMPRE AGORA</h4>
                  <span>${slide.platform}</span>
                </div>
              </div>
            </div>
            <h1>${slide.gameName.split(" ")[0]}</h1>
          </div>
  
          <img src="${slide.gameImage}" alt="Imagem do ${slide.gameName}" />
  
          <div class="right">
            <ul class="description">
              <li>
                <p>${slide.releaseDate}</p>
              </li>
              <li>
                <p>${slide.modes}</p>
              </li>
            </ul>
  
            <div class="trailer">
              <h2>Assista ao Trailer</h2>
              <iframe
                width="1280"
                height="720"
                src="${slide.trailerUrl}"
                title="${slide.gameName} Trailer"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    `;
}

function loadSlides() {
    const slidesContainer = document.getElementById("slides-container");
    slidesData.forEach((slide) => {
        slidesContainer.innerHTML += createSlide(slide);
    });
}

document.addEventListener("DOMContentLoaded", loadSlides);
