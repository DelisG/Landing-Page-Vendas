$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $("nav").addClass("bg-light");
  } else {
    $("nav").removeClass("bg-light");
  }
});

var cards = [
  {
    imagem: "assets/images/cultura-entenda.jpg",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];

var verMaisBtn = document.getElementById("verMaisBtn");
var conteudoSecundario = document.getElementById("conteudoSecundario");

verMaisBtn.addEventListener("click", function () {
  if (
    conteudoSecundario.style.display === "none" ||
    conteudoSecundario.style.display === ""
  ) {
    conteudoSecundario.style.display = "block"; // Torna o conteúdo visível
  }
});

function criarCard(imagem, texto) {
  var cardHTML = `
            <div class="row mt-5">
                    <div class="col-lg-4">
                        <div
                            class="card rounded-3 elevacao bg-light text-dark div-artigo">
                            <div class="card-body card-artigo">
                                <img src="https://www.mundodomarketing.com.br/wp-content/uploads/2023/04/5-estrategias-de-desenvolvimento-de-negocios-que-ajudarao-seu-escritorio-de-advocacia-a-crescer-em-2023.jpg">
                            </div>
                            <p class="card-header text-center">Lorem ipsum dolor
                                sit
                                amet,
                                consectetur adipisicing elit </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="card rounded-3 elevacao bg-light text-dark div-artigo">
                            <div class="card-body card-artigo">
                                <img src="https://www.mundodomarketing.com.br/wp-content/uploads/2023/04/5-estrategias-de-desenvolvimento-de-negocios-que-ajudarao-seu-escritorio-de-advocacia-a-crescer-em-2023.jpg">
                            </div>
                            <p class="card-header text-center">Lorem ipsum dolor
                                sit
                                amet,
                                consectetur adipisicing elit </p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="card rounded-3 elevacao bg-light text-dark div-artigo">
                            <div class="card-body card-artigo">
                                <img src="https://www.mundodomarketing.com.br/wp-content/uploads/2023/04/5-estrategias-de-desenvolvimento-de-negocios-que-ajudarao-seu-escritorio-de-advocacia-a-crescer-em-2023.jpg">
                            </div>
                            <p class="card-header text-center">Lorem ipsum dolor
                                sit
                                amet,
                                consectetur adipisicing elit </p>
                        </div>
                    </div>
                </div>
        `;
  return cardHTML;
}

// Função para adicionar os cards ao container
function adicionarCards() {
  var cardsContainer = document.getElementById("cardsContainer");

  cards.forEach(function (card) {
    var cardHTML = criarCard(card.imagem, card.texto);
    var divCard = document.createElement("div");
    divCard.innerHTML = cardHTML;
    cardsContainer.appendChild(divCard);
  });
}

// Adicionar evento de clique ao botão "Ver Mais"
var verMaisBtn = document.getElementById("verMaisBtn");
verMaisBtn.addEventListener("click", function () {
  adicionarCards(); // Chama a função para adicionar os cards quando o botão "Ver Mais" é clicado
  verMaisBtn.style.display = "none"; // Oculta o botão "Ver Mais"
});

// let itens = [
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 1",
//     descricao: "Descrição do Item 1.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 2",
//     descricao: "Descrição do Item 2.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 3",
//     descricao: "Descrição do Item 3.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 4",
//     descricao: "Descrição do Item 4.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 5",
//     descricao: "Descrição do Item 5.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 6",
//     descricao: "Descrição do Item 6.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 7",
//     descricao: "Descrição do Item 7.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 8",
//     descricao: "Descrição do Item 8.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 9",
//     descricao: "Descrição do Item 9.",
//   },
//   {
//     imagem:
//       "https://www.anexoconsultoria.com.br/assets/img/cultura-entenda.jpg",
//     titulo: "Item 10",
//     descricao: "Descrição do Item 10.",
//   },
// ];

// function criarItens() {
//   var itensContainer = document.getElementById("itensContainer");

//   itens.forEach(function (item, index) {
//     var divItem = document.createElement("div");
//     divItem.classList.add("row","d-flex", "flex-row", "flex-wrap");
//     divItem.innerHTML = `
//                     <div class="card rounded-3 elevacao bg-light text-dark div-artigo col-4">
//                         <div class="card-body card-artigo">
//                             <img src="${item.imagem}">
//                         </div>
//                         <h5 class="card-header text-center">${item.titulo}</h5>
//                         <div class="infoAdicional" style="display: none;">
//                             <p>${item.descricao}</p>
//                         </div>
//                     </div>
//                 `;

//     itensContainer.appendChild(divItem);
//   });
// }

// Adicionar evento de clique ao botão "Ver Mais"
// var verMaisBtn = document.getElementById("verMaisBtn");
// verMaisBtn.addEventListener("click", function () {
//   var verMaisContainer = document.getElementById("verMaisContainer");
//   var itensContainer = document.getElementById("itensContainer");

//   if (
//     itensContainer.style.display === "none" ||
//     itensContainer.style.display === ""
//   ) {
//     itensContainer.style.display = "block";
//     criarItens();
//     verMaisContainer.style.display = "none";
// }
// });

// Chamar a função para criar os itens
// criarItens();
