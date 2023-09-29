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
                    <div class="col-lg-4 ">
                        <div
                            class="card rounded-3 elevacao bg-light text-dark div-artigo">
                            <div class="card-body card-artigo">
                                <img src="assets/images/cultura-entenda.jpg">
                                <p class="category">Categoria</p>

                            </div>

                            <div class="p-4">
                                <h4 class=" ">Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit </h4>
                                <p class="py-2">Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit lorem
                                    ipsum dolor
                                    sit amet, consectetur adipisicing elit </p>
                                <a href="ver-mais.html"
                                    class="text-decoration-none">Ver mais</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 ">
                        <div
                            class="card rounded-3 elevacao bg-light text-dark div-artigo">
                            <div class="card-body card-artigo">
                                <img src="assets/images/cultura-entenda.jpg">
                                <p class="category">Categoria</p>

                            </div>

                            <div class="p-4">
                                <h4 class=" ">Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit </h4>
                                <p class="py-2">Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit lorem
                                    ipsum dolor
                                    sit amet, consectetur adipisicing elit </p>
                                <a href="ver-mais.html"
                                    class="text-decoration-none">Ver mais</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 ">
                        <div
                            class="card rounded-3 elevacao bg-light text-dark div-artigo">
                            <div class="card-body card-artigo">
                                <img src="assets/images/cultura-entenda.jpg">
                                <p class="category">Categoria</p>

                            </div>

                            <div class="p-4">
                                <h4 class=" ">Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit </h4>
                                <p class="py-2">Lorem ipsum dolor
                                    sit amet, consectetur adipisicing elit lorem
                                    ipsum dolor
                                    sit amet, consectetur adipisicing elit </p>
                                <a href="ver-mais.html"
                                    class="text-decoration-none">Ver mais</a>
                            </div>
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

// itens pesquisa

const artigos = [
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Estratégias de Marketing Digital",
    subtitulo: "Maximizando seu alcance online",
    descricao:
      "Descubra como criar uma estratégia de marketing digital eficaz para expandir sua presença online e atrair mais clientes.",
    texto:
      "O marketing digital se tornou uma parte essencial de qualquer estratégia de negócios nos dias de hoje. Com a crescente competição online, é fundamental para as empresas entenderem como maximizar seu alcance na internet. Este artigo explora as últimas tendências em marketing digital e fornece insights sobre como criar uma estratégia sólida. Desde otimização de mecanismos de busca (SEO) até publicidade nas redes sociais e marketing de conteúdo, você encontrará informações valiosas para levar sua presença online ao próximo nível.",
    data: "15/09/2023",
    categoria: "marketing",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Tendências em Vendas B2B",
    subtitulo: "O que esperar no próximo ano",
    descricao:
      "Explore as tendências emergentes em vendas B2B e saiba como adaptar sua abordagem para ter sucesso em um mercado em constante evolução.",
    texto:
      "As vendas business-to-business (B2B) estão passando por uma transformação significativa à medida que a tecnologia e as preferências dos clientes evoluem. Neste artigo, analisamos as tendências mais recentes que estão moldando o cenário de vendas B2B. Desde automação de vendas até personalização de abordagens de vendas, você descobrirá como se manter relevante no mundo das vendas B2B. Esteja preparado para o próximo ano com insights valiosos e estratégias inovadoras.",
    data: "20/09/2023",
    categoria: "vendas",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Inovações em Tecnologia",
    subtitulo: "As últimas novidades do mundo da tecnologia",
    descricao:
      "Fique por dentro das mais recentes inovações tecnológicas, desde inteligência artificial até a próxima geração de dispositivos móveis.",
    texto:
      "A tecnologia está evoluindo a um ritmo frenético, e é importante para profissionais e entusiastas da tecnologia estarem atualizados sobre as últimas inovações. Este artigo mergulha fundo nas inovações mais recentes, desde avanços em inteligência artificial até o que esperar da próxima geração de dispositivos móveis. Se você deseja estar na vanguarda da tecnologia, este artigo é leitura obrigatória.",
    data: "25/09/2023",
    categoria: "tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Gestão Financeira Empresarial",
    subtitulo: "Dicas para manter suas finanças em ordem",
    descricao:
      "Aprenda as melhores práticas de contabilidade e gestão financeira para garantir a saúde financeira de sua empresa.",
    texto:
      "A gestão financeira é uma parte crítica de qualquer empresa. Este artigo oferece dicas e orientações essenciais para manter suas finanças empresariais em ordem. De estratégias de orçamento a métodos de contabilidade eficazes, você encontrará conselhos práticos para garantir a estabilidade financeira de sua empresa.",
    data: "10/09/2023",
    categoria: "contabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Estratégias de Conteúdo para SEO",
    subtitulo: "Melhorando sua visibilidade online",
    descricao:
      "Saiba como criar conteúdo otimizado para mecanismos de busca e aumentar sua classificação nos resultados de pesquisa.",
    texto:
      "A otimização de mecanismos de busca (SEO) desempenha um papel fundamental na visibilidade online. Neste artigo, exploramos estratégias de conteúdo específicas para SEO que podem ajudar a melhorar sua classificação nos resultados de pesquisa. Desde a pesquisa de palavras-chave até a criação de conteúdo de alta qualidade, você descobrirá como impulsionar sua presença online com técnicas de SEO eficazes.",
    data: "12/09/2023",
    categoria: "marketing",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Abordagens Inovadoras de Vendas",
    subtitulo: "Rompendo com as práticas tradicionais",
    descricao:
      "Explore estratégias de vendas inovadoras que vão além das abordagens tradicionais e ajudam a conquistar clientes de forma única.",
    texto:
      "As abordagens tradicionais de vendas estão evoluindo para atender às demandas em constante mudança dos clientes. Neste artigo, mergulhamos em abordagens inovadoras de vendas que vão além dos métodos convencionais. Desde a criação de experiências de compra personalizadas até a incorporação de tecnologia de ponta, você aprenderá como conquistar clientes de maneiras únicas e eficazes.",
    data: "22/09/2023",
    categoria: "vendas",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Tecnologias Emergentes para 2024",
    subtitulo: "Previsões e oportunidades",
    descricao:
      "Descubra as tecnologias emergentes que provavelmente moldarão o cenário empresarial no próximo ano e as oportunidades que elas apresentam.",
    texto:
      "O mundo da tecnologia está em constante evolução, e é crucial estar à frente das tendências emergentes. Neste artigo, apresentamos previsões e insights sobre as tecnologias emergentes que provavelmente impactarão o cenário empresarial em 2024. Esteja preparado para identificar oportunidades e adaptar sua estratégia de negócios às inovações tecnológicas que estão por vir.",
    data: "27/09/2023",
    categoria: "tecnologia",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Auditoria Financeira Simplificada",
    subtitulo: "Passos para uma auditoria eficaz",
    descricao:
      "Aprenda como conduzir uma auditoria financeira eficaz e garantir a conformidade financeira de sua empresa.",
    texto:
      "A auditoria financeira é uma parte essencial da gestão financeira empresarial. Este artigo fornece um guia simplificado sobre como realizar uma auditoria financeira eficaz. De preparação à execução e relatórios, você encontrará passos práticos para garantir a conformidade financeira de sua empresa.",
    data: "05/09/2023",
    categoria: "contabilidade",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Estratégias de Redes Sociais",
    subtitulo: "Construindo uma presença sólida",
    descricao:
      "Explore as melhores práticas para utilizar as redes sociais como uma ferramenta eficaz de marketing e engajamento do público.",
    texto:
      "As redes sociais desempenham um papel vital na construção de uma presença online forte. Neste artigo, compartilhamos estratégias comprovadas para utilizar as redes sociais como uma ferramenta eficaz de marketing e engajamento do público. De criação de conteúdo envolvente a estratégias de publicidade direcionada, você aprenderá como construir uma presença sólida nas redes sociais.",
    data: "18/09/2023",
    categoria: "marketing",
  },
  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    titulo: "Negociação de Contratos Vencedores",
    subtitulo: "Dicas para fechar acordos bem-sucedidos",
    descricao:
      "Domine a arte da negociação de contratos e aprenda a fechar acordos que beneficiem todas as partes envolvidas.",
    texto:
      "A negociação de contratos é uma habilidade essencial nos negócios. Neste artigo, compartilhamos dicas valiosas para dominar a arte da negociação de contratos e fechar acordos que sejam vantajosos para todas as partes envolvidas. Desde estratégias de negociação até a redação de contratos eficazes, você estará preparado para o sucesso nas negociações comerciais.",
    data: "30/09/2023",
    categoria: "vendas",
  },
];

const inputPesquisa = document.getElementById("pesquisa");
const resultadosDiv = document.getElementById("resultados");

inputPesquisa.addEventListener("input", function () {
  const termoPesquisa = inputPesquisa.value.toLowerCase();

  if (termoPesquisa === "") {
    resultadosDiv.innerHTML = ""; // Limpa os resultados quando o campo estiver vazio
  } else {
    const resultadosFiltrados = artigos.filter((artigo) =>
      artigo.titulo.toLowerCase().includes(termoPesquisa)
    );
    mostrarResultados(resultadosFiltrados);
  }
});

function mostrarResultados(resultados) {
  resultadosDiv.innerHTML = "";

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "Nenhum artigo encontrado.";
  } else {
    resultados.forEach((artigo) => {
      const link = document.createElement("a");
      link.href =
        "artigo.html?titulo=" + encodeURIComponent(artigo.titulo);
      link.textContent = artigo.titulo;
      link.style.display = "block"; // Exibir os itens um abaixo do outro
      link.style.textDecoration = "none"; // Remover sublinhado
      link.style.color = "#000"; // Cor preta

      resultadosDiv.appendChild(link);
    });
  }
}

function mostrarResultados(resultados) {
  resultadosDiv.innerHTML = "";

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "Nenhum artigo encontrado.";
  } else {
    resultados.forEach((artigo) => {
      const link = document.createElement("a");
      link.href =
        "artigo.html?titulo=" + encodeURIComponent(artigo.titulo);
      link.textContent = artigo.titulo;
      link.style.display = "block"; // Exibir os itens um abaixo do outro
      link.style.textDecoration = "none"; // Remover sublinhado
      link.style.color = "#000"; // Cor preta

      link.addEventListener("click", function () {
        // Armazenar os dados do artigo em localStorage
        localStorage.setItem("artigoSelecionado", JSON.stringify(artigo));
      });

      resultadosDiv.appendChild(link);
    });
  }
}
