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
              <div class="row mt-5 row-col-gr flex-wrap gap-3">
                      <div
                          class=" col-lg-4 card rounded-3 elevacao div-artigo">
                          <div class="card-body card-artigo">
                              <img
                                  src="https://storage.googleapis.com/meetime-blog/wp-content/uploads/2020/08/Fechamento-de-neg%C3%B3cios-como-construir-efetivamente-seu-discurso-de-vendas-roteiro.png">
                              <p class="category">Vendas</p>

                          </div>

                          <div class="p-4">
                              <h4 class=" ">Negociação de Contratos Vencedores</h4>
                              <p class="py-2">Domine a arte da negociação de contratos e aprenda a fechar acordos que beneficiem todas as partes envolvidas.</p>
                              <a
                                  href="https://contabilidaderecife.com/artigo.html?titulo=Negocia%C3%A7%C3%A3o%20de%20Contratos%20Vencedores"
                                  class="text-decoration-none">Ver mais</a>
                          </div>
                      </div>
                      <div
                          class=" col-lg-4 card rounded-3 elevacao div-artigo">
                          <div class="card-body card-artigo">
                              <img
                                  src="https://imagens.ebc.com.br/NdkjXp5MVYic-6AxUEk5vbDLTA0=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/mca_abr_21031913349.jpg?itok=CoVdCaT2">
                              <p class="category">Contabilidade</p>

                          </div>

                          <div class="p-4">
                              <h4 class=" ">Imposto de Renda 2023: O que você precisa saber</h4>
                              <p class="py-2">Fique por dentro das últimas mudanças no Imposto de Renda 2023 e saiba como se preparar para a declaração.</p>
                              <a
                                  href="https://contabilidaderecife.com/artigo.html?titulo=Imposto%20de%20Renda%202023%3A%20O%20que%20voc%C3%AA%20precisa%20saber"
                                  class="text-decoration-none">Ver mais</a>
                          </div>
                      </div>
                      <div
                          class=" col-lg-4 card rounded-3 elevacao div-artigo">
                          <div class="card-body card-artigo">
                              <img
                                  src="https://blog.vindi.com.br/wp-content/uploads/2020/11/melhores-plataformas-de-pagamento-online.png">
                              <p class="category">Tecnologia</p>

                          </div>

                          <div class="p-4">
                              <h4 class=" ">EInovações em Pagamentos Online</h4>
                              <p class="py-2">Explore as últimas inovações em pagamentos online que podem melhorar a experiência do cliente.</p>
                              <a
                                  href="https://contabilidaderecife.com/artigo.html?titulo=Inova%C3%A7%C3%B5es%20em%20Pagamentos%20Online"
                                  class="text-decoration-none">Ver mais</a>
                          </div>
                      </div>
                  </div>
          `;
  return cardHTML;
}

function adicionarCards() {
  var cardsContainer = document.getElementById("cardsContainer");

  cards.forEach(function (card) {
    var cardHTML = criarCard(card.imagem, card.texto);
    var divCard = document.createElement("div");
    divCard.innerHTML = cardHTML;
    cardsContainer.appendChild(divCard);
  });
}

var verMaisBtn = document.getElementById("verMaisBtn");
verMaisBtn.addEventListener("click", function () {
  adicionarCards(); // Chama a função para adicionar os cards quando o botão "Ver Mais" é clicado
  verMaisBtn.style.display = "none"; // Oculta o botão "Ver Mais"
});


const artigos = [
  {
    imagem:
      "https://neilpatel.com/wp-content/uploads/2023/06/marketing-digital.jpg",
    imagem2:
      "https://blog.anhanguera.com/wp-content/uploads/2021/01/post_thumbnail-19e853b7412b4114d02a2009189bf891.jpeg",
    titulo: "Estratégias de Marketing Digital",
    subtitulo: "Maximizando seu alcance online",
    descricao:
      "Descubra como criar uma estratégia de marketing digital eficaz para expandir sua presença online e atrair mais clientes.",
    texto:
      "O marketing digital se tornou uma parte essencial de qualquer estratégia de negócios nos dias de hoje. Com a crescente competição online, é fundamental para as empresas entenderem como maximizar seu alcance na internet. Este artigo explora as últimas tendências em marketing digital e fornece insights sobre como criar uma estratégia sólida. Desde otimização de mecanismos de busca (SEO) até publicidade nas redes sociais e marketing de conteúdo, você encontrará informações valiosas para levar sua presença online ao próximo nível.",
    textocomplementar:
      "Uma das pedras fundamentais de qualquer estratégia de marketing digital é entender seu público-alvo. Quem são seus clientes ideais? O que os motiva? Quais são seus hábitos online? Ao responder a essas perguntas, você poderá criar conteúdo e campanhas mais direcionados, aumentando assim a eficácia do seu marketing digital. Usar ferramentas de análise de dados e pesquisas de mercado pode ser fundamental nesse processo. ",
    data: "15/09/2023",
    categoria: "Marketing",
  },

  {
    imagem:
      "https://www.funildevendas.com.br/wp-content/uploads/2021/07/Vendas-B2B-Vendas-racionais.jpg",
    imagem2:
      "https://respostas.sebrae.com.br/wp-content/uploads/2020/11/10-estrat%C3%A9gias-de-inbound-marketing-para-empresas-b2b.jpg",
    titulo: "Tendências em Vendas B2B",
    subtitulo: "O que esperar no próximo ano",
    descricao:
      "Explore as tendências emergentes em vendas B2B e saiba como adaptar sua abordagem para ter sucesso em um mercado em constante evolução.",
    texto:
      "As vendas business-to-business (B2B) estão passando por uma transformação significativa à medida que a tecnologia e as preferências dos clientes evoluem. Neste artigo, analisamos as tendências mais recentes que estão moldando o cenário de vendas B2B. Desde automação de vendas até personalização de abordagens de vendas, você descobrirá como se manter relevante no mundo das vendas B2B. Esteja preparado para o próximo ano com insights valiosos e estratégias inovadoras.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre tendências em vendas B2B, como exemplos de empresas que adotaram com sucesso novas tendências e suas experiências. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "20/09/2023",
    categoria: "Vendas",
  },

  {
    imagem:
      "https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg",
    imagem2:
      "https://blog.cielo.com.br/wp-content/uploads/2022/03/cielo-tecnologia-inovacao-negocios.jpg",
    titulo: "Inovações em Tecnologia",
    subtitulo: "As últimas novidades do mundo da tecnologia",
    descricao:
      "Fique por dentro das mais recentes inovações tecnológicas, desde inteligência artificial até a próxima geração de dispositivos móveis.",
    texto:
      "A tecnologia está evoluindo a um ritmo frenético, e é importante para profissionais e entusiastas da tecnologia estarem atualizados sobre as últimas inovações. Este artigo mergulha fundo nas inovações mais recentes, desde avanços em inteligência artificial até o que esperar da próxima geração de dispositivos móveis. Se você deseja estar na vanguarda da tecnologia, este artigo é leitura obrigatória.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre as inovações em tecnologia, como exemplos de produtos ou empresas que estão liderando inovações. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "25/09/2023",
    categoria: "Tecnologia",
  },
  {
    imagem1:
      "https://www.vivendodefreela.com.br/wp-content/uploads/2019/06/finan%C3%A7as-para-aut%C3%B4nomos.jpg",
    imagem2:
      "https://amcontabilidadeonline.com.br/wp-content/uploads/2023/02/IMAGEM-BLOG-DPG-18.jpg",
    titulo: "Dicas de Contabilidade para Pequenas Empresas",
    subtitulo: "Mantenha suas finanças sob controle",
    descricao:
      "Aprenda estratégias de contabilidade essenciais para o sucesso de pequenas empresas.",
    texto:
      "A gestão financeira é crítica para o sucesso de pequenas empresas. Neste artigo, fornecemos dicas valiosas de contabilidade para manter suas finanças sob controle. De planejamento financeiro a orçamento, ajudamos você a tomar decisões informadas e a garantir a saúde financeira de sua empresa.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre ferramentas de contabilidade úteis, formas de reduzir despesas e exemplos de pequenas empresas que obtiveram sucesso com essas dicas.",
    data: "15/06/2023",
    categoria: "Contabilidade",
  },

  {
    imagem:
      "https://www.mundodomarketing.com.br/wp-content/uploads/2022/11/marketing_dados.png",
    imagem2:
      "https://roimine.com/wp-content/uploads/2022/08/Conheca-5-estrategias-de-marketing-digital-para-vendas.jpg",
    titulo: "Estratégias de Conteúdo para SEO",
    subtitulo: "Melhorando sua visibilidade online",
    descricao:
      "Saiba como criar conteúdo otimizado para mecanismos de busca e aumentar sua classificação nos resultados de pesquisa.",
    texto:
      "A otimização de mecanismos de busca (SEO) desempenha um papel fundamental na visibilidade online. Neste artigo, exploramos estratégias de conteúdo específicas para SEO que podem ajudar a melhorar sua classificação nos resultados de pesquisa. Desde a pesquisa de palavras-chave até a criação de conteúdo de alta qualidade, você descobrirá como impulsionar sua presença online com técnicas de SEO eficazes.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre estratégias de conteúdo para SEO, como ferramentas úteis ou estatísticas relevantes sobre SEO. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "12/09/2023",
    categoria: "Marketing",
  },

  {
    imagem:
      "https://blog.ploomes.com/wp-content/uploads/2023/05/tecnicas-de-vendas.png",
    imagem2:
      "https://gestaodeclientes.com.br/wp-content/uploads/2016/10/abordagem-do-cliente.jpg",
    titulo: "Abordagens Inovadoras de Vendas",
    subtitulo: "Rompendo com as práticas tradicionais",
    descricao:
      "Explore estratégias de vendas inovadoras que vão além das abordagens tradicionais e ajudam a conquistar clientes de forma única.",
    texto:
      "As abordagens tradicionais de vendas estão evoluindo para atender às demandas em constante mudança dos clientes. Neste artigo, mergulhamos em abordagens inovadoras de vendas que vão além dos métodos convencionais. Desde a criação de experiências de compra personalizadas até a incorporação de tecnologia de ponta, você aprenderá como conquistar clientes de maneiras únicas e eficazes.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre abordagens inovadoras de vendas, como estudos de caso de empresas que implementaram com êxito essas estratégias ou estatísticas que destacam a eficácia dessas abordagens. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "22/09/2023",
    categoria: "Vendas",
  },

  {
    imagem:
      "https://www.unodata.com.br/wp-content/uploads/2022/10/blog-imagem-1-e1588272102314.jpg",
    imagem2:
      "https://s2.glbimg.com/BE017b56z41Csr7dbSx86ZlkEFM=/620x430/e.glbimg.com/og/ed/f/original/2019/08/19/gettyimages-943067460.jpg",
    titulo: "Tecnologias Emergentes para 2024",
    subtitulo: "Previsões e oportunidades",
    descricao:
      "Descubra as tecnologias emergentes que provavelmente moldarão o cenário empresarial no próximo ano e as oportunidades que elas apresentam.",
    texto:
      "O mundo da tecnologia está em constante evolução, e é crucial estar à frente das tendências emergentes. Neste artigo, apresentamos previsões e insights sobre as tecnologias emergentes que provavelmente impactarão o cenário empresarial em 2024. Esteja preparado para identificar oportunidades e adaptar sua estratégia de negócios às inovações tecnológicas que estão por vir.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre as tecnologias emergentes para 2024, como exemplos de empresas que estão investindo nessas tecnologias ou os benefícios que elas podem trazer para diferentes setores. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "27/09/2023",
    categoria: "Tecnologia",
  },

  {
    imagem:
      "https://lirp.cdn-website.com/616afb97/dms3rep/multi/opt/Auditoria+Financeira-1920w.jpg",
    imagem2:
      "https://img.freepik.com/fotos-premium/muitos-graficos-e-lupa-revisando-dados-relatorios-financeiros-e-lupa-fundo-de-reflexao_348487-1165.jpg?w=2000",
    titulo: "Auditoria Financeira Simplificada",
    subtitulo: "Passos para uma auditoria eficaz",
    descricao:
      "Aprenda como conduzir uma auditoria financeira eficaz e garantir a conformidade financeira de sua empresa.",
    texto:
      "A auditoria financeira é uma parte essencial da gestão financeira empresarial. Este artigo fornece um guia simplificado sobre como realizar uma auditoria financeira eficaz. De preparação à execução e relatórios, você encontrará passos práticos para garantir a conformidade financeira de sua empresa.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre a auditoria financeira, como ferramentas de software úteis para realizar auditorias ou dicas específicas para setores financeiros diferentes. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "05/09/2023",
    categoria: "Contabilidade",
  },

  {
    imagem:
      "https://www.publi.com.br/wp-content/uploads/2020/05/x-estrategias-de-marketing-digital-para-voce-utilizar-nas-redes-sociais-da-sua-empresa-20200427141133.jpg-1.jpg",
    imagem2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhLsj1-oYgIBWr8-9A75swpeBViWSy7_OEpM-eFo8br512Gl7YuzdVlq0LiKOFs-yiS0&usqp=CAU",
    titulo: "Estratégias para engajamento nas Redes Sociais",
    subtitulo: "Construindo uma presença sólida",
    descricao:
      "Explore as melhores práticas para utilizar as redes sociais como uma ferramenta eficaz de marketing e engajamento do público.",
    texto:
      "As redes sociais desempenham um papel vital na construção de uma presença online forte. Neste artigo, compartilhamos estratégias comprovadas para utilizar as redes sociais como uma ferramenta eficaz de marketing e engajamento do público. De criação de conteúdo envolvente a estratégias de publicidade direcionada, você aprenderá como construir uma presença sólida nas redes sociais.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre estratégias de redes sociais, como exemplos de campanhas de sucesso em redes sociais ou métricas-chave para avaliar o desempenho nas redes sociais. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "18/09/2023",
    categoria: "Marketing",
  },

  {
    imagem:
      "https://creci-pi.org.br/wp-content/uploads/2017/12/contratacao-corretora.jpg",
    imagem2:
      "https://zenite.blog.br/wp-content/uploads/2021/07/fotolia-547953-subscription-l-1024x718.jpg",
    titulo: "Negociação de Contratos Vencedores",
    subtitulo: "Dicas para fechar acordos bem-sucedidos",
    descricao:
      "Domine a arte da negociação de contratos e aprenda a fechar acordos que beneficiem todas as partes envolvidas.",
    texto:
      "A negociação de contratos é uma habilidade essencial nos negócios. Neste artigo, compartilhamos dicas valiosas para dominar a arte da negociação de contratos e fechar acordos que sejam vantajosos para todas as partes envolvidas. Desde estratégias de negociação até a redação de contratos eficazes, você estará preparado para o sucesso nas negociações comerciais.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre negociação de contratos, como exemplos de negociações bem-sucedidas ou abordagens específicas para resolver conflitos durante negociações. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "30/09/2023",
    categoria: "Vendas",
  },
  {
    imagem1:
      "https://olhardigital.com.br/wp-content/uploads/2021/03/Highcompressed_989329522-scaled.jpg",
    imagem2:
      "https://diariodocomercio.com.br/wp-content/uploads/2022/09/declaracao-imposto-de-renda-contabilidade.jpg",
    titulo: "Imposto de Renda 2023: O que você precisa saber",
    subtitulo: "Novas regras e prazos",
    descricao:
      "Fique por dentro das últimas mudanças no Imposto de Renda 2023 e saiba como se preparar para a declaração.",
    texto:
      "O Imposto de Renda é uma preocupação anual para muitos brasileiros. Neste artigo, explicamos as novas regras e prazos para a declaração do Imposto de Renda em 2023. Além disso, oferecemos dicas para otimizar sua declaração e garantir que você esteja em conformidade com a legislação fiscal.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre deduções fiscais, documentação necessária e orientações práticas para a declaração de Imposto de Renda.",
    data: "10/01/2023",
    categoria: "Contabilidade",
  },
  {
    imagem1:
      "https://ondigitals.com/wp-content/uploads/cach-viet-bai-chuan-seo-10.jpg",
    imagem2:
      "https://safiradesign.com.br/wp-content/uploads/2022/06/tecnicas-de-seo-1170x700.jpg",
    titulo: "Tendências de SEO para 2023",
    subtitulo: "Melhore sua classificação nos mecanismos de busca",
    descricao:
      "Acompanhe as tendências em SEO que moldarão a otimização de mecanismos de busca em 2023.",
    texto:
      "O SEO é fundamental para a visibilidade online. Neste artigo, exploramos as tendências mais recentes em otimização de mecanismos de busca para 2023. Desde o aumento da importância da busca por voz até as atualizações dos algoritmos do Google, revelamos como você pode melhorar sua classificação nos mecanismos de busca e direcionar mais tráfego qualificado para o seu site.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre ferramentas de SEO úteis, estratégias de link building e exemplos de empresas que obtiveram sucesso com essas táticas.",
    data: "15/02/2023",
    categoria: "Marketing",
  },
  {
    imagem1:
      "https://www.salesforce.com/br/blog/wp-content/uploads/sites/6/2023/06/como-melhorar-a-segmentacao-de-e-mail-marketing201201.jpg",
    imagem2:
      "https://admin.ecommercebrasil.com.br/wp-content/uploads/2023/06/85-marketing.jpg.webp",
    titulo: "Estratégias de E-mail Marketing Eficientes",
    subtitulo: "Maximize o ROI com campanhas de e-mail",
    descricao:
      "Descubra como criar campanhas de e-mail marketing eficazes que geram resultados positivos para o seu negócio.",
    texto:
      "O e-mail marketing continua sendo uma das ferramentas mais poderosas para empresas. Neste artigo, compartilhamos estratégias comprovadas para criar campanhas de e-mail marketing eficazes. Desde segmentação de lista até automação de e-mails, você aprenderá como maximizar o ROI e envolver seus assinantes de maneira significativa.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre as melhores práticas de design de e-mail, taxas de abertura e exemplos de empresas que alcançaram sucesso com suas campanhas de e-mail.",
    data: "20/03/2023",
    categoria: "Marketing",
  },
  {
    imagem1:
      "https://cdn.shopify.com/s/files/1/0788/9687/files/01_mao_entrega_sacola_pela_tela_do_computador_para_outra_mao_segurando_um_cartao_de_credito.jpg?v=1624757057",
    imagem2:
      "https://ramper.com.br/wp-content/uploads/2019/09/Como-aumentar-vendas-no-e-commerce-6-dicas-infal%C3%ADveis.jpg",
    titulo: "Vendas no E-commerce: Tendências para 2023",
    subtitulo: "Aprimore sua estratégia de vendas online",
    descricao:
      "Mantenha-se atualizado com as últimas tendências de vendas no e-commerce para aumentar seus resultados.",
    texto:
      "O comércio eletrônico continua em ascensão, e é essencial para os varejistas online acompanhar as tendências. Neste artigo, destacamos as principais tendências de vendas no e-commerce para 2023. Desde a personalização da experiência do cliente até o uso de IA para melhorar as recomendações de produtos, mostramos como você pode aprimorar sua estratégia de vendas online e impulsionar o crescimento do seu negócio.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre métricas-chave para medir o sucesso no e-commerce, exemplos de marcas de sucesso e estratégias de marketing para e-commerce.",
    data: "05/04/2023",
    categoria: "Vendas",
  },

  {
    imagem1:
      "https://www.kangu.com.br/wp-content/uploads/2022/01/meios-de-pagamento-online.jpg",
    imagem2:
      "https://www.kangu.com.br/wp-content/uploads/2022/01/meios-de-pagamento-online.jpg",
    titulo: "Inovações em Pagamentos Online",
    subtitulo: "Facilite as transações para seus clientes",
    descricao:
      "Explore as últimas inovações em pagamentos online que podem melhorar a experiência do cliente.",
    texto:
      "Os métodos de pagamento online estão evoluindo rapidamente, e as empresas que adotam inovações se destacam. Neste artigo, destacamos as mais recentes inovações em pagamentos online, desde carteiras digitais até criptomoedas. Descubra como essas tecnologias podem facilitar as transações para seus clientes e melhorar a eficiência dos processos de pagamento.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre segurança de pagamentos online, regulamentações relevantes e exemplos de empresas que implementaram com sucesso essas inovações.",
    data: "10/05/2023",
    categoria: "Tecnologia",
  },
  {
    imagem:
      "https://blog.vetoreditora.com.br/wp-content/uploads/2021/05/como-as-financas-afetam-nosso-comportamento-dentro-da-empresa.jpg",
    imagem2:
      "https://liberal.com.br/wp-content/uploads/2020/09/finan%C3%A7as.jpg",
    titulo: "Gestão Financeira Empresarial",
    subtitulo: "Dicas para manter suas finanças em ordem",
    descricao:
      "Aprenda as melhores práticas de contabilidade e gestão financeira para garantir a saúde financeira de sua empresa.",
    texto:
      "A gestão financeira é uma parte crítica de qualquer empresa. Este artigo oferece dicas e orientações essenciais para manter suas finanças empresariais em ordem. De estratégias de orçamento a métodos de contabilidade eficazes, você encontrará conselhos práticos para garantir a estabilidade financeira de sua empresa.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre gestão financeira empresarial, como exemplos de empresas que melhoraram suas finanças seguindo as dicas apresentadas. Certifique-se de incluir quatro parágrafos de conteúdo relevante.",
    data: "10/09/2023",
    categoria: "Contabilidade",
  },
  {
    imagem1:
      "https://www.vivendodefreela.com.br/wp-content/uploads/2019/06/finan%C3%A7as-para-aut%C3%B4nomos.jpg",
    imagem2:
      "https://amcontabilidadeonline.com.br/wp-content/uploads/2023/02/IMAGEM-BLOG-DPG-18.jpg",
    titulo: "Dicas de Contabilidade para Pequenas Empresas",
    subtitulo: "Mantenha suas finanças sob controle",
    descricao:
      "Aprenda estratégias de contabilidade essenciais para o sucesso de pequenas empresas.",
    texto:
      "A gestão financeira é crítica para o sucesso de pequenas empresas. Neste artigo, fornecemos dicas valiosas de contabilidade para manter suas finanças sob controle. De planejamento financeiro a orçamento, ajudamos você a tomar decisões informadas e a garantir a saúde financeira de sua empresa.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre ferramentas de contabilidade úteis, formas de reduzir despesas e exemplos de pequenas empresas que obtiveram sucesso com essas dicas.",
    data: "15/06/2023",
    categoria: "Contabilidade",
  },
  {
    imagem1:
      "https://www.vivendodefreela.com.br/wp-content/uploads/2019/06/finan%C3%A7as-para-aut%C3%B4nomos.jpg",
    imagem2:
      "https://amcontabilidadeonline.com.br/wp-content/uploads/2023/02/IMAGEM-BLOG-DPG-18.jpg",
    titulo: "Dicas de Contabilidade para Pequenas Empresas",
    subtitulo: "Mantenha suas finanças sob controle",
    descricao:
      "Aprenda estratégias de contabilidade essenciais para o sucesso de pequenas empresas.",
    texto:
      "A gestão financeira é crítica para o sucesso de pequenas empresas. Neste artigo, fornecemos dicas valiosas de contabilidade para manter suas finanças sob controle. De planejamento financeiro a orçamento, ajudamos você a tomar decisões informadas e a garantir a saúde financeira de sua empresa.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre ferramentas de contabilidade úteis, formas de reduzir despesas e exemplos de pequenas empresas que obtiveram sucesso com essas dicas.",
    data: "15/06/2023",
    categoria: "Contabilidade",
  },

  {
    imagem1:
      "https://webcion.com/wp-content/uploads/2022/04/agencia-de-marketing-digital-que-es-facebook-ads-1080x675-1.jpg",
    imagem2:
      "https://adsconsultor.com.br/wp-content/uploads/2022/01/saiba-como-medir-resultados-de-marketing-usando-conteudo-interativo_61dae32a95ae0.jpeg",
    titulo: "Estratégias de Anúncios no Facebook",
    subtitulo: "Alcance seu público-alvo no Facebook",
    descricao:
      "Maximize o potencial do Facebook para sua estratégia de marketing digital.",
    texto:
      "O Facebook ainda é uma plataforma poderosa para anunciar seus produtos e serviços. Neste artigo, exploramos estratégias eficazes de anúncios no Facebook. Desde a segmentação precisa até o uso de anúncios em vídeo, mostramos como você pode alcançar seu público-alvo e obter resultados positivos em suas campanhas de marketing digital.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre métricas de anúncios no Facebook, melhores práticas de design de anúncios e exemplos de campanhas bem-sucedidas.",
    data: "20/07/2023",
    categoria: "Marketing",
  },
  {
    imagem1:
      "https://treeti.com.br/wp-content/uploads/2019/04/adults-analysis-brainstorming-1661004-1080x675.jpg",
    imagem2:
      "https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2018/06/199802-como-montar-a-estrutura-de-ti-da-sua-empresa-1.png",
    titulo: "Como Preparar sua Empresa para a Transformação Digital",
    subtitulo: "Ferramentas e estratégias essenciais",
    descricao:
      "Descubra como sua empresa pode abraçar a transformação digital para se manter competitiva.",
    texto:
      "A transformação digital é uma necessidade para empresas que desejam se manter competitivas. Neste artigo, oferecemos insights sobre como preparar sua empresa para a transformação digital. Discutimos ferramentas e estratégias essenciais, desde a migração para a nuvem até a automação de processos, para que você possa abraçar as oportunidades oferecidas pela era digital.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre desafios comuns na transformação digital, estudos de caso de empresas que tiveram sucesso e as etapas práticas para implementar a transformação digital.",
    data: "05/08/2023",
    categoria: "Tecnologia",
  },
  {
    imagem1:
      "https://treeti.com.br/wp-content/uploads/2019/04/adults-analysis-brainstorming-1661004-1080x675.jpg",
    imagem2:
      "https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2018/06/199802-como-montar-a-estrutura-de-ti-da-sua-empresa-1.png",
    titulo: "Como Preparar sua Empresa para a Transformação Digital",
    subtitulo: "Ferramentas e estratégias essenciais",
    descricao:
      "Descubra como sua empresa pode abraçar a transformação digital para se manter competitiva.",
    texto:
      "A transformação digital é uma necessidade para empresas que desejam se manter competitivas. Neste artigo, oferecemos insights sobre como preparar sua empresa para a transformação digital. Discutimos ferramentas e estratégias essenciais, desde a migração para a nuvem até a automação de processos, para que você possa abraçar as oportunidades oferecidas pela era digital.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre desafios comuns na transformação digital, estudos de caso de empresas que tiveram sucesso e as etapas práticas para implementar a transformação digital.",
    data: "05/08/2023",
    categoria: "Tecnologia",
  },
  {
    imagem1:
      "https://treeti.com.br/wp-content/uploads/2019/04/adults-analysis-brainstorming-1661004-1080x675.jpg",
    imagem2:
      "https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2018/06/199802-como-montar-a-estrutura-de-ti-da-sua-empresa-1.png",
    titulo: "Como Preparar sua Empresa para a Transformação Digital",
    subtitulo: "Ferramentas e estratégias essenciais",
    descricao:
      "Descubra como sua empresa pode abraçar a transformação digital para se manter competitiva.",
    texto:
      "A transformação digital é uma necessidade para empresas que desejam se manter competitivas. Neste artigo, oferecemos insights sobre como preparar sua empresa para a transformação digital. Discutimos ferramentas e estratégias essenciais, desde a migração para a nuvem até a automação de processos, para que você possa abraçar as oportunidades oferecidas pela era digital.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre desafios comuns na transformação digital, estudos de caso de empresas que tiveram sucesso e as etapas práticas para implementar a transformação digital.",
    data: "05/08/2023",
    categoria: "Tecnologia",
  },
  {
    imagem1:
      "https://storage.googleapis.com/meetime-blog/wp-content/uploads/2020/08/Fechamento-de-neg%C3%B3cios-como-construir-efetivamente-seu-discurso-de-vendas-roteiro.png",
    imagem2:
      "https://blog.cyrela.com.br/wp-content/uploads/2020/01/original-93f8f48ecf286f96841368ee3b45264b.jpg",
    titulo: "Negociação de Contratos Empresariais: Melhores Práticas",
    subtitulo: "Garanta acordos bem-sucedidos",
    descricao:
      "Domine a arte da negociação de contratos para o sucesso de sua empresa.",
    texto:
      "A negociação de contratos é uma parte essencial dos negócios. Neste artigo, compartilhamos melhores práticas para dominar a arte da negociação de contratos empresariais. Desde a identificação de pontos de negociação até a redação de contratos sólidos, ajudamos você a garantir acordos bem-sucedidos que beneficiam todas as partes envolvidas.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre estratégias avançadas de negociação, táticas de resolução de conflitos e exemplos de contratos empresariais bem-sucedidos.",
    data: "15/09/2023",
    categoria: "Vendas",
  },

  {
    imagem1:
      "https://ramper.com.br/wp-content/uploads/2019/09/Como-aumentar-vendas-no-e-commerce-6-dicas-infal%C3%ADveis.jpg",
    imagem2:
      "https://cdn.shopify.com/s/files/1/0788/9687/files/01_mao_entrega_sacola_pela_tela_do_computador_para_outra_mao_segurando_um_cartao_de_credito.jpg?v=1624757057",
    titulo: "Vendas no E-commerce: Tendências para 2023",
    subtitulo: "Aprimore sua estratégia de vendas online",
    descricao:
      "Mantenha-se atualizado com as últimas tendências de vendas no e-commerce para aumentar seus resultados.",
    texto:
      "O comércio eletrônico continua em ascensão, e é essencial para os varejistas online acompanhar as tendências. Neste artigo, destacamos as principais tendências de vendas no e-commerce para 2023. Desde a personalização da experiência do cliente até o uso de IA para melhorar as recomendações de produtos, mostramos como você pode aprimorar sua estratégia de vendas online e impulsionar o crescimento do seu negócio.",
    textocomplementar:
      "No campo 'texto-complementar', você pode adicionar informações adicionais sobre métricas-chave para medir o sucesso no e-commerce, exemplos de marcas de sucesso e estratégias de marketing para e-commerce.",
    data: "05/04/2023",
    categoria: "Vendas",
  },
];

const inputPesquisa = document.getElementById("pesquisa");
const resultadosDiv = document.getElementById("resultados");

inputPesquisa.addEventListener("input", function () {
  const termoPesquisa = inputPesquisa.value.toLowerCase();

  if (termoPesquisa === "") {
    resultadosDiv.innerHTML = ""; 
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
    const resultadosExibidos = resultados.slice(0, 3);

    resultadosExibidos.forEach((artigo) => {
      const link = document.createElement("a");
      link.href = "artigo.html?titulo=" + encodeURIComponent(artigo.titulo);
      link.textContent = artigo.titulo;
      link.style.display = "block"; 
      link.style.textDecoration = "none";
      link.style.color = "#a1a1a1"; 

      link.addEventListener("click", function () {
        localStorage.setItem("artigoSelecionado", JSON.stringify(artigo));
      });

    
      resultadosDiv.appendChild(link);
    });
  }
}

